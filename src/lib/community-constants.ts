// Plain constants with no server-only dependencies (no fs/path), safe to import
// from client components. community-data.ts re-exports these for server callers.
export const GITHUB_RELEASES = "https://github.com/SkidderMC/FDPClient/releases";
export const GITHUB_REPO = "https://github.com/SkidderMC/FDPClient/";
export const GITHUB_ISSUES = "https://github.com/SkidderMC/FDPClient/issues";
export const GITHUB_ISSUE_NEW =
  "https://github.com/SkidderMC/FDPClient/issues/new";

export const OFFICIAL_SITE = "https://lucas-lima.xyz/archives/fdpclient";
export const FDP_BUILDS_ENDPOINT =
  "https://lucas-lima.xyz/api/mods/fdpclient/latest-build";
export const FDP_LUNAR_GUIDE =
  "https://github.com/SkidderMC/FDPClient/blob/main/docs/LUNAR.md";

export const FALLBACK_DOWNLOADS = 100000;
