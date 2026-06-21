"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { DownloadLink } from "@/components/DownloadLink";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer>
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="exibir-grade espacamento-2rem padding-top-bottom-2rem media-grade-modelo-colunas-12 padding-vertical-3rem">
          <div className="ordem-1 media-coluna-grade-abranger-12 media-ordem-normal media-abranger-coluna-grade-4">
            <div className="display-flex  altura-100-porcento flex-direction-column justificar-conteudo-espaco-entre media-flex-linha-horizontal media-flex-coluna-vertical">
              <div className="margem-inferior-1rem media-margem-inferior-0px">
                <div className="margem-inferior-1rem">
                  <Link className="exibir-bloco" href="/" aria-label={t.footer.logoAriaLabel}>
                    <img
                      src={asset("/src/resources/png/fdp.png")}
                      width="60"
                      height="60"
                      alt={t.footer.logoAlt}
                    />
                  </Link>
                </div>
                <div className="font-size-0-875rem text-color-gray-200">
                  © {new Date().getFullYear()} fdpclient{" "}
                  <span className="text-color-gray-600">·</span> {t.footer.copyright}{" "}
                  <a
                    className="text-color-gray-50 transition-all transition-duration-150ms transition-ease-in-out hover-text-white"
                    href="https://lucas-lima.xyz"
                  >
                    {t.footer.author}
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              {t.footer.products}
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <DownloadLink className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray">
                  {t.footer.download}
                </DownloadLink>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/donate"
                >
                  {t.footer.donatePlans}
                </Link>
              </li>
              <li>
                <a
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/next/changelogs/"
                >
                  {t.footer.changelog}
                </a>
              </li>
            </ul>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              {t.footer.resources}
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/community"
                >
                  {t.footer.community}
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/tos"
                >
                  {t.footer.tos}
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/community"
                >
                  {t.footer.reportBug}
                </Link>
              </li>
            </ul>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              {t.footer.legals}
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/refund"
                >
                  {t.footer.refund}
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/terms"
                >
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/privacy"
                >
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
