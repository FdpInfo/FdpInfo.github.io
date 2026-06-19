import { ParticleField } from "@/components/effects/ParticleField";
import { DownloadLink } from "@/components/DownloadLink";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
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
              <div className="zywl-relativo exibir-inline-flex before-content-absolute before-content-inset-0 before-content-bg-purple before-content-filter-blur-12px">
                <DownloadLink
                  className="button-secondary zywl-relativo largura-100porcento text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-purple-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-5 hover-text-white paredes"
                >
                  <span className="zywl-relativo exibir-inline-flex alinhar-itens-centro">
                    {" "}
                    Download Latest Beta Now{" "}
                    <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                      -&gt;
                    </span>
                  </span>
                </DownloadLink>
              </div>
            </div>
            <h1
              className="heading-lg bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent "
              data-aos="fade-down"
            >
              FDP Client.The best Minecraft cheating solution.
            </h1>
            <p
              className="margem-inferior-2rem font-size-1-125rem text-color-gray-200"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              A FREE &amp; OPEN-SOURCE FORGE INJECTION CLIENT.
            </p>
            <div
              className="mx-auto largura-maxima-20rem margem-y-1rem media-exibir-inline-flex media-largura-maxima-nenhuma media-centralizar-conteudo media-inverter-espacamento-horizontal media-inverter-espacamento-vertical"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <DownloadLink
                  className="button-primary largura-100porcento bg-linear-gradient gradient-from-white gradient-to-white gradient-to-white-0-8 text-color-gray-900 transition-all transition-duration-150ms transition-ease-in-out hover-bg-white paredes"
                >
                  {" "}
                  Download now!{" "}
                  <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                    -&gt;
                  </span>
                </DownloadLink>
              </div>
              <div>
                <a
                  className="button-primary largura-100porcento bg-color-rgb bg-opacity-0-25 text-color-gray-100 transition-all transition-duration-150ms transition-ease-in-out hover-bg-opacity-0-3 hover-text-white"
                  href="https://github.com/SkidderMC/FDPClient/"
                >
                  <svg
                    className="margem-direita-0-75rem flex-encolher-0 fill-light-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
