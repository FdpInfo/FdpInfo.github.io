import { FDP_BUILDS_ENDPOINT } from "./community-constants";

export type FdpBuildKind = "forge" | "inject";
export type FdpChannel =
  | "actions"
  | "release"
  | "releases-page"
  | "unavailable";
export type FdpHashScope =
  | "GitHub Actions ZIP"
  | "GitHub Actions JAR"
  | "release JAR";

export type FdpBuild = {
  kind: FdpBuildKind;
  channel: FdpChannel;
  name: string | null;
  commit: string | null;
  sha256: string | null;
  hashScope: FdpHashScope | null;
  download: string | null;
  sourceUrl: string | null;
  workflowUrl: string | null;
};

export type FdpBuilds = {
  forge: FdpBuild | null;
  inject: FdpBuild | null;
};

const CHANNELS: Record<FdpBuildKind, readonly FdpChannel[]> = {
  forge: ["actions", "release", "releases-page"],
  inject: ["actions", "release", "unavailable"],
};
const SCOPES: readonly FdpHashScope[] = [
  "GitHub Actions ZIP",
  "GitHub Actions JAR",
  "release JAR",
];
const SHA256 = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{7,40}$/i;
const FILE_NAME = /^[\w.+-]{1,200}$/;
const REPO_PATH = "/SkidderMC/FDPClient";
const API_PATH = "/api/mods/fdpclient/";
const TIMEOUT_MS = 12000;

let pending: Promise<FdpBuilds> | null = null;

function optional(
  value: unknown,
  pattern: RegExp
): value is string | null | undefined {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && pattern.test(value))
  );
}

function trustedUrl(value: unknown, allowApi: boolean): string | null {
  if (typeof value !== "string") return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.username || url.password || url.port) {
    return null;
  }
  const repo =
    url.hostname === "github.com" &&
    (url.pathname === REPO_PATH || url.pathname.startsWith(`${REPO_PATH}/`));
  const api =
    allowApi &&
    url.hostname === "lucas-lima.xyz" &&
    url.pathname.startsWith(API_PATH);
  return repo || api ? url.href : null;
}

function parseBuild(value: unknown, kind: FdpBuildKind): FdpBuild | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const channel = CHANNELS[kind].find((item) => item === raw.channel);
  if (raw.kind !== kind || !channel) return null;
  const { name, commit, sha256 } = raw;
  if (
    !optional(name, FILE_NAME) ||
    !optional(commit, COMMIT) ||
    !optional(sha256, SHA256)
  ) {
    return null;
  }
  const download =
    channel === "unavailable" ? null : trustedUrl(raw.download, true);
  if (channel !== "unavailable" && !download) return null;
  return {
    kind,
    channel,
    name: name ?? null,
    commit: commit ? commit.toLowerCase() : null,
    sha256: sha256 ?? null,
    hashScope: SCOPES.find((item) => item === raw.hashScope) ?? null,
    download,
    sourceUrl: trustedUrl(raw.sourceUrl, false),
    workflowUrl: trustedUrl(raw.workflowUrl, false),
  };
}

export function parseFdpBuilds(data: unknown): FdpBuilds | null {
  if (!data || typeof data !== "object") return null;
  const raw = data as Record<string, unknown>;
  const forge = parseBuild(raw.forge, "forge");
  const inject = parseBuild(raw.inject, "inject");
  return forge || inject ? { forge, inject } : null;
}

function deadline(ms: number): AbortSignal | undefined {
  if (typeof AbortController === "undefined") return undefined;
  if (typeof AbortSignal.timeout === "function") return AbortSignal.timeout(ms);
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

async function requestFdpBuilds(): Promise<FdpBuilds> {
  const response = await fetch(`${FDP_BUILDS_ENDPOINT}?format=json&kind=all`, {
    mode: "cors",
    credentials: "omit",
    headers: { Accept: "application/json" },
    signal: deadline(TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`Build metadata request failed (${response.status})`);
  }
  const builds = parseFdpBuilds(await response.json());
  if (!builds) throw new Error("Build metadata is malformed");
  return builds;
}

export function loadFdpBuilds(): Promise<FdpBuilds> {
  if (!pending) {
    pending = requestFdpBuilds().catch((error: unknown) => {
      pending = null;
      throw error;
    });
  }
  return pending;
}
