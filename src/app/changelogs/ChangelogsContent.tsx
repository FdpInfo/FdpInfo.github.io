"use client";

import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/effects/ParticleField";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { BackHome } from "@/components/BackHome";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import type { ChangeType, ChangeVersion } from "@/lib/community-data";

type Props = {
  changelog: ChangeVersion[];
  issues: { version: string; items: string[] };
  meta: { discord: string; donate: string; version: string };
  totalChanges: number;
  githubReleases: string;
};

const CHANGELOG_CSS = `
.cm-wrap{max-width:48rem;margin:0 auto;}
.cm-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.75rem;margin:0 auto 2.5rem;max-width:48rem;}
@media (max-width:640px){.cm-stats{grid-template-columns:repeat(2,minmax(0,1fr));}}
.cm-stat{border:1px solid rgba(51,65,85,.7);border-radius:1rem;background:rgba(30,41,59,.35);padding:1rem;text-align:center;}
.cm-stat-num{font-size:1.6rem;font-weight:700;color:#f8fafc;line-height:1.1;}
.cm-stat-lbl{font-size:.72rem;color:#94a3b8;margin-top:.25rem;}
.cm-section-title{font-size:1.5rem;font-weight:700;color:#f1f5f9;text-align:center;margin:0 0 .4rem;}
.cm-section-sub{font-size:.95rem;color:#94a3b8;text-align:center;margin:0 0 1.75rem;}
.cl-version{border:1px solid rgba(51,65,85,.7);border-radius:1rem;background:rgba(30,41,59,.32);margin-bottom:.85rem;overflow:hidden;}
.cl-version>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:.75rem;padding:.95rem 1.2rem;}
.cl-version>summary::-webkit-details-marker{display:none;}
.cl-version[open]>summary{border-bottom:1px solid rgba(51,65,85,.45);}
.cl-ver-name{font-size:1.02rem;font-weight:700;color:#f8fafc;}
.cl-ver-meta{font-size:.76rem;color:#7c8aa3;font-weight:500;}
.cl-ver-count{margin-left:auto;font-size:.7rem;color:#cbd5e1;background:rgba(148,163,184,.12);padding:.18rem .6rem;border-radius:999px;white-space:nowrap;}
.cl-arrow{color:#a855f7;font-size:.8rem;transition:transform .2s;}
.cl-version[open] .cl-arrow{transform:rotate(90deg);}
.cl-list{list-style:none;margin:0;padding:.6rem 1.2rem .85rem;display:flex;flex-direction:column;gap:.42rem;}
.cl-group-title{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#c4b5fd;background:rgba(168,85,247,.07);border-top:1px solid rgba(51,65,85,.4);padding:.65rem 1.2rem .5rem;}
.cl-version details>div:first-of-type .cl-group-title,.cl-version>div:first-of-type .cl-group-title{border-top:none;}
.cl-item{display:flex;gap:.6rem;font-size:.85rem;color:#cbd5e1;line-height:1.5;align-items:flex-start;}
.cl-tag{flex:0 0 auto;font-size:.6rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;padding:.12rem .45rem;border-radius:4px;margin-top:.1rem;min-width:3.7rem;width:auto;text-align:center;white-space:nowrap;}
.cl-tag.added{color:#6ee7b7;background:rgba(16,185,129,.13);}
.cl-tag.fixed{color:#7dd3fc;background:rgba(14,165,233,.13);}
.cl-tag.changed{color:#c4b5fd;background:rgba(139,92,246,.14);}
.cl-tag.removed{color:#fda4af;background:rgba(244,63,94,.13);}
.iss-list{list-style:none;margin:0 auto;padding:0;max-width:48rem;display:flex;flex-direction:column;gap:.5rem;}
.iss-item{display:flex;gap:.65rem;align-items:flex-start;border:1px solid rgba(51,65,85,.55);border-radius:.7rem;background:rgba(30,41,59,.28);padding:.7rem .9rem;font-size:.86rem;color:#cbd5e1;line-height:1.45;}
.iss-dot{flex:0 0 auto;width:.55rem;height:.55rem;border-radius:999px;margin-top:.4rem;background:linear-gradient(135deg,#a855f7,#6366f1);}
.gh-btn svg{margin-right:.6rem;flex-shrink:0;fill:currentColor;}
`;

