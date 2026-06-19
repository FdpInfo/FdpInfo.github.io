"use client";

import { useState } from "react";
import Link from "next/link";

const GRID =
  "exibir-grade font-size-0-875rem grade-colunas-4 media-margem-horizontal-negativa-1-5rem ultimo-do-tipo-padding-inferior-1-5rem media-ultimo-do-tipo-margem-inferior-2rem media-ultimo-do-tipo-borda-arredondada-1-5rem media-ultimo-do-tipo-borda-arredondada-inferior-direita-1-5rem ultimo-do-tipo-antes-borda-inferior-2px media-ultimo-do-tipo-borda-arredondada-inferior-esquerda-1-5rem media-nesse-tipo-borda-arredondada-superior-1-5rem nesse-tipo-padding-vertical-1-5rem media-nesse-tipo-borda-arredondada-superior-esquerda-1-5rem nesse-tipo-antes-borda-superior-2px media-nesse-tipo-borda-arredondada-superior-direita-1-5rem nesse-tipo-bg-transparente media-nesse-tipo-ordem-1 nesse-tipo-posicao-relativa nesse-tipo-antes-sem-ponteiro nesse-tipo-antes-posicao-absoluta nesse-tipo-antes-inserir-negativo-1px nth-of-type-before-z-index--10 nth-of-type-before-border-radius-inherit nth-of-type-before-border-x-width-2px nth-of-type-before-border-color-purple media-nth-of-type-order-2 media-nth-of-type-order-3 media-nth-of-type-display-none media-nth-of-type-margin-bottom-0px bg-gray-opacity-20";

const CELL =
  "display-flex flex-direction-column justificar-conteudo-fim padding-left-right-1-5rem";

const ROW =
  "display-flex altura-100-porcento alinhar-itens-centro border-bottom-width-1px border-color-rgb-30-41-59 padding-top-bottom-0-5rem text-color-gray-300";

