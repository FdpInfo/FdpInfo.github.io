"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Dict } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import { cn } from "./dictionaries/cn";
import { ru } from "./dictionaries/ru";
import { es } from "./dictionaries/es";
import type { DeepPartial } from "./types";

// Runs before the browser paints on the client (so the detected/saved locale is
// applied with no English flash), and falls back to useEffect on the server to
// avoid the SSR useLayoutEffect warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type Locale = "en" | "pt" | "cn" | "ru" | "es";

export const LOCALES: {
  code: Locale;
  label: string;
  flag: string;
  htmlLang: string;
}[] = [
  { code: "en", label: "English", flag: "gb", htmlLang: "en" },
  { code: "pt", label: "Português (BR)", flag: "br", htmlLang: "pt-BR" },
  { code: "cn", label: "中文", flag: "cn", htmlLang: "zh-CN" },
  { code: "ru", label: "Русский", flag: "ru", htmlLang: "ru" },
  { code: "es", label: "Español", flag: "es", htmlLang: "es" },
];

const DICTS: Record<Locale, DeepPartial<Dict>> = { en, pt, cn, ru, es };
const STORAGE_KEY = "fdp-locale";
// Shareable per-language links, e.g. ?lang=pt. Read on load, written on change.
// The site is a static export, so this is handled entirely client-side.
const QUERY_KEY = "lang";

function applyHtmlLang(locale: Locale) {
  if (typeof document === "undefined") return;
  const meta = LOCALES.find((x) => x.code === locale);
  if (meta) document.documentElement.lang = meta.htmlLang;
}

// Maps the browser's preferred language to one of our locales (best effort).
function localeFromNavigator(): Locale | null {
  if (typeof navigator === "undefined") return null;
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("zh")) return "cn";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  return null;
}

function deepMerge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (!over) return base;
  const out = { ...(base as Record<string, unknown>) };
  for (const key in over) {
    const ov = (over as Record<string, unknown>)[key];
    const bv = (base as Record<string, unknown>)[key];
    if (
      ov &&
      typeof ov === "object" &&
      !Array.isArray(ov) &&
      bv &&
      typeof bv === "object"
    ) {
      out[key] = deepMerge(bv, ov as DeepPartial<typeof bv>);
    } else if (ov !== undefined) {
      out[key] = ov;
    }
  }
  return out as T;
}

type I18nValue = { t: Dict; locale: Locale; setLocale: (l: Locale) => void };
const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Resolve the initial locale before the first client paint (so a non-English
  // visitor lands directly on their language with no flash). SSR/hydration still
  // start from English, so there's no hydration mismatch.
  // Priority: ?lang= query > saved choice > browser language > English.
  useIsomorphicLayoutEffect(() => {
    let resolved: Locale | null = null;
    try {
      const fromUrl = new URLSearchParams(window.location.search).get(QUERY_KEY);
      if (fromUrl && fromUrl in DICTS) resolved = fromUrl as Locale;
      if (!resolved) {
        const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (saved && saved in DICTS) resolved = saved;
      }
    } catch {
      /* localStorage/URL unavailable */
    }
    if (!resolved) resolved = localeFromNavigator();
    if (resolved && resolved !== "en") setLocaleState(resolved);
    applyHtmlLang(resolved ?? "en");
  }, []);

  const setLocale = (l: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
      // Keep a shareable ?lang= in sync without a navigation/reload.
      const url = new URL(window.location.href);
      if (l === "en") url.searchParams.delete(QUERY_KEY);
      else url.searchParams.set(QUERY_KEY, l);
      window.history.replaceState(window.history.state, "", url);
    } catch {
      /* ignore persistence failures */
    }
    applyHtmlLang(l);
    setLocaleState(l);
  };

  const t = useMemo(() => deepMerge(en, DICTS[locale]) as Dict, [locale]);

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

// Falls back to English when used outside the provider (e.g. during static
// prerender of a component that hasn't been wrapped yet), so it never throws.
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) return { t: en as Dict, locale: "en", setLocale: () => {} };
  return ctx;
}
