"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Runs as layout effect on the client (no paint flash) and as a no-op effect on
// the server (avoids the useLayoutEffect SSR warning).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function CountUp({
  value,
  suffix = "",
  duration = 1300,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  // Initial state equals the final value so SSR / no-JS renders the real number
  // (good for SEO and graceful degradation).
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useIsoLayoutEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || value <= 0) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let startTs = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setDisplay(Math.round(easeOutCubic(p) * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    setDisplay(0);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <>
      {display.toLocaleString("en-US")}
      {suffix}
    </>
  );
}
