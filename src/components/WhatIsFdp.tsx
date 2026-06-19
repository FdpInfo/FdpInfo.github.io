import Link from "next/link";
import { ParticleField } from "@/components/effects/ParticleField";
import { HighlightGroup } from "@/components/effects/HighlightGroup";
import { DownloadLink } from "@/components/DownloadLink";
import { asset } from "@/lib/asset";

const CARD =
  "zywl-relativo altura-100-porcento overflow-hidden border-radius-1-5rem bg-color-rgb-30-41-59 padding-1px before-content-pointer-none before-content-absolute before-content-left-12rem before-content-top-12rem before-content-z-index-30 before-content-height-24rem before-content-width-24rem before-content-transform-mouse-x before-content-transform-mouse-y before-content-border-radius-9999px before-content-bg-purple before-content-opacity-0 before-content-filter-blur-100px before-content-transition-opacity before-content-transition-duration-500ms after-content-absolute after-content-inset-0 after-content-z-index-10 after-content-border-radius-inherit after-content-opacity-0 after-content-transition-opacity after-content-transition-duration-500ms after-content-radial-gradient hover-before-opacity-0-2 cahiq";

const H3 =
  "exibir-inline-flex bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-0-25rem font-size-1-25rem font-weight-700 text-color-transparent ";

const FEATURES = [
  {
    path: "M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z",
    title: "Personalisable",
    desc: "Our cheat can be personailzed, based on your needs.",
  },
  {
    path: "M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z",
    title: "Configurable",
    desc: "FDP is highly configurable and easy to use allowing you to bypass any anticheat. ",
  },
  {
    path: "M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z",
    title: "Adaptable",
    desc: "You can use FDP on any Minecraft version you want, from 1.8 to 1.19.4. ",
  },
  {
    path: "M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z",
    title: "Uptime",
    desc: "We guarantee you 99.9% uptime.",
  },
];

