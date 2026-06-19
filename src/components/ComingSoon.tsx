import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/effects/ParticleField";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { BackHome } from "@/components/BackHome";
import { Footer } from "@/components/Footer";

export type ComingSoonProps = {
  badge: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ComingSoon({
  badge,
  title,
  description,
  ctaLabel = "Visit lucas-lima.xyz",
  ctaHref = "https://lucas-lima.xyz",
}: ComingSoonProps) {
  return (
    <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
      <SecondaryHeader />
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
          <div className="padding-bottom-4rem padding-top-8rem padding-inferior-8rem padding-superior-13rem">
            <div className="mx-auto largura-maxima-48rem text-align-center">
              <div className="margem-inferior-1-5rem" data-aos="fade-down">
                <div className="exibir-inline-flex bg-linear-gradient gradient-from-purple gradient-to-light-purple background-clip-text padding-bottom-0-75rem font-weight-500 text-color-transparent ">
                  {badge}
                </div>
              </div>
              <h1
                className="heading-lg bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent "
                data-aos="fade-down"
              >
                {title}
              </h1>
              <p
                className="margem-inferior-2rem font-size-1-125rem text-color-gray-200"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                {description}
              </p>
              <div
                className="mx-auto largura-maxima-20rem margem-y-1rem media-exibir-inline-flex media-largura-maxima-nenhuma media-centralizar-conteudo media-inverter-espacamento-horizontal media-inverter-espacamento-vertical"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <a
                    className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes"
                    href={ctaHref}
                  >
                    {ctaLabel}{" "}
                    <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                      -&gt;
                    </span>
                  </a>
                </div>
                <div>
                  <BackHome />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
