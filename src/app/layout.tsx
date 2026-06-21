import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { AosInit } from "@/components/effects/AosInit";
import { CommandPalette } from "@/components/CommandPalette";
import { LanguageProvider } from "@/lib/i18n";
import { asset, BASE_PATH } from "@/lib/asset";

// Structured data: identifies the site (WebSite) and the product
// (SoftwareApplication) for rich results. url/downloadUrl point at the root
// origin to match the canonical attribution strategy. No aggregateRating is
// declared to avoid fabricated review snippets (and Google penalties).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://fdpinfo.github.io/#website",
      url: "https://fdpinfo.github.io/",
      name: "FDP Client",
      description:
        "FDP Client — a free and open-source Minecraft Forge injection client.",
    },
    {
      "@type": "SoftwareApplication",
      name: "FDP Client",
      url: "https://fdpinfo.github.io/",
      downloadUrl: "https://fdpinfo.github.io/download",
      applicationCategory: "GameApplication",
      operatingSystem: "Windows, macOS, Linux",
      image: `https://fdpinfo.github.io${BASE_PATH}/src/resources/png/fdp_gui.png`,
      description:
        "Unbeatable Minecraft cheat. Dominate 1.8.9, 1.12.2 or 1.19.4 with unmatched features.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

export const metadata: Metadata = {
  // Canonical/OG intentionally point at the root origin (not the /next deploy)
  // so the established fdpinfo.github.io site stays the authoritative URL for
  // this content in search engines.
  metadataBase: new URL("https://fdpinfo.github.io"),
  title: "FDP Client Minecraft Cheating Solution | 1.8 - 1.8.9-1.20.1",
  description:
    "A replacement of LiquidBounce because CCBlueX gave up supporting 1.8.9! - Unbeatable Minecraft cheat! Dominate 1.8.9, 1.12.2 or 1.19.4 with unmatched features surpassing all competitors.",
  authors: [{ name: "fdpclient" }],
  keywords:
    "FDPCLIENT, fdp, opensource, free, hacked client, rise client, getfdp.today, fdpclient.club, minecraft, client, FDPclient github, fdp client github, minecraft client, FDPclient download, minecraft hacked client, minecraft hacked client free, minecraft hacked client download, best minecraft hacked client, minecraft hacked clients, opensource",
  icons: { icon: asset("/src/resources/png/fdp.png") },
  verification: { google: "zIob_IgP8UHBnHw9DxB9_RLmed3v9V3VEq5bmpicejA" },
  openGraph: {
    title: "FDPCLIENT",
    description:
      "Unbeatable Minecraft cheat! Dominate 1.8.9, 1.12.2 or 1.19.4 with unmatched features surpassing all competitors.",
    url: "https://fdpinfo.github.io",
    siteName: "FDP Client",
    type: "website",
    images: [
      {
        url: asset("/src/resources/png/fdp_gui.png"),
        width: 504,
        height: 400,
        alt: "FDP Client",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FDPCLIENT",
    description:
      "Unbeatable Minecraft cheat! Dominate 1.8.9, 1.12.2 or 1.19.4 with unmatched features surpassing all competitors.",
    images: [asset("/src/resources/png/fdp_gui.png")],
  },
};

export const viewport: Viewport = {
  // Allow pinch-to-zoom on mobile (WCAG 1.4.4 / 1.4.10). The original site
  // locked zoom with maximum-scale=1 + user-scalable=no, which blocks low-vision
  // users from zooming; we keep the layout identical but re-enable zoom.
  width: "device-width",
  initialScale: 1,
};

const STYLESHEETS = [
  "/src/css/aos.css",
  "/src/css/swiper-bundle.min.css",
  "/src/css/style.css",
  "/src/css/popup.css",
  "/src/css/command-palette.css",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-color-rgb font-family-inter letter-spacing-negative-0-01em text-color-to-gray-50 font-smoothing-antialiased">
        {/* React 19 hoists these <link rel="stylesheet"> into <head> and keeps
            insertion order within a precedence, matching the original load
            order (aos → swiper → style → popup). Served verbatim from /public
            so the relative url() refs inside the CSS still resolve. */}
        {STYLESHEETS.map((href) => (
          <link
            key={href}
            rel="stylesheet"
            href={asset(href)}
            precedence="default"
          />
        ))}
        <style>{`.discount-tag{position:absolute;top:-0.2rem;right:-0.1rem;font-size:0.75rem;padding:0.25rem 0.5rem;border-radius:2px;color:rgb(101, 227, 101);}`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <LanguageProvider>
          {children}
          <CommandPalette />
        </LanguageProvider>
        <AosInit />
        {/* Google Analytics loads for every visitor so traffic is always detected. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3QHFR8NBFS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3QHFR8NBFS');`}
        </Script>
      </body>
    </html>
  );
}
