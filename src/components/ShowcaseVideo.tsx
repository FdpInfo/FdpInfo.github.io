import { HighlightGroup } from "@/components/effects/HighlightGroup";
import { asset } from "@/lib/asset";

export function ShowcaseVideo() {
  return (
    <section id="showcase" className="zywl-relativo">
      <div
        className="pointer-events-none absoluto esquerda-50 topo-0 z-index--10 transladar-x-menos-50porcento transladar-y-menos-25porcento opacity-0-5 blur-40px"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs3-a"
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
            fill="url(#bs3-a)"
            fillRule="evenodd"
            d="m410 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 -410 427)"
          />
        </svg>
      </div>
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="border-bottom-width-1px border-color-rgb-30-41-59 padding-bottom-3rem padding-top-4rem padding-inferior-5rem padding-superior-8rem">
          <div className="mx-auto largura-maxima-48rem padding-bottom-3rem text-align-center padding-inferior-5rem">
            <h2 className="heading-md bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent ">
              Wanna take a look?
            </h2>
            <p className="font-size-1-125rem text-color-gray-300">
              This is FDP -&gt;
            </p>
          </div>
          <div className="mx-auto largura-maxima-48rem">
            <div data-aos="fade-down">
              <HighlightGroup className="paredes">
                <div className="zywl-relativo overflow-hidden border-radius-1-5rem bg-color-rgb-30-41-59 padding-1px before-content-pointer-none before-content-absolute before-content-left-12rem before-content-top-12rem before-content-z-index-30 before-content-height-24rem before-content-width-24rem before-content-transform-mouse-x before-content-transform-mouse-y before-content-border-radius-9999px before-content-bg-purple before-content-opacity-0 before-content-filter-blur-100px before-content-transition-opacity before-content-transition-duration-500ms after-content-absolute after-content-inset-0 after-content-z-index-10 after-content-border-radius-inherit after-content-opacity-0 after-content-transition-opacity after-content-transition-duration-500ms after-content-radial-gradient hover-before-opacity-0-2 cahiq">
                  <div className="zywl-relativo z-index-20 altura-100-porcento overflow-hidden border-radius-inherit bg-color-rgb">
                    <div
                      className="pointer-events-none absoluto inferior-0 esquerda-50 z-index--10 proporcao-aspecto-1-1 largura-50-porcento transladar-x-menos-50porcento transladar-y-50porcento"
                      aria-hidden="true"
                    >
                      <div className="transform-translateZ absoluto inserir-0 border-radius-9999px bg-color-rgb-168-85-247 blur-120px"></div>
                    </div>
                    <video width="768" height="400" controls>
                      <source
                        src={asset("/src/resources/video/video.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </HighlightGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
