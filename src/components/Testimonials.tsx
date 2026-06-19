"use client";

import { useEffect, useRef, useState } from "react";
import { ParticleField } from "@/components/effects/ParticleField";
import { AlpineTransition } from "@/components/effects/AlpineTransition";

type Item = { img: string; quote: string; name: string; role: string };

const ITEMS: Item[] = [
  {
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20style%3D%22background%3A%23c48762%22%3E%3Cg%3E%3Ctext%20text-anchor%3D%22middle%22%20dy%3D%22.35em%22%20x%3D%22512%22%20y%3D%22512%22%20fill%3D%22%23ffffff%22%20font-size%3D%22700%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Roboto%2C%20Helvetica%2C%20Arial%2C%20sans-serif%22%3EO%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    quote:
      "fdp is honestly one of if not the best client out right now, it has amazing bypasses, frequent updates and great visuals. if you have not used the client yet you are making a big mistake.",
    name: "heisthacks",
    role: "Customer",
  },
  {
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20style%3D%22background%3A%238062c4%22%3E%3Cg%3E%3Ctext%20text-anchor%3D%22middle%22%20dy%3D%22.35em%22%20x%3D%22512%22%20y%3D%22512%22%20fill%3D%22%23ffffff%22%20font-size%3D%22700%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Roboto%2C%20Helvetica%2C%20Arial%2C%20sans-serif%22%3EX%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    quote:
      "Best bypasses, this is definitely the BEST client open source, also the visuals are AMAZING, it even has an extremely fast speed (WITH A LONGJUMP).",
    name: "imnotglitch",
    role: "Customer",
  },
  {
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20style%3D%22background%3A%2362c4a2%22%3E%3Cg%3E%3Ctext%20text-anchor%3D%22middle%22%20dy%3D%22.35em%22%20x%3D%22512%22%20y%3D%22512%22%20fill%3D%22%23ffffff%22%20font-size%3D%22700%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Roboto%2C%20Helvetica%2C%20Arial%2C%20sans-serif%22%3EE%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    quote:
      "my  favorite client, very frequent updates and great support team. very friendly community and overall great bypasses and blatant cheating,",
    name: "n1cky",
    role: "Customer",
  },
];

const AV_ENTER = "transition-all transition-cubic-bezier transition-duration-700ms ordem--9999";
const AV_ENTER_START = "opacity-0 rotacao-menos-60deg";
const AV_ENTER_END = "opacity-1 rotacao-0deg";
const AV_LEAVE = "transition-all transition-cubic-bezier transition-duration-700ms";
const AV_LEAVE_START = "opacity-1 rotacao-0deg";
const AV_LEAVE_END = "opacity-0 rotacao-60deg";

const Q_ENTER = "transition-all transition-ease-in-out transition-duration-500ms transition-delay-200ms ordem--9999";
const Q_ENTER_START = "opacity-0 transladar-x-menos-1rem";
const Q_ENTER_END = "opacity-1 transladar-x-0px";
const Q_LEAVE = "transition-all transition-ease-in transition-duration-300ms transition-delay-300ms absoluto";
const Q_LEAVE_START = "opacity-1 transladar-x-0px";
const Q_LEAVE_END = "opacity-0 transladar-x-1rem";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [rotating, setRotating] = useState(true);
  const quotesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rotating) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1 === ITEMS.length ? 0 : a + 1));
    }, 7000);
    return () => window.clearInterval(id);
  }, [rotating]);

  useEffect(() => {
    const c = quotesRef.current;
    if (!c) return;
    const id = requestAnimationFrame(() => {
      const kids = Array.from(c.children) as HTMLElement[];
      const visible = kids[active];
      if (visible) c.style.height = `${visible.offsetHeight}px`;
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  const stopAutorotate = () => setRotating(false);

  return (
    <section id="reviews">
      <div className="mx-auto largura-maxima-48rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="zywl-relativo padding-bottom-3rem padding-inferior-5rem">
          <div className="absoluto esquerda-50 topo-0 z-index--10 mtt--1-5rem altura-20rem largura-20rem transladar-x-menos-50porcento">
            <div className="absoluto inserir-0 z-index--10" aria-hidden="true">
              <ParticleField quantity={10} staticity={30} />
            </div>
          </div>
          <section>
            <div className="text-align-center">
              <div className="zywl-relativo altura-8rem mask-linear-gradient-top">
                <div className="pointer-events-none absoluto esquerda-50 topo-0 z-index--10 altura-480px largura-480px transladar-x-menos-50porcento border-radius-9999px before-content-absolute before-content-inset-0 before-content-z-index--20 before-content-border-radius-9999px before-content-bg-gradient-bottom before-content-gradient-from-gray before-content-gradient-to-transparent before-content-gradient-to-position-20 after-content-absolute after-content-inset-0 after-content-z-index--20 after-content-margin-1px after-content-border-radius-9999px after-content-bg-dark-blue">
                  {ITEMS.map((item, index) => (
                    <AlpineTransition
                      key={index}
                      show={active === index}
                      className="absoluto inserir-0 z-index--10"
                      enter={AV_ENTER}
                      enterStart={AV_ENTER_START}
                      enterEnd={AV_ENTER_END}
                      leave={AV_LEAVE}
                      leaveStart={AV_LEAVE_START}
                      leaveEnd={AV_LEAVE_END}
                    >
                      <img
                        className="zywl-relativo esquerda-50 topo-2-75rem transladar-x-menos-50porcento border-radius-9999px"
                        src={item.img}
                        width="56"
                        height="56"
                        alt={item.name}
                      />
                    </AlpineTransition>
                  ))}
                </div>
              </div>
              <div className="mb-2-5rem">
                <div
                  ref={quotesRef}
                  className="zywl-relativo display-flex flex-direction-column transition-all-ease transition-delay-300ms transition-duration-150ms transition-ease-in-out"
                >
                  {ITEMS.map((item, index) => (
                    <AlpineTransition
                      key={index}
                      show={active === index}
                      enter={Q_ENTER}
                      enterStart={Q_ENTER_START}
                      enterEnd={Q_ENTER_END}
                      leave={Q_LEAVE}
                      leaveStart={Q_LEAVE_START}
                      leaveEnd={Q_LEAVE_END}
                    >
                      <div className="bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text font-size-1-25rem font-weight-700 text-color-transparent ">
                        {item.quote}
                      </div>
                    </AlpineTransition>
                  ))}
                </div>
              </div>
              <div className="m--0w375rem display-flex flex-enrolar justificar-conteudo-centro">
                {ITEMS.map((item, index) => (
                  <button
                    key={index}
                    className={`button-secondary zywl-relativo m-0-375rem padding-top-bottom-0-375rem font-size-0-75rem text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-gray-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-3 ${
                      active === index
                        ? "opacity-1"
                        : "opacity-0-3 hover-opacity-0-6"
                    }`}
                    onClick={() => {
                      setActive(index);
                      stopAutorotate();
                    }}
                  >
                    <span className="zywl-relativo">
                      <span className="text-color-gray-50">{item.name}</span>
                      <span className="text-color-gray-700">-</span>
                      <span>{item.role}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
