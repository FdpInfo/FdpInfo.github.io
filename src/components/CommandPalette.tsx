"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  SEARCH_TARGETS,
  GROUP_ORDER,
  type SearchTarget,
} from "@/lib/search-targets";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

function ItemIcon({ target }: { target: SearchTarget }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (target.external) {
    return (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    );
  }
  if (target.group === "Sections") {
    return (
      <svg {...common}>
        <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 3v5h5" />
      <path d="M6 3h8l5 5v13H6z" />
    </svg>
  );
}

function matches(t: SearchTarget, terms: string[]) {
  if (!terms.length) return true;
  const hay = `${t.label} ${t.hint} ${t.keywords} ${t.group}`.toLowerCase();
  return terms.every((term) => hay.includes(term));
}

function score(t: SearchTarget, raw: string) {
  const label = t.label.toLowerCase();
  if (label === raw) return 0;
  if (label.startsWith(raw)) return 1;
  if (label.includes(raw)) return 2;
  return 3;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const raw = query.trim().toLowerCase();
    const terms = raw.split(/\s+/).filter(Boolean);
    const scored = SEARCH_TARGETS.map((t, i) => ({ t, i })).filter(({ t }) =>
      matches(t, terms)
    );
    if (raw) {
      // When searching, rank by match quality (exact label > prefix > label
      // substring > keyword), tie-broken by the original order.
      scored.sort((a, b) => score(a.t, raw) - score(b.t, raw) || a.i - b.i);
    }
    return scored.map((s) => s.t);
  }, [query]);

  const searching = query.trim().length > 0;

  const close = useCallback(() => setOpen(false), []);

  // Open shortcuts (Ctrl/Cmd+K toggles, "/" opens) + external trigger event.
  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "/" && !open) {
        const el = document.activeElement as HTMLElement | null;
        const typing =
          !!el &&
          (el.tagName === "INPUT" ||
            el.tagName === "TEXTAREA" ||
            el.isContentEditable);
        if (!typing) {
          e.preventDefault();
          setOpen(true);
        }
      }
    }
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("fdp:open-search", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("fdp:open-search", onOpenEvent);
    };
  }, [open]);

  // On open: reset state, lock scroll, focus input.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(raf);
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  // Keep the active row in view as the selection moves.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const go = useCallback(
    (t: SearchTarget) => {
      setOpen(false);
      if (t.external) {
        window.open(t.href, "_blank", "noopener,noreferrer");
        return;
      }
      const [path, hash] = t.href.split("#");
      const norm = (p: string) => p.replace(/\/+$/, "") || "/";
      const targetPath = path || "/";
      if (hash && norm(targetPath) === norm(pathname || "/")) {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      router.push(t.href);
    },
    [pathname, router]
  );

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent) => {
      if (e.key === "Tab") {
        // Focus trap: keep Tab/Shift+Tab cycling inside the dialog.
        const panel = e.currentTarget as HTMLElement;
        const f = panel.querySelectorAll<HTMLElement>("input, button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => (results.length ? (a + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) =>
          results.length ? (a - 1 + results.length) % results.length : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const t = results[active];
        if (t) go(t);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(Math.max(results.length - 1, 0));
      }
    },
    [results, active, go, close]
  );

  if (!open) return null;

  const renderItem = (t: SearchTarget, idx: number) => (
    <button
      key={t.label}
      type="button"
      data-idx={idx}
      className={`cmdk-item${idx === active ? " is-active" : ""}`}
      role="option"
      aria-selected={idx === active}
      onMouseMove={() => setActive(idx)}
      onClick={() => go(t)}
    >
      <span className="cmdk-item-icon">
        <ItemIcon target={t} />
      </span>
      <span className="cmdk-item-label">{t.label}</span>
      <span className="cmdk-item-hint">{t.hint}</span>
    </button>
  );

  let flatIdx = -1;
  return (
    <div
      className="cmdk-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="cmdk-panel" onKeyDown={onKeyDown}>
        <div className="cmdk-input-row">
          <SearchIcon />
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Search pages, sections…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cmdk-esc">esc</span>
        </div>
        <div
          className="cmdk-list"
          id="cmdk-list"
          role="listbox"
          aria-label="Results"
          ref={listRef}
        >
          {results.length === 0 && (
            <div className="cmdk-empty">
              No results for “{query.trim()}”.
            </div>
          )}
          {searching
            ? results.map((t, idx) => renderItem(t, idx))
            : GROUP_ORDER.map((group) => {
                const items = results.filter((t) => t.group === group);
                if (!items.length) return null;
                return (
                  <div key={group}>
                    <div className="cmdk-group-label">{group}</div>
                    {items.map((t) => {
                      flatIdx += 1;
                      return renderItem(t, flatIdx);
                    })}
                  </div>
                );
              })}
        </div>
        <div className="cmdk-footer">
          <span>
            <b>↑</b>
            <b>↓</b> navigate
          </span>
          <span>
            <b>↵</b> open
          </span>
          <span>
            <b>esc</b> close
          </span>
        </div>
      </div>
    </div>
  );
}
