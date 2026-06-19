import fs from "fs";
import path from "path";

export type ChangeType = "added" | "fixed" | "changed" | "removed";
export type ChangeItem = { type: ChangeType; text: string };
export type ChangeVersion = { name: string; meta: string; items: ChangeItem[] };

const TYPE_MAP: Record<string, ChangeType> = {
  "+": "added",
  "*": "fixed",
  "~": "changed",
  "-": "removed",
};

const dbFile = (name: string) =>
  path.join(process.cwd(), "public", "database", name);

function readDb(name: string): string {
  try {
    return fs.readFileSync(dbFile(name), "utf8");
  } catch {
    return "";
  }
}

export function getChangelog(): ChangeVersion[] {
  const raw = readDb("changelogs.txt");
  const versions: ChangeVersion[] = [];
  let current: ChangeVersion | null = null;
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t) continue;
    const header = t.match(/^~\s*B(\d+)\b\s*(.*)$/);
    if (header) {
      current = { name: `B${header[1]}`, meta: header[2].trim(), items: [] };
      versions.push(current);
      continue;
    }
    const item = t.match(/^([+*~-])\s+(.+)$/);
    if (item && current) {
      current.items.push({ type: TYPE_MAP[item[1]], text: item[2].trim() });
    }
  }
  return versions;
}

export function getKnownIssues(): { version: string; items: string[] } {
  const raw = readDb("bugs.txt");
  let version = "";
  const items: string[] = [];
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith("#")) {
      const m = t.match(/^#\s*(b\d+)/i);
      if (m && !version) version = m[1];
      continue;
    }
    const it = t.match(/^\*\s+(.+)$/);
    if (it) items.push(it[1].trim());
  }
  return { version, items };
}

export function getMeta(): { discord: string; donate: string; version: string } {
  const raw = readDb("data.txt").trim();
  const parts = raw.split("///");
  return {
    donate: parts[3] || "",
    discord: parts[4] || "https://discord.gg/3XRFGeqEYD",
    version: parts[5] || "b16",
  };
}

export function getInjector(): { version: string; enabled: boolean } {
  const parts = readDb("injector.txt").trim().split("///").filter(Boolean);
  return { version: parts[0] || "v1.0.0", enabled: (parts[1] || "true") === "true" };
}

export const GITHUB_RELEASES = "https://github.com/SkidderMC/FDPClient/releases";
export const GITHUB_REPO = "https://github.com/SkidderMC/FDPClient/";
export const GITHUB_ISSUES = "https://github.com/SkidderMC/FDPClient/issues";
export const GITHUB_ISSUE_NEW =
  "https://github.com/SkidderMC/FDPClient/issues/new";

export const FALLBACK_DOWNLOADS = 100000;

/**
 * Total downloads across all GitHub release assets, fetched at build time and
 * baked into the static page. Falls back to a sensible number if the GitHub API
 * is unreachable or rate-limited, so the build never fails on network issues.
 */
export async function getDownloadCount(): Promise<number> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(
      "https://api.github.com/repos/SkidderMC/FDPClient/releases?per_page=100",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "fdpclient-site",
          // Authenticated calls get 5000 req/h instead of 60 — keeps the count
          // reliable in CI. The workflow passes the auto-provided github.token.
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: ctrl.signal,
      }
    );
    clearTimeout(timer);
    if (!res.ok) return FALLBACK_DOWNLOADS;
    const releases = (await res.json()) as Array<{
      assets?: Array<{ download_count?: number }>;
    }>;
    let total = 0;
    for (const r of releases) {
      for (const a of r.assets ?? []) total += a.download_count ?? 0;
    }
    return total > 0 ? total : FALLBACK_DOWNLOADS;
  } catch {
    return FALLBACK_DOWNLOADS;
  }
}
