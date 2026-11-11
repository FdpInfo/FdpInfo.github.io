import { asset } from "@/lib/asset";
import {
  FDP_BUILDS_ENDPOINT,
  FDP_LUNAR_GUIDE,
} from "@/lib/community-constants";
import { useI18n } from "@/lib/i18n";
import { BuildChecksum } from "./BuildChecksum";
import type { FdpBuildState } from "./useFdpBuilds";

const FALLBACK_DOWNLOAD = `${FDP_BUILDS_ENDPOINT}?kind=inject`;

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

  return (
    <div className="dl-card" data-aos="fade-up">
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
        <span className="dl-chip">{d.chipLunar}</span>
        <span className="dl-chip">{d.chipZavz}</span>
        {available ? (
          <span className="dl-chip ok">{d.chipAvailable}</span>
        ) : null}
        {soon ? <span className="dl-chip soon">{d.chipSoon}</span> : null}
      </div>
      <div className="dl-actions">
        {soon ? (
          <button
            type="button"
            className="button-primary largura-100porcento dl-btn dl-btn-off"
            disabled
          >
            <DownloadIcon />
            {d.injectSoonBtn}
          </button>
        ) : (
          <a
            className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes dl-btn"
            href={info?.download ?? FALLBACK_DOWNLOAD}
            rel="nofollow"
          >
            <DownloadIcon />
            {d.injectBtn}
          </a>
        )}
        {available ? (
          <a
            className="button-primary largura-100porcento bg-color-rgb bg-opacity-0-25 text-color-gray-100 transition-all transition-duration-150ms transition-ease-in-out hover-bg-opacity-0-3 hover-text-white dl-btn"
            href={FDP_LUNAR_GUIDE}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            {d.injectGuideBtn}
          </a>
        ) : null}
      </div>
      <BuildChecksum
        state={state}
        copyLabel={d.copyAriaInject}
        official={official}
      />
    </div>
  );
}
