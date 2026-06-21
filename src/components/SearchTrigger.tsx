"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function SearchTrigger() {
  const { t } = useI18n();
  const [mod, setMod] = useState("Ctrl");

  useEffect(() => {
    const isMac =
      typeof navigator !== "undefined" &&
      /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent);
    setMod(isMac ? "⌘" : "Ctrl");
  }, []);

  return (
    <button
      type="button"
      className="cmdk-trigger"
      aria-label={t.nav.searchAria}
      aria-keyshortcuts="Control+K Meta+K"
      onClick={() => window.dispatchEvent(new Event("fdp:open-search"))}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="cmdk-trigger-label">{t.nav.search}</span>
      <span className="cmdk-trigger-kbd">{mod}&nbsp;K</span>
    </button>
  );
}
