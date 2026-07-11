"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export function DownloadLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link className={className} href="/download">
      {children}
    </Link>
  );
}
