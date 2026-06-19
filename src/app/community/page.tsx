import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/effects/ParticleField";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { BackHome } from "@/components/BackHome";
import { Footer } from "@/components/Footer";
import { CommunityCards } from "@/components/CommunityCards";
import { getMeta, GITHUB_RELEASES, GITHUB_ISSUE_NEW } from "@/lib/community-data";

export const metadata: Metadata = {
  title: "FDP Client – Community",
  description:
    "Join the FDP Client community on Discord, follow the changelog and support the project.",
};

const DISCORD_PATH =
  "M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419Z";

const COMMUNITY_CSS = `
.cm-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.75rem;margin:0 auto 0;max-width:48rem;}
@media (max-width:640px){.cm-stats{grid-template-columns:repeat(2,minmax(0,1fr));}}
.cm-stat{border:1px solid rgba(51,65,85,.7);border-radius:1rem;background:rgba(30,41,59,.35);padding:1rem;text-align:center;}
.cm-stat-num{font-size:1.6rem;font-weight:700;color:#f8fafc;line-height:1.1;}
.cm-stat-lbl{font-size:.72rem;color:#94a3b8;margin-top:.25rem;}
.cm-section-title{font-size:1.5rem;font-weight:700;color:#f1f5f9;text-align:center;margin:0 0 .4rem;}
.cm-section-sub{font-size:.95rem;color:#94a3b8;text-align:center;margin:0 0 1.75rem;}
.hub-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.1rem;max-width:48rem;margin:0 auto;}
@media (max-width:640px){.hub-grid{grid-template-columns:1fr;}}
.hub-card{display:flex;flex-direction:column;text-align:left;border:1px solid rgba(51,65,85,.7);border-radius:1.25rem;background:rgba(30,41,59,.32);padding:1.5rem;height:100%;transition:border-color .2s,background .2s,transform .2s;}
.hub-card:hover{border-color:rgba(168,85,247,.55);background:rgba(30,41,59,.55);transform:translateY(-2px);}
.hub-ico{width:2.75rem;height:2.75rem;border-radius:.85rem;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(168,85,247,.18),rgba(99,102,241,.18));border:1px solid rgba(168,85,247,.28);margin-bottom:1rem;}
.hub-ico svg{width:1.3rem;height:1.3rem;fill:#c4b5fd;}
.hub-title{font-size:1.12rem;font-weight:700;color:#f8fafc;margin:0 0 .35rem;}
.hub-desc{font-size:.9rem;color:#94a3b8;line-height:1.5;margin:0 0 1.1rem;flex-grow:1;}
.hub-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.85rem;font-weight:600;color:#c4b5fd;}
.hub-link .arr{color:#a855f7;}
.hub-card:hover .hub-link{color:#fff;}
.cm-discord{display:inline-flex;align-items:center;gap:.55rem;}
.cm-discord svg{width:1.15rem;height:1.15rem;fill:currentColor;}
`;

export default function CommunityPage() {
  const meta = getMeta();

  const stats = [
    { num: "100K+", lbl: "Community members" },
    { num: "99.9%", lbl: "Client uptime" },
    { num: "90%", lbl: "Positive feedback" },
    { num: "2019", lbl: "Going strong since" },
  ];

  return (
    <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
      <SecondaryHeader />
      <style>{COMMUNITY_CSS}</style>

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
                  Community
                </div>
              </div>
              <h1
                className="heading-lg bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent "
                data-aos="fade-down"
              >
                Where the FDP community lives.
              </h1>
              <p
                className="margem-inferior-2rem font-size-1-125rem text-color-gray-200"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Join thousands of players on Discord, follow every release and
                help shape the best Minecraft cheating solution.
              </p>
              <div
                className="mx-auto largura-maxima-20rem margem-y-1rem media-exibir-inline-flex media-largura-maxima-nenhuma media-centralizar-conteudo media-inverter-espacamento-horizontal media-inverter-espacamento-vertical"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <a
                    className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes cm-discord"
                    href={meta.discord}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={DISCORD_PATH} />
                    </svg>
                    Join the Discord
                  </a>
                </div>
                <div>
                  <a
                    className="button-primary largura-100porcento bg-color-rgb bg-opacity-0-25 text-color-gray-100 transition-all transition-duration-150ms transition-ease-in-out hover-bg-opacity-0-3 hover-text-white"
                    href="https://lucas-lima.xyz"
                  >
                    <span>Visit lucas-lima.xyz</span>
                  </a>
                </div>
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                <BackHome />
              </div>
            </div>
          </div>

          {/* Community in numbers */}
          <div className="cm-stats" data-aos="fade-up">
            {stats.map((s) => (
              <div key={s.lbl} className="cm-stat">
                <div className="cm-stat-num">{s.num}</div>
                <div className="cm-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub cards */}
      <section className="zywl-relativo">
        <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="padding-top-4rem padding-bottom-3rem padding-inferior-8rem">
            <h2 className="cm-section-title">Everything FDP, in one place</h2>
            <p className="cm-section-sub">
              Hang out, stay updated and support the project.
            </p>
            <CommunityCards
              discord={meta.discord}
              githubReleases={GITHUB_RELEASES}
              githubIssueNew={GITHUB_ISSUE_NEW}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
