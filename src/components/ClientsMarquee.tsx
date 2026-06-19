import { ParticleField } from "@/components/effects/ParticleField";
import { asset } from "@/lib/asset";

const LOGOS = [
  { src: "/src/resources/svg/hypixellogonew-removebg-preview.svg", alt: "Client 01", width: 110, height: 21, className: undefined },
  { src: "/src/resources/svg/cubecraftlogo-removebg-preview.svg", alt: "Client 03", width: 107, height: 33, className: "margem-topo-0-25rem" },
  { src: "/src/resources/svg/mmclogo.svg", alt: "Client 03", width: 107, height: 33, className: "margem-topo-0-25rem" },
  { src: "/src/resources/svg/blocksmclogo-removebg-preview.svg", alt: "Client 03", width: 107, height: 33, className: "margem-topo-0-25rem" },
  { src: "/src/resources/svg/invaldedlands-removebg-preview.svg", alt: "Client 03", width: 107, height: 33, className: "margem-topo-0-25rem" },
];

const MARQUEE_CSS = `
.fdp-marquee{display:flex;width:100%;overflow:hidden;}
.fdp-marquee-track{display:flex;align-items:center;flex-wrap:nowrap;width:max-content;will-change:transform;animation:fdp-marquee-scroll 22s linear infinite;}
.fdp-marquee-item{flex:0 0 auto;margin-right:64px;}
@keyframes fdp-marquee-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@media (prefers-reduced-motion: reduce){.fdp-marquee-track{animation:none;}}
`;

export function ClientsMarquee() {
  // Duplicate the set so the CSS translateX(-50%) loop is perfectly seamless.
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section>
      <div className="zywl-relativo mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="absoluto inserir-0 mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
          <div className="absoluto inserir-0 z-index--10" aria-hidden="true">
            <ParticleField quantity={5} />
          </div>
        </div>
        <div className="padding-top-bottom-3rem padding-vertical-4rem">
          <div className="overflow-hidden">
            <div className="clients-carousel zywl-relativo before-content-pointer-none before-content-absolute before-content-inset-0 before-content-z-index-10 before-content-width-8rem before-content-bg-gradient-right before-content-gradient-from-blue after-content-pointer-none after-content-absolute after-content-inset-0 after-content-left-auto after-content-z-index-10 after-content-width-8rem after-content-bg-gradient-left after-content-gradient-from-dark-blue">
              <style>{MARQUEE_CSS}</style>
              <div className="fdp-marquee selecao-usuario-nenhuma">
                <div className="fdp-marquee-track">
                  {loop.map((logo, i) => (
                    <div
                      key={i}
                      className="fdp-marquee-item"
                      aria-hidden={i >= LOGOS.length ? "true" : undefined}
                    >
                      <img
                        className={logo.className}
                        src={asset(logo.src)}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
