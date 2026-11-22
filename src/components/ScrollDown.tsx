"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import styles from "./ScrollDown.module.css";

export function ScrollDown() {
  const { t } = useI18n();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    function sync() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      setHasMore(scrollHeight - scrollTop - clientHeight > 2);
    }

    const observer = new ResizeObserver(sync);
    observer.observe(document.body);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  function scrollDown() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.8),
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  if (!hasMore) return null;

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={t.hero.scrollDown}
      title={t.hero.scrollDown}
      onClick={scrollDown}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4v15m-6-6 6 6 6-6" />
      </svg>
    </button>
  );
}
