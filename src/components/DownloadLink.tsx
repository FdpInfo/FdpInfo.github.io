"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * "Download" link that navigates to the in-site /download page (current tab)
 * and also opens the well-known legacy download page (new tab) on a single
 * click — same dual-open behavior as ChangelogLink. The legacy URL has no
 * trailing slash and no basePath on purpose (it is served from the root site).
 */
const LEGACY_DOWNLOAD = "https://fdpinfo.github.io/download";

export function DownloadLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      className={className}
      href="/download"
      onClick={() => window.open(LEGACY_DOWNLOAD, "_blank", "noopener,noreferrer")}
    >
      {children}
    </Link>
  );
}
