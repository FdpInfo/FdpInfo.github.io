"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * "Changelog" link that opens BOTH the in-site /changelogs page (current tab)
 * and the GitHub releases page (new tab) on a single click.
 */
export function ChangelogLink({
  className,
  releases,
  children,
}: {
  className?: string;
  releases: string;
  children: ReactNode;
}) {
  return (
    <Link
      className={className}
      href="/changelogs"
      onClick={() => window.open(releases, "_blank", "noopener,noreferrer")}
    >
      {children}
    </Link>
  );
}
