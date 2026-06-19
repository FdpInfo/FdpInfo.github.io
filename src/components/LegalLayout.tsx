import type { ReactNode } from "react";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { Footer } from "@/components/Footer";

const H2 =
  "heading-md bg-linear-gradient gradient-from-gray gradient-to-gray gradient-to-gray-0-6 background-clip-text padding-bottom-1rem text-color-transparent";

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className={H2}>{children}</h2>;
}

export function LegalLayout({
  title,
  effective,
  children,
}: {
  title: string;
  effective?: string;
  children: ReactNode;
}) {
  return (
    <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
      <SecondaryHeader />
      <div className="mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem">
        <div className="padding-top-4rem padding-superior-8rem">
          <div className="mx-auto largura-maxima-48rem padding-bottom-3rem text-align-center padding-inferior-5rem">
            <h2 className={`${H2} `}>{title}</h2>
            {effective ? (
              <>
                <p className="text-color-gray-300">
                  <em>{effective}</em>
                </p>
                <br />
              </>
            ) : null}
            {children}
          </div>
        </div>
        <div className="zywl-relativo padding-bottom-3rem padding-inferior-5rem">
          <div
            className="pointer-events-none absoluto inferior-0 esquerda-50 mbb--5rem transladar-x-menos-50porcento opacity-0-5 blur-40px"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs2-a"
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
                fill="url(#bs2-a)"
                fillRule="evenodd"
                d="m346 898 461 369-284 58z"
                transform="translate(-346 -898)"
              />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
