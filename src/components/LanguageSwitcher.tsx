"use client";

import { LOCALES, useI18n } from "@/lib/i18n";
import { Flag } from "@/lib/i18n/flags";

// A compact inline row of country flags shown on the right of the header. Each
// flag switches the whole site's language instantly (client-side) and persists
// the choice. Order matches LOCALES: EN · PT · CN · RU · ES.
const CSS = `
.fdp-lang{display:inline-flex;align-items:center;gap:.3rem;}
.fdp-lang-btn{display:inline-flex;align-items:center;justify-content:center;padding:.18rem;margin:0;border:0;border-radius:5px;background:transparent;cursor:pointer;line-height:0;opacity:.5;filter:grayscale(.4);transition:opacity .15s,filter .15s,transform .15s,background-color .15s,box-shadow .15s;}
.fdp-lang-btn:hover{opacity:.95;filter:grayscale(0);background:rgba(255,255,255,.06);transform:translateY(-1px);}
.fdp-lang-btn.is-active{opacity:1;filter:grayscale(0);background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(168,85,247,.55);}
.fdp-lang-btn:focus-visible{outline:2px solid rgba(168,85,247,.7);outline-offset:1px;}
.fdp-lang-flag{display:inline-flex;width:1.4rem;height:1rem;border-radius:2px;overflow:hidden;flex-shrink:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.18);}
.fdp-lang-flag svg{width:100%;height:100%;display:block;}
@media (max-width:640px){.fdp-lang{gap:.12rem;}.fdp-lang-flag{width:1.2rem;height:.86rem;}}
`;

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="fdp-lang" role="group" aria-label={t.nav.language}>
      <style>{CSS}</style>
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            type="button"
            className={`fdp-lang-btn${active ? " is-active" : ""}`}
            aria-label={l.label}
            aria-pressed={active}
            title={l.label}
            onClick={() => setLocale(l.code)}
          >
            <Flag code={l.flag} className="fdp-lang-flag" />
          </button>
        );
      })}
    </div>
  );
}