export function WhatIsFdp() {
  return (
    <section id="what-is-fdp" className="zywl-relativo">
      <div className="absoluto esquerda-50 topo-0 z-index--10 mll--8rem mt--6rem altura-20rem largura-20rem transladar-x-menos-50porcento">
        <div className="absoluto inserir-0 z-index--10" aria-hidden="true">
          <ParticleField quantity={6} staticity={30} />
        </div>
      </div>
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="padding-top-4rem padding-superior-8rem">
          <div className="mx-auto largura-maxima-48rem padding-bottom-3rem text-align-center padding-inferior-5rem">
            <h2 className="heading-md bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent ">
              What is FDP?{" "}
            </h2>
            <p className="font-size-1-125rem text-color-gray-300">
              FDP is a hacked client (also known as a cheat) for Minecraft and
              designed to give you a significant advantage over other players.
              Unlike many of its competitors, FDP is completely free, open
              source and compatible with Forge. It was originally based on
              LiquidBounce (legacy), which has since been discontinued. Today,
              FDP is maintained as a standalone project and is not affiliated
              with LiquidBounce.
            </p>
          </div>
          <div className="zywl-relativo padding-bottom-3rem padding-inferior-5rem">
            <div
              className="pointer-events-none absoluto inferior-0 esquerda-50 mbb--5rem transladar-x-menos-50porcento opacity-0-5 blur-40px"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            <HighlightGroup className="exibir-grade espacamento-1-5rem paredes grade-colunas-12">
              <div className="media-abranger-coluna-grade-12" data-aos="fade-down">
                <div className={CARD}>
                  <div className="zywl-relativo z-index-20 altura-100-porcento overflow-hidden border-radius-inherit bg-color-rgb">
                    <div className="display-flex flex-direction-column flex-linha-horizontal alinhar-itens-no-centro justificar-conteudo-com-espacamento">
                      <div
                        className="absoluto direita-0 topo-0 blur-40px"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop
                                offset="100%"
                                stopColor="#6366F1"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      <div
                        className="pointer-events-none absoluto inferior-0 esquerda-50 z-index--10 display-flex proporcao-aspecto-1-1 altura-100-porcento transladar-x-menos-50porcento transladar-y-50porcento alinhar-itens-centro justificar-conteudo-centro"
                        aria-hidden="true"
                      >
                        <div className="transform-translateZ absoluto inserir-0 border-radius-9999px bg-color-rgb-168-85-247 opacity-0-7 blur-120px"></div>
                        <div className="transform-translateZ absoluto altura-25-porcento largura-25porcento border-radius-9999px bg-color-rgb-192-132-252 blur-40px"></div>
                      </div>
                      <div className="ordem-1 flex-encolher-0 padding-1-5rem padding-top-0px media-ordem-padrao media-largura-max-480px padding-total-2rem padding-direito-0px">
                        <div className="margem-inferior-1-25rem">
                          <div>
                            <h3 className={H3}> Cleanest GUI</h3>
                            <p className="text-color-gray-300">
                              Easy to use, allowing you to bypass optimally no
                              matter your skill level.
                            </p>
                          </div>
                        </div>
                        <div>
                          <DownloadLink
                            className="button-secondary zywl-relativo text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-gray-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-3 hover-text-white paredes"
                          >
                            <span className="zywl-relativo exibir-inline-flex alinhar-itens-centro">
                              {" "}
                              Download now{" "}
                              <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                                -&gt;
                              </span>
                            </span>
                          </DownloadLink>
                        </div>
                      </div>
                      <div className="zywl-relativo altura-16rem largura-100porcento overflow-hidden media-altura-automatica">
                        <img
                          className="absoluto inferior-0 esquerda-50 mx-auto largura-maxima-nenhuma transladar-x-menos-50porcento media-posicionamento-relativo media-posicao-esquerda-0px media-translate-0px"
                          src={asset("/src/resources/png/fdp_gui.png")}
                          width="504"
                          height="400"
                          alt="FDP Client interface"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-abranger-coluna-grade-7" data-aos="fade-down">
                <div className={CARD}>
                  <div className="zywl-relativo z-index-20 altura-100-porcento overflow-hidden border-radius-inherit bg-color-rgb">
                    <div className="display-flex flex-direction-column">
                      <div
                        className="pointer-events-none absoluto inferior-0 esquerda-50 z-index--10 proporcao-aspecto-1-1 largura-50-porcento transladar-x-menos-50porcento transladar-y-50porcento"
                        aria-hidden="true"
                      >
                        <div className="transform-translateZ absoluto inserir-0 border-radius-9999px bg-color-rgb-30-41-59 blur-80px"></div>
                      </div>
                      <div className="ordem-1 flex-encolher-0 padding-1-5rem padding-top-0px media-ordem-padrao media-largura-max-480px padding-total-2rem">
                        <div>
                          <h3 className={H3}> Feature filled</h3>
                          <p className="text-color-gray-300">
                            Want to fly on your favorite server? There&apos;s a
                            module for that. Want to Bhop around your oponent and
                            destroy them before they know what hit them?
                            There&apos;s a module for that.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="zywl-relativo altura-16rem largura-100porcento overflow-hidden media-altura-automatica padding-bottom-2rem">
                        <img
                          className="absoluto inferior-0 esquerda-50 mx-auto largura-maxima-nenhuma transladar-x-menos-50porcento media-posicionamento-relativo media-posicao-esquerda-0px media-largura-max-100-por-cento media-translate-0px"
                          src={asset("/src/resources/png/fdp_features.png")}
                          width="536"
                          height="230"
                          alt="FDP Client features"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-abranger-coluna-grade-5" data-aos="fade-down">
                <div className={CARD}>
                  <div className="zywl-relativo z-index-20 altura-100-porcento overflow-hidden border-radius-inherit bg-color-rgb">
                    <div className="display-flex flex-direction-column">
                      <div
                        className="pointer-events-none absoluto inferior-0 esquerda-50 z-index--10 proporcao-aspecto-1-1 largura-50-porcento transladar-x-menos-50porcento transladar-y-50porcento"
                        aria-hidden="true"
                      >
                        <div className="transform-translateZ absoluto inserir-0 border-radius-9999px bg-color-rgb-30-41-59 blur-80px"></div>
                      </div>
                      <div className="ordem-1 flex-encolher-0 padding-1-5rem padding-top-0px media-ordem-padrao media-largura-max-480px padding-total-2rem">
                        <div>
                          <h3 className={H3}> Customizable</h3>
                          <p className="text-color-gray-300">
                            Our revolutionary theme system lets you easily
                            customize FDP to fit your style.
                          </p>
                        </div>
                      </div>
                      <div className="zywl-relativo altura-16rem largura-100porcento overflow-hidden media-altura-automatica padding-bottom-2rem">
                        <img
                          className="absoluto inferior-0 esquerda-50 mx-auto largura-maxima-nenhuma transladar-x-menos-50porcento media-posicionamento-relativo media-posicao-esquerda-0px media-largura-max-100-por-cento media-translate-0px"
                          src={asset("/src/resources/png/fdp.png")}
                          width="330"
                          height="330"
                          alt="FDP Client logo"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HighlightGroup>
          </div>
          <div className="exibir-grade espacamento-2rem grade-colunas-3 espaco-entre-elementos-3rem">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <div className="mb-0-25rem display-flex alinhar-itens-centro margem-x-automatica">
                  <svg
                    className="flex-encolher-0 fill-light-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d={f.path} />
                  </svg>
                  <h4 className="font-weight-500 text-color-gray-50">
                    {f.title}
                  </h4>
                </div>
                <p className="font-size-0-875rem text-color-gray-300">
                  {f.desc}
                </p>
              </div>
            ))}
            <div>
              <div className="mb-0-25rem display-flex alinhar-itens-centro margem-x-automatica">
                <svg
                  className="flex-encolher-0 fill-light-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                </svg>
                <h4 className="font-weight-500 text-color-gray-50">Security</h4>
              </div>
              <p className="font-size-0-875rem text-color-gray-300">
                Your information is secure with us. Read privacy policy{" "}
                <b>
                  <Link href="/privacy">here</Link>
                </b>
                . We are GDPR compliant.{" "}
              </p>
            </div>
            <div>
              <div className="mb-0-25rem display-flex alinhar-itens-centro margem-x-automatica">
                <svg
                  className="flex-encolher-0 fill-light-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                </svg>
                <h4 className="font-weight-500 text-color-gray-50">
                  Translation
                </h4>
              </div>
              <p className="font-size-0-875rem text-color-gray-300">
                Don&apos;t know English? No hablo Inglis? FDP supports have 9
                languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
