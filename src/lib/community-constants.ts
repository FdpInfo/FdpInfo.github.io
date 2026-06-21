// Plain constants with no server-only dependencies (no fs/path), safe to import
// from client components. community-data.ts re-exports these for server callers.
export const GITHUB_RELEASES = "https://github.com/SkidderMC/FDPClient/releases";
export const GITHUB_REPO = "https://github.com/SkidderMC/FDPClient/";
export const GITHUB_ISSUES = "https://github.com/SkidderMC/FDPClient/issues";
export const GITHUB_ISSUE_NEW =
  "https://github.com/SkidderMC/FDPClient/issues/new";

export const FALLBACK_DOWNLOADS = 100000;
