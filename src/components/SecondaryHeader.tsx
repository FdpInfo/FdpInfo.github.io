import Link from "next/link";
import { asset } from "@/lib/asset";
import { BackHome } from "@/components/BackHome";
import { SearchTrigger } from "@/components/SearchTrigger";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SecondaryHeader() {
  return (
    <header className="absoluto z-index-30 largura-100porcento">
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="display-flex altura-4rem alinhar-itens-centro justificar-conteudo-espaco-entre media-altura-5-rem">
          <div className="margem-direita-1rem flex-encolher-0">
            <Link className="exibir-bloco" href="/" aria-label="fdp">
              <img
                src={asset("/src/resources/png/fdp.png")}
                width="80"
                height="80"
                alt="minecraft hacked client fdp"
              />
            </Link>
          </div>
          <nav className="display-flex flex-crescer-1">
            <ul className="display-flex flex-crescer-1 flex-enrolar alinhar-itens-centro justificar-conteudo-fim">
              <li className="display-flex alinhar-itens-centro margem-direita-1-5rem">
                <SearchTrigger />
              </li>
              <li className="display-flex alinhar-itens-centro margem-direita-1-5rem">
                <LanguageSwitcher />
              </li>
              <li>
                <BackHome />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
