import Link from "next/link";
import { asset } from "@/lib/asset";
import { ChangelogLink } from "@/components/ChangelogLink";
import { DownloadLink } from "@/components/DownloadLink";
import { GITHUB_RELEASES } from "@/lib/community-data";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="exibir-grade espacamento-2rem padding-top-bottom-2rem media-grade-modelo-colunas-12 padding-vertical-3rem">
          <div className="ordem-1 media-coluna-grade-abranger-12 media-ordem-normal media-abranger-coluna-grade-4">
            <div className="display-flex  altura-100-porcento flex-direction-column justificar-conteudo-espaco-entre media-flex-linha-horizontal media-flex-coluna-vertical">
              <div className="margem-inferior-1rem media-margem-inferior-0px">
                <div className="margem-inferior-1rem">
                  <Link className="exibir-bloco" href="/" aria-label="FDP">
                    <img
                      src={asset("/src/resources/png/fdp.png")}
                      width="60"
                      height="60"
                      alt="fdp"
                    />
                  </Link>
                </div>
                <div className="font-size-0-875rem text-color-gray-200">
                  © {new Date().getFullYear()} fdpclient{" "}
                  <span className="text-color-gray-600">·</span> lucas-lima.xyz.
                  All rights reserved. Designed &amp; developed by{" "}
                  <a
                    className="text-color-gray-50 transition-all transition-duration-150ms transition-ease-in-out hover-text-white"
                    href="https://lucas-lima.xyz"
                  >
                    lucsp.lima (aka Zywl)
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              Products
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <DownloadLink className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray">
                  Download
                </DownloadLink>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/donate"
                >
                  Donate &amp; Plans
                </Link>
              </li>
              <li>
                <ChangelogLink
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  releases={GITHUB_RELEASES}
                >
                  Changelog
                </ChangelogLink>
              </li>
            </ul>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              Resources
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/community"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/tos"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/community"
                >
                  Report a bug
                </Link>
              </li>
            </ul>
          </div>
          <div className="media-coluna-grade-abranger-6 media-abranger-coluna-grade-3 media-abranger-coluna-grade-2">
            <h6 className="mb-0-5rem font-size-0-875rem font-weight-500 text-color-gray-50">
              Legals
            </h6>
            <ul className="margem-y-0-5rem font-size-0-875rem">
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/refund"
                >
                  Refund policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/terms"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-color-gray-300 transition-all transition-duration-150ms transition-ease-in-out hover-text-gray"
                  href="/privacy"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
