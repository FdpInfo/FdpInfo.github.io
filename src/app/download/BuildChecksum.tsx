import { useEffect, useRef, useState } from "react";
import { GITHUB_RELEASES } from "@/lib/community-constants";
import type { FdpBuild, FdpHashScope } from "@/lib/fdp-builds";
import { useI18n } from "@/lib/i18n";
import type { FdpBuildState } from "./useFdpBuilds";

type CopyState = "idle" | "done" | "failed";

type Props = {
  state: FdpBuildState;
  copyLabel: string;
  official: string;
};

const SCOPE_KEYS = {
  "GitHub Actions ZIP": "scopeActionsZip",
  "GitHub Actions JAR": "scopeActionsJar",
  "release JAR": "scopeReleaseJar",
} as const satisfies Record<FdpHashScope, string>;

function HashRow({ hash, copyLabel }: { hash: string; copyLabel: string }) {
  const { t } = useI18n();
  const [copy, setCopy] = useState<CopyState>("idle");
  const hashRef = useRef<HTMLElement>(null);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const show = (next: CopyState) => {
    setCopy(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopy("idle"), 2000);
  };

  const selectHash = () => {
    const node = hashRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(hash);
      show("done");
    } catch {
      selectHash();
      show("failed");
    }
  };

  const text =
    copy === "done"
      ? t.downloadPage.copied
      : copy === "failed"
        ? t.downloadPage.copyFailed
        : t.downloadPage.copy;

  return (
    <div className="dl-sum-row">
      <code className="dl-hash" ref={hashRef} translate="no">
        {hash}
      </code>
      <button
        type="button"
        className={copy === "idle" ? "dl-copy" : `dl-copy ${copy}`}
        aria-label={copyLabel}
        onClick={onCopy}
      >
        {text}
      </button>
      <span className="dl-sr" role="status">
        {copy === "idle" ? "" : text}
      </span>
    </div>
  );
}

function BuildMeta({ build }: { build: FdpBuild }) {
  const { t } = useI18n();
  const commit = build.commit ? build.commit.slice(0, 7) : null;
  const link = build.workflowUrl ?? build.sourceUrl;
  if (!build.name && !commit) return null;

  return (
    <p className="dl-sum-meta">
      {build.name ? (
        <span className="dl-sum-file" translate="no">
          {build.name}
        </span>
      ) : null}
      {build.name && commit ? " · " : null}
      {commit ? (
        <span>
          {t.downloadPage.sumCommit}{" "}
          {link ? (
            <a href={link} translate="no">
              <code>{commit}</code>
            </a>
          ) : (
            <code translate="no">{commit}</code>
          )}
        </span>
      ) : null}
    </p>
  );
}

function ChecksumBody({ state, copyLabel, official }: Props) {
  const { t } = useI18n();
  const d = t.downloadPage;

  if (state.status === "loading") {
    return (
      <>
        <p className="dl-sum-msg">{d.sumLoading}</p>
        <div className="dl-skel" aria-hidden="true" />
      </>
    );
  }

  if (state.status === "error") {
    return (
      <p className="dl-sum-msg">
        {d.sumError} <a href={official}>{d.sumErrorLink}</a>
      </p>
    );
  }

  const { build } = state;
  if (build.channel === "unavailable") {
    return <p className="dl-sum-msg">{d.sumPending}</p>;
  }

  return (
    <>
      <BuildMeta build={build} />
      {build.sha256 ? (
        <HashRow
          key={build.sha256}
          hash={build.sha256}
          copyLabel={copyLabel}
        />
      ) : (
        <p className="dl-sum-msg">
          {d.sumNone} <a href={GITHUB_RELEASES}>{d.sumNoneLink}</a>
        </p>
      )}
    </>
  );
}

export function BuildChecksum({ state, copyLabel, official }: Props) {
  const { t } = useI18n();
  const build = state.status === "ready" ? state.build : null;
  const scope =
    build && build.sha256 && build.hashScope
      ? t.downloadPage[SCOPE_KEYS[build.hashScope]]
      : null;

  return (
    <div className="dl-sum" aria-busy={state.status === "loading"}>
      <div className="dl-sum-head">
        <span className="dl-sum-label">{t.downloadPage.sumLabel}</span>
        {scope ? <span className="dl-sum-scope">{scope}</span> : null}
      </div>
      <div className="dl-sum-body">
        <ChecksumBody state={state} copyLabel={copyLabel} official={official} />
      </div>
    </div>
  );
}
