"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { ParticleField } from "@/components/effects/ParticleField";
import { HighlightGroup } from "@/components/effects/HighlightGroup";
import { asset } from "@/lib/asset";
import { useI18n } from "@/lib/i18n";

const SLIDE =
  "swiper-slide zywl-relativo altura-automatica overflow-hidden border-radius-1-5rem bg-color-rgb-30-41-59 padding-1px before-content-pointer-none before-content-absolute before-content-left-12rem before-content-top-12rem before-content-z-index-30 before-content-height-24rem before-content-width-24rem before-content-transform-mouse-x before-content-transform-mouse-y before-content-border-radius-9999px before-content-bg-purple before-content-opacity-0 before-content-filter-blur-100px before-content-transition-opacity before-content-transition-duration-500ms after-content-absolute after-content-inset-0 after-content-z-index-10 after-content-border-radius-inherit after-content-opacity-0 after-content-transition-opacity after-content-transition-duration-500ms after-content-radial-gradient hover-before-opacity-0-2 marcadorzao cahiq";

const LINK =
  "exibir-inline-flex alinhar-itens-centro font-size-0-875rem font-weight-500 text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out hover-text-white paredes";

type Slide = {
  icon: string;
  title: string;
  desc: ReactNode;
  linkText: ReactNode;
  href: string;
};

export function Statistics() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);

  const SLIDES: Slide[] = [
    {
      icon: "/src/resources/svg/carousel-icon-01.svg",
      title: t.stats.s1Title,
      desc: t.stats.s1Desc,
      linkText: t.stats.s1Link,
      href: "/community",
    },
    {
      icon: "/src/resources/svg/carousel-icon-02.svg",
      title: t.stats.s2Title,
      desc: t.stats.s2Desc,
      linkText: t.stats.s2Link,
      href: "https://github.com/SkidderMC/FDPClient/commits/",
    },
    {
      icon: "/src/resources/svg/carousel-icon-03.svg",
      title: t.stats.s3Title,
      desc: t.stats.s3Desc,
      linkText: t.stats.s3Link,
      href: "/donate",
    },
    {
      icon: "/src/resources/svg/carousel-icon-04.svg",
      title: t.stats.s4Title,
      desc: (
        <>
          {t.stats.s4DescBefore}{" "}
          <b>
            <a href="https://discord.com/invite/3XRFGeqEYD">
              https://discord.com/invite/3XRFGeqEYD
            </a>
          </b>
        </>
      ),
      linkText: t.stats.s4Link,
      href: "/community",
    },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const swiper = new Swiper(ref.current, {
      modules: [Navigation],
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section id="statistics">
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="padding-top-3rem padding-superior-5rem">
          <div className="mx-auto largura-maxima-48rem padding-bottom-3rem text-align-center padding-inferior-5rem">
            <div>
              <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                {t.stats.eyebrow}
              </div>
            </div>
            <h2 className="heading-md bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent ">
              {t.stats.title}
            </h2>
            <p className="font-size-1-125rem text-color-gray-300">
              {t.stats.subtitle}
            </p>
          </div>
          <div className="zywl-relativo before-content-absolute before-content-inset-0 before-content-z-index-20 before-content-transform-translate before-content-bg-gradient-left before-content-gradient-from-transparent before-content-gradient-to-blue before-content-gradient-to-position-20 after-content-absolute after-content-inset-0 after-content-z-index-20 after-content-transform-translate-100 after-content-bg-gradient-right after-content-gradient-from-transparent after-content-gradient-to-dark-blue after-content-gradient-to-position-20">
            <div
              ref={ref}
              className="testimonials-carousel swiper-container paredes"
            >
              <HighlightGroup className="swiper-wrapper largura-ajustar-conteudo">
                {SLIDES.map((slide, i) => (
                  <div key={i} className={SLIDE}>
                    <div className="zywl-relativo z-index-20 altura-100-porcento overflow-hidden border-radius-inherit bg-color-rgb">
                      <div
                        className="absoluto inserir-0 z-index--10 opacity-0 transition-opacity transition-duration-500ms transition-ease-in-out cffk1 cxlvw"
                        aria-hidden="true"
                      >
                        <ParticleField quantity={3} />
                      </div>
                      <div
                        className="pointer-events-none absoluto inferior-0 esquerda-50 z-index--10 proporcao-aspecto-1-1 largura-33porcento transladar-x-menos-50porcento transladar-y-50porcento"
                        aria-hidden="true"
                      >
                        <div className="transform-translateZ absoluto inserir-0 border-radius-9999px bg-color-rgb-30-41-59 blur-60px transition-color-bg transition-duration-500ms transition-ease-in-out cx92y"></div>
                      </div>
                      <div className="display-flex altura-100-porcento flex-direction-column padding-1-5rem">
                        <img
                          className="margem-inferior-0-75rem"
                          src={asset(slide.icon)}
                          width="56"
                          height="56"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="flex-crescer-1">
                          <div className="mb-0-25rem font-size-1-125rem font-weight-700">
                            {slide.title}
                          </div>
                          <div className="margem-inferior-0-75rem text-color-gray-300">
                            {slide.desc}
                          </div>
                        </div>
                        <div className="text-align-right">
                          {slide.href.startsWith("http") ? (
                            <a className={LINK} href={slide.href}>
                              {slide.linkText}
                              <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                                -&gt;
                              </span>
                            </a>
                          ) : (
                            <Link className={LINK} href={slide.href}>
                              {slide.linkText}
                              <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                                -&gt;
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </HighlightGroup>
            </div>
          </div>
          <div className="margem-topo-2rem display-flex justificar-conteudo-fim">
            <button className="carousel-prev zywl-relativo z-index-20 display-flex altura-3rem largura-3rem alinhar-itens-centro justificar-conteudo-centro paredes">
              <span className="sr-only">{t.stats.previous}</span>
              <svg
                className="altura-1rem largura-1rem fill-blue-gray transition-all transition-duration-150ms transition-ease-in-out ca7b4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next zywl-relativo z-index-20 display-flex altura-3rem largura-3rem alinhar-itens-centro justificar-conteudo-centro paredes">
              <span className="sr-only">{t.stats.next}</span>
              <svg
                className="altura-1rem largura-1rem fill-blue-gray transition-all transition-duration-150ms transition-ease-in-out ca7b4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
