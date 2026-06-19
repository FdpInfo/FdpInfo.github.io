import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { Footer } from "@/components/Footer";
import { RedirectToast } from "@/components/RedirectToast";
import { CountUp } from "@/components/CountUp";
import { ParticleField } from "@/components/effects/ParticleField";
import {
  getMeta,
  getInjector,
  getDownloadCount,
  GITHUB_RELEASES,
  GITHUB_REPO,
} from "@/lib/community-data";

export const metadata: Metadata = {
  title: "FDP Client – Downloads",
  description: "Download FDP Client – the best free Minecraft cheat client.",
  authors: [{ name: "fdpclient" }],
};

const OFFICIAL = "https://lucas-lima.xyz/archives/fdpclient";

const DL_CSS = `
.dl-card{max-width:42rem;margin:0 auto;border:1px solid rgba(51,65,85,.7);border-radius:1.5rem;background:rgba(30,41,59,.32);padding:1.75rem;text-align:left;}
.dl-head{display:flex;align-items:center;gap:1rem;margin-bottom:1.1rem;}
.dl-logo{width:3.25rem;height:3.25rem;flex-shrink:0;}
.dl-title{font-size:1.2rem;font-weight:700;color:#f8fafc;line-height:1.2;}
.dl-sub{font-size:.85rem;color:#94a3b8;margin-top:.15rem;}
.dl-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.4rem;}
.dl-chip{font-size:.7rem;font-weight:600;color:#c4b5fd;background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.25);border-radius:999px;padding:.25rem .7rem;}
.dl-chip.ok{color:#6ee7b7;background:rgba(16,185,129,.12);border-color:rgba(16,185,129,.25);}
.dl-downloads{display:inline-flex;align-items:center;gap:.45rem;font-size:.85rem;color:#94a3b8;margin-bottom:1.25rem;}
.dl-downloads svg{width:1rem;height:1rem;fill:#a855f7;}
.dl-downloads strong{font-size:1.05rem;color:#f8fafc;font-weight:700;}
.dl-actions{display:flex;flex-direction:column;gap:.6rem;}
@media(min-width:560px){.dl-actions{flex-direction:row;}}
.dl-actions>*{flex:1;}
.dl-note{margin-top:1.25rem;font-size:.78rem;color:#7c8aa3;text-align:center;max-width:42rem;margin-left:auto;margin-right:auto;}
.dl-btn svg{margin-right:.55rem;flex-shrink:0;fill:currentColor;}
`;

export default async function DownloadPage() {
  const meta = getMeta();
  const injector = getInjector();
  const downloads = await getDownloadCount();
  const build = meta.version.toUpperCase();

  return (
    <>
      <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
        <SecondaryHeader />
        <style>{DL_CSS}</style>

        <section>
          <div className="zywl-relativo mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
            <div className="absoluto inserir-0 z-index--10" aria-hidden="true">
              <ParticleField quantity={8} />
            </div>
            <div className="padding-bottom-4rem padding-top-8rem padding-inferior-8rem padding-superior-13rem">
              <div className="mx-auto largura-maxima-48rem text-align-center">
                <div className="margem-inferior-1-5rem" data-aos="fade-down">
                  <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                    Download · Latest Beta {build}
                  </div>
                </div>
                <h1
                  className="heading-lg bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent "
                  data-aos="fade-down"
                >
                  Download FDP Client.
                </h1>
                <p
                  className="margem-inferior-2rem font-size-1-125rem text-color-gray-200"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  The free &amp; open-source Forge injection client. Grab the
                  latest beta below — or let us take you to the official
                  downloads.
                </p>

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
                        FDP Client — Latest Beta ({build})
                      </div>
                      <div className="dl-sub">
                        Forge injection client · Windows, macOS &amp; Linux
                      </div>
                    </div>
                  </div>
                  <div className="dl-chips">
                    <span className="dl-chip">Build {build}</span>
                    <span className="dl-chip">Injector {injector.version}</span>
                    <span className="dl-chip">Minecraft 1.8 – 1.20.1</span>
                    {injector.enabled ? (
                      <span className="dl-chip ok">● Online</span>
                    ) : null}
                  </div>
                  <div className="dl-downloads">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M8 0a1 1 0 0 1 1 1v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L7 8.6V1a1 1 0 0 1 1-1ZM2 13a1 1 0 0 1 1 1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 0-1Z" />
                    </svg>
                    <span>
                      <strong>
                        <CountUp value={downloads} suffix="+" />
                      </strong>{" "}
                      downloads
                    </span>
                  </div>
                  <div className="dl-actions">
                    <a
                      className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes dl-btn"
                      href={OFFICIAL}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0a1 1 0 0 1 1 1v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L7 8.6V1a1 1 0 0 1 1-1ZM2 13a1 1 0 0 1 1 1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 0-1Z" />
                      </svg>
                      Download FDP Client
                    </a>
                    <a
                      className="button-primary largura-100porcento bg-color-rgb bg-opacity-0-25 text-color-gray-100 transition-all transition-duration-150ms transition-ease-in-out hover-bg-opacity-0-3 hover-text-white dl-btn"
                      href={GITHUB_RELEASES}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>

                <p className="dl-note">
                  Source code is available on{" "}
                  <a
                    href={GITHUB_REPO}
                    style={{ color: "#c4b5fd", fontWeight: 600 }}
                  >
                    GitHub
                  </a>
                  . You&apos;ll be redirected to the official downloads
                  automatically — hit <strong>Stop</strong> to stay here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <RedirectToast target={OFFICIAL} />
    </>
  );
}
