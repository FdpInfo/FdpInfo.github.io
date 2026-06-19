"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type AlpineTransitionProps = {
  show: boolean;
  as?: ElementType;
  className?: string;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  children: ReactNode;
};

const toClasses = (s?: string) => (s ? s.split(/\s+/).filter(Boolean) : []);

const nextFrame = (cb: () => void) =>
  requestAnimationFrame(() => requestAnimationFrame(cb));

function totalDurationMs(el: HTMLElement): number {
  const style = getComputedStyle(el);
  const toMs = (raw: string) =>
    raw
      .split(",")
      .map((v) => v.trim())
      .map((v) => {
        const n = parseFloat(v) || 0;
        return v.endsWith("ms") ? n : n * 1000;
      });
  const durations = toMs(style.transitionDuration);
  const delays = toMs(style.transitionDelay);
  let max = 0;
  for (let i = 0; i < durations.length; i++) {
    const total = durations[i] + (delays[i] ?? 0);
    if (total > max) max = total;
  }
  return max + 50;
}

/**
 * Faithful React re-implementation of Alpine.js x-show + x-transition.
 * The element stays mounted and we drive its display + phase classes
 * imperatively (exactly like Alpine), so enter/leave animations match 1:1.
 */
export function AlpineTransition({
  show,
  as: Tag = "div",
  className,
  enter,
  enterStart,
  enterEnd,
  leave,
  leaveStart,
  leaveEnd,
  children,
}: AlpineTransitionProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const prev = useRef<boolean | null>(null);
  // Stable style object: set once for the initial paint and never re-applied,
  // so React's reconciliation never clobbers our imperative display toggles.
  const styleRef = useRef<CSSProperties | undefined>(
    show ? undefined : { display: "none" }
  );

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (prev.current === null) {
      prev.current = show;
      el.style.display = show ? "" : "none";
      return;
    }
    if (show === prev.current) return;
    prev.current = show;

    const e = toClasses(enter);
    const es = toClasses(enterStart);
    const ee = toClasses(enterEnd);
    const l = toClasses(leave);
    const ls = toClasses(leaveStart);
    const le = toClasses(leaveEnd);

    el.classList.remove(...e, ...es, ...ee, ...l, ...ls, ...le);

    let cancelled = false;
    let timer = 0;

    if (show) {
      el.style.display = "";
      if (e.length) el.classList.add(...e);
      if (es.length) el.classList.add(...es);
      void el.offsetWidth;
      nextFrame(() => {
        if (cancelled) return;
        if (es.length) el.classList.remove(...es);
        if (ee.length) el.classList.add(...ee);
        timer = window.setTimeout(() => {
          if (cancelled) return;
          el.classList.remove(...e, ...ee);
        }, totalDurationMs(el));
      });
    } else {
      if (l.length) el.classList.add(...l);
      if (ls.length) el.classList.add(...ls);
      void el.offsetWidth;
      nextFrame(() => {
        if (cancelled) return;
        if (ls.length) el.classList.remove(...ls);
        if (le.length) el.classList.add(...le);
        timer = window.setTimeout(() => {
          if (cancelled) return;
          el.classList.remove(...l, ...le);
          el.style.display = "none";
        }, totalDurationMs(el));
      });
    }

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [show, enter, enterStart, enterEnd, leave, leaveStart, leaveEnd]);

  return (
    <Tag
      ref={elRef as React.Ref<HTMLElement & HTMLDivElement>}
      className={className}
      style={styleRef.current}
    >
      {children}
    </Tag>
  );
}
