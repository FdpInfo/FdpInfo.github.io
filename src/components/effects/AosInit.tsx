"use client";

import { useEffect } from "react";
import AOS from "aos";

/**
 * Initialises AOS once on the client, mirroring the original main.js call:
 *   AOS.init({ once: true, disable: 'phone', duration: 1000, easing: 'ease-out-cubic' })
 * The aos.css stylesheet is loaded globally in the root layout, so we only
 * drive the JS side here.
 */
export function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      // Disable on phones (as before) and for visitors who prefer reduced motion.
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 767px)").matches,
      duration: 1000,
      easing: "ease-out-cubic",
    });
    // Recalculate after fonts/images settle so above-the-fold elements reveal.
    const id = window.setTimeout(() => AOS.refresh(), 300);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
