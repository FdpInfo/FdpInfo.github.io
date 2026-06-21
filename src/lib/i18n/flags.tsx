import type { ReactElement } from "react";

// Compact, recognizable country flags (viewBox 0 0 24 16). Used by the language
// switcher. Kept simple on purpose so they render crisply at ~20px.
const FLAGS: Record<string, ReactElement> = {
  // United Kingdom (English) — Union Jack
  gb: (
    <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="fdp-gb-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="fdp-gb-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#fdp-gb-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#fdp-gb-diag)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  ),
  // United States (English) — kept as an alternative
  us: (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={(y * 16) / 13} width="24" height={16 / 13} fill="#b22234" />
      ))}
      <rect width="10.5" height={(16 / 13) * 7} fill="#3c3b6e" />
      {[1.3, 3.9, 6.5, 9.1].flatMap((x, i) =>
        [1, 2.7, 4.4, 6.1].map((y, j) => (
          <circle key={`${i}-${j}`} cx={x + (j % 2) * 1.3} cy={y} r="0.45" fill="#fff" />
        ))
      )}
    </svg>
  ),
  // Brazil (Portuguese - BR)
  br: (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#009b3a" />
      <polygon points="12,1.6 22.4,8 12,14.4 1.6,8" fill="#fedf00" />
      <circle cx="12" cy="8" r="3.4" fill="#002776" />
      <path d="M8.9 7.2a6 6 0 0 1 6.2 1.1" stroke="#fff" strokeWidth="0.7" fill="none" />
    </svg>
  ),
  // China (Simplified Chinese)
  cn: (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#de2910" />
      <path
        d="M4 2.2l.9 2.7-2.3-1.7h2.8L3.1 4.9z"
        fill="#ffde00"
        transform="scale(1.25)"
      />
      {[
        [8.2, 1.6],
        [9.7, 3.1],
        [9.7, 5.3],
        [8.2, 6.8],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.7" fill="#ffde00" />
      ))}
    </svg>
  ),
  // Russia
  ru: (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#fff" />
      <rect y="5.33" width="24" height="5.34" fill="#0039a6" />
      <rect y="10.67" width="24" height="5.33" fill="#d52b1e" />
    </svg>
  ),
  // Spain
  es: (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#c60b1e" />
      <rect y="4" width="24" height="8" fill="#ffc400" />
    </svg>
  ),
};

export function Flag({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden="true">
      {FLAGS[code] ?? null}
    </span>
  );
}
