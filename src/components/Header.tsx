import Link from "next/link";
import { asset } from "@/lib/asset";
import { SearchTrigger } from "@/components/SearchTrigger";

export function Header() {
  return (
    <header className="absoluto z-index-30 largura-100porcento">
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="display-flex altura-4rem alinhar-itens-centro justificar-conteudo-espaco-entre media-altura-5-rem">
          <div className="margem-direita-1rem flex-encolher-0">
            <a className="exibir-bloco" href="#0" aria-label="fdp">
              <img
                src={asset("/src/resources/png/fdp.png")}
                width="80"
                height="80"
                alt="minecraft hacked client fdp"
              />
            </a>
          </div>
          <nav className="display-flex flex-crescer-1">
            <ul className="display-flex flex-crescer-1 flex-enrolar alinhar-itens-centro justificar-conteudo-fim">
              <li className="display-flex alinhar-itens-centro">
                <SearchTrigger />
              </li>
              <li className="margem-esquerda-1-5rem">
                <Link
                  className="font-size-0-875rem font-weight-500 text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out hover-text-white"
                  href="/community"
                >
                  Discord
                </Link>
              </li>
              <li className="margem-esquerda-1-5rem">
                <Link
                  className="button-secondary zywl-relativo largura-100porcento text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-gray-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-3 hover-text-white paredes"
                  href="/donate"
                >
                  <span className="zywl-relativo exibir-inline-flex alinhar-itens-centro">
                    {" "}
                    Donate Now!{" "}
                    <span className="margem-esquerda-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
