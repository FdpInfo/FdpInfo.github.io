"use client";

import { useState } from "react";
import { ParticleField } from "@/components/effects/ParticleField";
import { AlpineTransition } from "@/components/effects/AlpineTransition";
import { asset } from "@/lib/asset";

const BTN_BASE =
  "display-flex largura-100porcento alinhar-itens-centro border-radius-0-25rem border-width-1px bg-color-rgb-30-41-59-25 padding-left-right-0-75rem padding-top-bottom-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50 transition-all transition-duration-150ms transition-ease-in-out hover-opacity-1";

const tabClass = (active: boolean) =>
  `${BTN_BASE} ${
    active
      ? "border-color-rgb-126-34-206 shadow-sm shadow-purple"
      : "border-color-rgb-51-65-85 opacity-0-5"
  }`;

const ENTER = "transition-all transition-cubic-bezier transition-duration-700ms ordem--9999";
const ENTER_START = "opacity-0 rotacao-menos-60deg";
const ENTER_END = "opacity-1 rotacao-0deg";
const LEAVE = "transition-all transition-cubic-bezier transition-duration-700ms absoluto";
const LEAVE_START = "opacity-1 rotacao-0deg";
const LEAVE_END = "opacity-0 rotacao-60deg";

const ICON_BOX =
  "zywl-relativo display-flex altura-4rem largura-4rem rotacao-menos-14deg alinhar-itens-centro justificar-conteudo-centro border-radius-1rem border-width-1px border-color-transparent shadow-xl bg-linear-gradient-gray-padding before-content-absolute before-content-inset-0 before-content-border-radius-1rem before-content-bg-opacity-0-3";

export function FeatureTabs() {
  const [tab, setTab] = useState<"1" | "2" | "3">("1");

  return (
    <section id="features">
      <div className="zywl-relativo mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div
          className="pointer-events-none absoluto inserir-0 z-index--10 ml--7rem overflow-hidden border-radius-top-3rem"
          aria-hidden="true"
        >
          <div className="absoluto esquerda-50 topo-0 z-index--10 transladar-x-menos-50porcento">
            <img
              src={asset("/src/resources/svg/glow-top.svg")}
              className="largura-maxima-nenhuma"
              width="1404"
              height="658"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="padding-bottom-3rem padding-top-4rem padding-inferior-5rem padding-superior-13rem">
          <div>
            <div className="mx-auto display-flex largura-maxima-36rem flex-direction-column margem-y-2rem margem-y-reversa-1 media-largura-max-infinita flex-linha-horizontal espaco-horizontal-2rem espaco-vertical-0px media-espacamento-horizontal-4rem media-espacamento-horizontal-5rem">
              <div
                className="ordem-1 media-texto-alinhar-centro media-ordem-padrao media-largura-58-33-por-cento media-largura-metade"
                data-aos="fade-down"
              >
                <div>
                  <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                    {" "}
                    The best Minecraft cheat{" "}
                  </div>
                </div>
                <h3 className="heading-sm bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-0-75rem text-color-transparent ">
                  {" "}
                  Dominate your opponents with FDP{" "}
                </h3>
                <p className="margem-inferior-2rem font-size-1-125rem text-color-gray-300">
                  Active Development, Bypass popular servers, Highly
                  Customizable, Free Download. flawlessly with FDP.
                </p>
                <div className="margem-topo-2rem largura-maxima-20rem margem-y-0-5rem media-margem-x-auto">
                  <button
                    className={tabClass(tab === "1")}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab("1");
                    }}
                  >
                    <svg
                      className="margem-direita-0-75rem flex-encolher-0 fill-light-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Constant Updates</span>
                  </button>
                  <button
                    className={tabClass(tab === "2")}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab("2");
                    }}
                  >
                    <svg
                      className="margem-direita-0-75rem flex-encolher-0 fill-light-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <span>Supports all Minecraft versions</span>
                  </button>
                  <button
                    className={tabClass(tab === "3")}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab("3");
                    }}
                  >
                    <svg
                      className="margem-direita-0-75rem flex-encolher-0 fill-light-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                    </svg>
                    <span>State of the art bypasses</span>
                  </button>
                </div>
              </div>
              <div
                className="media-largura-41-66-por-cento media-largura-metade"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="zywl-relativo mtt--3rem padding-top-bottom-6rem">
                  <div className="absoluto inserir-0 z-index--10">
                    <ParticleField quantity={8} staticity={30} />
                  </div>
                  <div className="display-flex alinhar-itens-centro justificar-conteudo-centro">
                    <div className="zywl-relativo display-flex altura-12rem largura-12rem alinhar-itens-centro justificar-conteudo-centro">
                      <svg
                        className="pointer-events-none absoluto inserir-0 esquerda-50 topo-50 transladar-x-menos-50porcento transladar-y-menos-50porcento transformacao-transladar-rotacionar-inclinar-escalar blur-12px will-change-transform"
                        width="480"
                        height="480"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="pulse-a"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path
                            className="caixa-de-selecao---quadrado"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="caixa-de-selecao---quadrado icon-animation-delay-1"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="caixa-de-selecao---quadrado icon-animation-delay-2"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                        </g>
                      </svg>
                      <div className="pointer-events-none absoluto inserir-0 esquerda-50 topo-50 altura-500px largura-500px transladar-x-menos-50porcento transladar-y-menos-50porcento transformacao-transladar-rotacionar-inclinar-escalar overflow-hidden border-radius-9999px mask-radial-gradient">
                        <div className="altura-200-porcento animacao-infinita">
                          <div className="absoluto inserir-0 opacity-0-2 blur-2px bg-repeating-linear-gradient-v-white"></div>
                          <div className="absoluto inserir-0 bg-repeating-linear-gradient-v-purple"></div>
                          <div className="absoluto inserir-0 opacity-0-2 blur-2px bg-repeating-linear-gradient-white"></div>
                          <div className="absoluto inserir-0 bg-repeating-linear-gradient-purple"></div>
                        </div>
                      </div>
                      <AlpineTransition
                        show={tab === "1"}
                        enter={ENTER}
                        enterStart={ENTER_START}
                        enterEnd={ENTER_END}
                        leave={LEAVE}
                        leaveStart={LEAVE_START}
                        leaveEnd={LEAVE_END}
                      >
                        <div className={ICON_BOX}>
                          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                          <img src={asset("/src/resources/png/icon.png")} />
                        </div>
                      </AlpineTransition>
                      <AlpineTransition
                        show={tab === "2"}
                        enter={ENTER}
                        enterStart={ENTER_START}
                        enterEnd={ENTER_END}
                        leave={LEAVE}
                        leaveStart={LEAVE_START}
                        leaveEnd={LEAVE_END}
                      >
                        <div className={ICON_BOX}>
                          <svg
                            className="zywl-relativo fill-gray"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                          >
                            <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z" />
                          </svg>
                        </div>
                      </AlpineTransition>
                      <AlpineTransition
                        show={tab === "3"}
                        enter={ENTER}
                        enterStart={ENTER_START}
                        enterEnd={ENTER_END}
                        leave={LEAVE}
                        leaveStart={LEAVE_START}
                        leaveEnd={LEAVE_END}
                      >
                        <div className={ICON_BOX}>
                          <svg
                            className="zywl-relativo fill-gray"
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="14"
                          >
                            <path
                              fillRule="nonzero"
                              d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z"
                            />
                          </svg>
                        </div>
                      </AlpineTransition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
