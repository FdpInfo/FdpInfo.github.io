import { asset } from "@/lib/asset";
import { useI18n } from "@/lib/i18n";
import { BuildChecksum } from "./BuildChecksum";
import type { FdpBuildState } from "./useFdpBuilds";

type Props = {
  build: string;
  state: FdpBuildState;
  official: string;
};

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 0a1 1 0 0 1 1 1v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L7 8.6V1a1 1 0 0 1 1-1ZM2 13a1 1 0 0 1 1 1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 0-1Z" />
    </svg>
  );
}

export function InjectCard({ build, state, official }: Props) {
  const { t } = useI18n();
  const d = t.downloadPage;
  const info = state.status === "ready" ? state.build : null;
  const soon = info?.channel === "unavailable";
  const available = info?.channel === "actions" || info?.channel === "release";
  const href = available
    ? info.download
    : state.status === "error"
      ? official
      : null;

  return (
    <div id="inject" className="dl-card" data-aos="fade-up">
      <div className="dl-head">
        <img
          className="dl-logo"
          src={asset("/src/resources/png/fdp.png")}
          width="52"
          height="52"
          alt="FDP Client"
        />
        <div>
          <div className="dl-title">
            {d.injectTitle} ({build})
          </div>
          <div className="dl-sub">{d.injectSub}</div>
        </div>
      </div>
      <div className="dl-chips">
        <span className="dl-chip">
          {d.chipBuild} {build}
        </span>
        <span className="dl-chip">{d.chipZavz}</span>
        {available ? (
          <span className="dl-chip ok">{d.chipAvailable}</span>
        ) : null}
        {soon ? <span className="dl-chip soon">{d.chipSoon}</span> : null}
      </div>
      <div className="dl-actions">
        {href ? (
          <a
            className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes dl-btn"
            href={href}
            rel="nofollow"
          >
            <DownloadIcon />
            {d.injectBtn}
          </a>
        ) : (
          <button
            type="button"
            className="button-primary largura-100porcento dl-btn dl-btn-off"
            disabled
          >
            <DownloadIcon />
            {soon ? d.injectSoonBtn : d.injectBtn}
          </button>
        )}
        <a
          className="button-primary largura-100porcento bg-color-rgb bg-opacity-0-25 text-color-gray-100 transition-all transition-duration-150ms transition-ease-in-out hover-bg-opacity-0-3 hover-text-white dl-btn"
          href="#install-inject"
        >
          <span aria-hidden="true">↓</span>
          <span className="margem-esquerda-0-25rem">{d.injectGuideBtn}</span>
        </a>
      </div>
      <BuildChecksum
        state={state}
        copyLabel={d.copyAriaInject}
        official={official}
      />
    </div>
  );
}