function CheckIcon() {
  return (
    <svg
      className="margem-direita-0-75rem flex-encolher-0 fill-purple"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
    >
      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
    </svg>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="zywl-relativo">
      <div
        className="pointer-events-none absoluto inserir-0 z-index--10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absoluto esquerda-50 topo-0 display-flex proporcao-aspecto-1-1 largura-33porcento transladar-x-menos-50porcento transladar-y-menos-50porcento alinhar-itens-centro justificar-conteudo-centro"></div>
      </div>
      <section id="pricing">
        <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="padding-top-bottom-3rem padding-vertical-5rem">
            <div className="mx-auto largura-maxima-48rem padding-bottom-3rem text-align-center padding-inferior-5rem">
              <div>
                <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                  Donate
                </div>
              </div>
              <h2 className="heading-md bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent ">
                All products are free but you can support us{" "}
              </h2>
              <p className="font-size-1-125rem text-color-gray-300">
                Doesn&apos;t hurt your pocket but provides you with anything
                you&apos;d ever want in a Minecraft cheat.
              </p>
            </div>
            <div className="zywl-relativo">
              <div
                className="pointer-events-none absoluto inferior-0 esquerda-66 mbb--5rem transladar-x-menos-50porcento opacity-0-7 blur-40px media-exibir-nenhum"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="434"
                  height="427"
                >
                  <defs>
                    <linearGradient
                      id="bs5-a"
                      x1="19.609%"
                      x2="50%"
                      y1="14.544%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#bs5-a)"
                    fillRule="evenodd"
                    d="m661 736 461 369-284 58z"
                    transform="matrix(1 0 0 -1 -661 1163)"
                  />
                </svg>
              </div>
              <div className={GRID}>
                {/* Toggle */}
                <div className={CELL}>
                  <div className="border-color-rgb-30-41-59 padding-bottom-1-25rem borda-inferior-1px">
                    <div className="media-texto-alinhar-centro">
                      <div className="exibir-inline-flex alinhar-itens-centro espaco-branco-nowrap">
                        <div className="margem-direita-0-5rem font-size-0-875rem font-weight-500 text-color-gray-600 media-mostrar-sempre">
                          Monthly
                        </div>
                        <div className="zywl-relativo">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="sr-only apoio"
                            checked={annual}
                            onChange={(e) => setAnnual(e.target.checked)}
                          />
                          <label
                            htmlFor="toggle"
                            className="zywl-relativo display-flex altura-1-5rem largura-2-75rem cursor-apontador alinhar-itens-centro border-radius-9999px bg-color-rgb-148-163-184 padding-left-right-0-125rem outline-gray-400 transition-color-bg before-content-height-1-25rem before-content-width-1-25rem before-content-border-radius-9999px before-content-bg-white before-content-shadow before-content-transition-transform before-content-transition-duration-150ms cow8e c5tt9 c74bn ctrkw cnoqz cafcq"
                          >
                            <span className="sr-only">Pay Lifetime</span>
                          </label>
                        </div>
                        <div className="margem-esquerda-0-5rem font-size-0-875rem font-weight-500 text-color-gray-600">
                          Lifetime{" "}
                          <span className="text-color-teal-500">
                            (suggested)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FDP - Inject */}
                <div className={CELL}>
                  <div className="margem-inferior-1rem flex-crescer-1 border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    <div className="bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-125rem font-size-1rem font-weight-500 text-color-transparent ">
                      FDP - Inject
                    </div>
                    <div className="mb-0-25rem">
                      <span className="font-size-1-125rem font-weight-500 text-color-gray-600">
                        $
                      </span>
                      <span className="font-size-1-875rem font-weight-700 text-color-gray-50">
                        {annual ? "15" : "10"}
                      </span>
                      <span className="font-size-0-875rem font-weight-500 text-color-gray-700">
                        /lifetime
                      </span>
                    </div>
                    <div className="text-color-gray-600">
                      {" "}
                      specifically designed for ghost cheating, with a wide
                      variety of advanced modern modules created for that
                      purpose.
                    </div>
                  </div>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    {/* Matches the actual DOM browsers build from the malformed
                        source: a single styled anchor + a trailing arrow span. */}
                    <a
                      className="button-secondary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes"
                      href="https://www.youtube.com/watch?v=S7AeDGKE91I"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Comming soon
                    </a>
                    <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                      -&gt;
                    </span>
                  </div>
                </div>

                {/* Forge 1.8.9 */}
                <div className={CELL}>
                  <div className="margem-inferior-1rem flex-crescer-1 border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    <div className="bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-125rem font-size-1rem font-weight-500 text-color-transparent ">
                      Forge 1.8.9
                    </div>
                    <div className="mb-0-25rem">
                      <span className="font-size-1-125rem font-weight-500 text-color-gray-600">
                        $
                      </span>
                      <span className="font-size-1-875rem font-weight-700 text-color-gray-50">
                        {annual ? "5" : "5"}
                      </span>
                      <span className="font-size-0-875rem font-weight-500 text-color-gray-700">
                        /donate
                      </span>
                    </div>
                    <div className="text-color-gray-600">
                      For just $5.0 you can get an exclusive forever CAPE.
                    </div>
                  </div>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    <Link
                      className="button-secondary largura-100porcento bg-color-rgb-168-85-247 text-color-white transition-all transition-duration-150ms transition-ease-in-out hover-bg-purple paredes"
                      href="/donate"
                    >
                      {" "}
                      Donate now{" "}
                      <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-300 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                        -&gt;
                      </span>
                    </Link>
                  </div>
                </div>

                {/* With more coming soon */}
                <div className={CELL}>
                  <div className="margem-inferior-1rem flex-crescer-1 border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    <div className="bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-125rem font-size-1rem font-weight-500 text-color-transparent ">
                      With more coming soon.{" "}
                    </div>
                    <div className="mb-0-25rem">
                      <span className="font-size-1-125rem font-weight-500 text-color-gray-600">
                        $
                      </span>
                      <span className="font-size-1-875rem font-weight-700 text-color-gray-50">
                        {annual ? "29" : "9.99"}
                      </span>
                      <span className="font-size-0-875rem font-weight-500 text-color-gray-700"></span>
                    </div>
                    <div className="text-color-gray-600">Coming soon.</div>
                  </div>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-1rem">
                    <a
                      className="button-secondary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes"
                      href=""
                    >
                      {" "}
                      Coming soon{" "}
                      <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>

                {/* Row: Various Visuals Methods */}
                <div className={CELL}>
                  <div className="margem-topo-1rem padding-top-bottom-0-5rem font-weight-500 text-color-gray-50">
                    Various Visuals Methods
                  </div>
                </div>
                <div className={CELL}>
                  <div className="margem-topo-1rem padding-top-bottom-0-5rem font-weight-500 text-color-gray-50 media-modo-exibicao-oculto">
                    Various Bypass Methods
                  </div>
                </div>
                <div className={CELL}>
                  <div className="margem-topo-1rem padding-top-bottom-0-5rem font-weight-500 text-color-gray-50 media-modo-exibicao-oculto">
                    Various Bypass Methods
                  </div>
                </div>
                <div className={CELL}>
                  <div className="margem-topo-1rem padding-top-bottom-0-5rem font-weight-500 text-color-gray-50 media-modo-exibicao-oculto">
                    Various Bypass Methods
                  </div>
                </div>

                {/* Row: Updates Frequents */}
                <div className={CELL}>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-top-bottom-0-5rem text-color-gray-300">
                    Updates Frequents
                  </div>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Credit Cards{" "}
                      <span className="media-modo-exibicao-oculto">
                        Various Payment methods
                      </span>
                    </span>
                  </div>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Credit Cards{" "}
                      <span className="media-modo-exibicao-oculto">
                        Various Payment methods
                      </span>
                    </span>
                  </div>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Coming soon{" "}
                      <span className="media-modo-exibicao-oculto">
                        Various Payment methods
                      </span>
                    </span>
                  </div>
                </div>

                {/* Row: State of the art bypasses */}
                <div className={CELL}>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-top-bottom-0-5rem text-color-gray-300">
                    State of the art bypasses
                  </div>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Crypto{" "}
                      <span className="media-modo-exibicao-oculto">
                        State of the art bypasses
                      </span>
                    </span>
                  </div>
                </div>
                <div className={CELL}>
                  <span className="media-modo-exibicao-oculto">
                    State of the art bypasses
                  </span>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Coming soon{" "}
                      <span className="media-modo-exibicao-oculto">
                        State of the art bypasses
                      </span>
                    </span>
                  </div>
                </div>

                {/* Row: 24/7 Support */}
                <div className={CELL}>
                  <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-top-bottom-0-5rem text-color-gray-300">
                    24/7 Support
                  </div>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      8+ other payment methods{" "}
                      <span className="media-modo-exibicao-oculto">
                        24/7 Support
                      </span>
                    </span>
                  </div>
                </div>
                <div className={CELL}>
                  <span className="media-modo-exibicao-oculto">24/7 Support</span>
                </div>
                <div className={CELL}>
                  <div className={ROW}>
                    <CheckIcon />
                    <span>
                      Coming soon{" "}
                      <span className="media-modo-exibicao-oculto">
                        24/7 Support
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
