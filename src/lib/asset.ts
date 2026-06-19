// Single source of truth for the deploy base path. Driven by NEXT_PUBLIC_BASE_PATH
// so the same build works at the domain root (user page / custom domain) or under
// a subpath (project page, e.g. <owner>.github.io/<repo>). The GitHub Action sets
// this automatically; locally it is empty so everything serves from "/".
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a public asset path (e.g. "/src/resources/png/fdp.png") with the
 * deploy base path. Leaves absolute URLs and data: URIs untouched. Internal
 * page navigation uses next/link, which already applies basePath on its own —
 * this helper is only for raw <img>/<video>/<link> asset URLs.
 */
export function asset(path: string): string {
  if (/^[a-z]+:/i.test(path) || path.startsWith("//")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