export function ChangelogsContent({
  changelog,
  issues,
  meta,
  totalChanges,
  githubReleases,
}: Props) {
  const { t } = useI18n();

  const TAG_LABEL: Record<ChangeType, string> = {
    added: t.changelogsPage.tags.added,
    fixed: t.changelogsPage.tags.fixed,
    changed: t.changelogsPage.tags.changed,
    removed: t.changelogsPage.tags.removed,
  };

  return (
    <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
      <SecondaryHeader />
      <style>{CHANGELOG_CSS}</style>

      {/* Hero */}
      <section>
        <div className="zywl-relativo mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="absoluto inserir-0 z-index--10" aria-hidden="true">
            <ParticleField />
          </div>
          <div
            className="pointer-events-none absoluto inserir-0 z-index--10 ml--7rem overflow-hidden border-radius-bottom-3rem"
            aria-hidden="true"
          >
            <div className="absoluto inferior-0 esquerda-50 z-index--10 transladar-x-menos-50porcento">
              <img
                src={asset("/src/resources/svg/glow-bottom.svg")}
                className="largura-maxima-nenhuma"
                width="2146"
                height="774"
                alt=""
              />
            </div>
          </div>
          <div className="padding-bottom-4rem padding-top-8rem padding-inferior-5rem padding-superior-13rem">
            <div className="mx-auto largura-maxima-48rem text-align-center">
              <div className="margem-inferior-1-5rem" data-aos="fade-down">
                <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                  {t.changelogsPage.badge}
                </div>
              </div>
              <h1
                className="heading-lg bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent "
                data-aos="fade-down"
              >
                {t.changelogsPage.heroTitle}
              </h1>
              <p
                className="margem-inferior-2rem font-size-1-125rem text-color-gray-200"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                {t.changelogsPage.heroSubtitle}
              </p>
              <div
                className="mx-auto largura-maxima-20rem margem-y-1rem media-exibir-inline-flex media-largura-maxima-nenhuma media-centralizar-conteudo media-inverter-espacamento-horizontal media-inverter-espacamento-vertical"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <a
                    className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes gh-btn"
                    href={githubReleases}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                    </svg>
                    {t.changelogsPage.viewOnGithub}
                  </a>
                </div>
                <div>
                  <BackHome />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="cm-stats" data-aos="fade-up">
            <div className="cm-stat">
              <div className="cm-stat-num">
                {changelog[0]?.name ?? meta.version.toUpperCase()}
              </div>
              <div className="cm-stat-lbl">{t.changelogsPage.stats.latestBuild}</div>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-num">{changelog.length}</div>
              <div className="cm-stat-lbl">{t.changelogsPage.stats.versionsTracked}</div>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-num">{totalChanges}</div>
              <div className="cm-stat-lbl">{t.changelogsPage.stats.changesLogged}</div>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-num">{issues.items.length}</div>
              <div className="cm-stat-lbl">{t.changelogsPage.stats.trackedIssues}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="zywl-relativo">
        <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="padding-top-3rem padding-bottom-3rem">
            <h2 className="cm-section-title">{t.changelogsPage.changelogTitle}</h2>
            <p className="cm-section-sub">
              {t.changelogsPage.changelogSub}
            </p>
            <div className="cm-wrap">
              {changelog.map((version, i) => (
                <details key={version.name} className="cl-version" open={i < 2}>
                  <summary>
                    <span className="cl-arrow">▸</span>
                    <span className="cl-ver-name">{version.name}</span>
                    {version.meta ? (
                      <span className="cl-ver-meta">{version.meta}</span>
                    ) : null}
                    <span className="cl-ver-count">
                      {version.items.length} {t.changelogsPage.changes}
                    </span>
                  </summary>
                  {version.groups.map((g, gi) => (
                    <div key={gi}>
                      {g.title ? (
                        <div className="cl-group-title">{g.title}</div>
                      ) : null}
                      <ul className="cl-list">
                        {g.items.map((item, j) => (
                          <li key={j} className="cl-item">
                            <span className={`cl-tag ${item.type}`}>
                              {TAG_LABEL[item.type]}
                            </span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Known issues */}
      <section className="zywl-relativo">
        <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="padding-top-3rem padding-bottom-3rem padding-inferior-8rem">
            <h2 className="cm-section-title">{t.changelogsPage.issuesTitle}</h2>
            <p className="cm-section-sub">
              {t.changelogsPage.issuesSubBefore} {issues.version.toUpperCase()} {t.changelogsPage.issuesSubAfter}
            </p>
            <ul className="iss-list">
              {issues.items.map((text, i) => (
                <li key={i} className="iss-item">
                  <span className="iss-dot" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
