"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, useI18n } from "@/lib/i18n";
import { Flag } from "@/lib/i18n/flags";

// Compact language selector: a single button showing the current flag + code;
// clicking it opens a dropdown listing every language (flag + native name).
// The whole site switches instantly (client-side) and the choice is persisted.
const CSS = `
.fdp-lang{position:relative;display:inline-flex;}
.fdp-lang-trigger{display:inline-flex;align-items:center;gap:.45rem;height:2.1rem;padding:0 .55rem;border-radius:9999px;border:1px solid rgba(148,163,184,.22);background:rgba(30,41,59,.45);color:#cbd5e1;font-size:.8rem;font-weight:600;line-height:1;font-family:inherit;cursor:pointer;transition:border-color .15s,background-color .15s,color .15s;}
.fdp-lang-trigger:hover{border-color:rgba(168,85,247,.55);background:rgba(51,65,85,.5);color:#fff;}
.fdp-lang-trigger:focus-visible{outline:2px solid rgba(168,85,247,.7);outline-offset:1px;}
.fdp-lang-flag{display:inline-flex;width:1.35rem;height:.95rem;border-radius:2px;overflow:hidden;flex-shrink:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.18);}
.fdp-lang-flag svg{width:100%;height:100%;display:block;}
.fdp-lang-code{letter-spacing:.03em;}
.fdp-lang-caret{font-size:.6rem;opacity:.7;transition:transform .15s;}
.fdp-lang[data-open="true"] .fdp-lang-caret{transform:rotate(180deg);}
.fdp-lang-menu{position:absolute;top:calc(100% + .45rem);right:0;z-index:120;min-width:11.5rem;background:rgb(15,23,42);border:1px solid rgba(148,163,184,.16);border-radius:.75rem;padding:.35rem;box-shadow:0 18px 44px -12px rgba(0,0,0,.75);display:flex;flex-direction:column;gap:1px;animation:fdpLangIn .15s ease-out;}
@keyframes fdpLangIn{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}
.fdp-lang-item{display:flex;align-items:center;gap:.6rem;width:100%;padding:.5rem .6rem;border:none;border-radius:.55rem;background:transparent;color:#e2e8f0;font-size:.85rem;font-family:inherit;text-align:left;cursor:pointer;}
.fdp-lang-item:hover{background:rgba(51,65,85,.55);}
.fdp-lang-item.is-active{background:rgba(126,34,206,.24);color:#fff;}
.fdp-lang-item:focus-visible{outline:2px solid rgba(168,85,247,.7);outline-offset:-2px;}
@media (prefers-reduced-motion:reduce){.fdp-lang-menu{animation:none;}}
`;

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="fdp-lang" ref={ref} data-open={open}>
      <style>{CSS}</style>
      <button
        type="button"
        className="fdp-lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((o) => !o)}
      >
        <Flag code={current.flag} className="fdp-lang-flag" />
        <span className="fdp-lang-code">{current.code.toUpperCase()}</span>
        <span className="fdp-lang-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <div className="fdp-lang-menu" role="listbox" aria-label={t.nav.language}>
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === locale}
              className={`fdp-lang-item${l.code === locale ? " is-active" : ""}`}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
            >
              <Flag code={l.flag} className="fdp-lang-flag" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
