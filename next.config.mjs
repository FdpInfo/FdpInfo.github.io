const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the whole thing (React, TS, client components, Swiper,
  // AOS, particle canvas) runs on GitHub Pages with no server.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  // Hide the Next.js dev indicator badge ("N") in the corner during `next dev`.
  devIndicators: false,
  images: { unoptimized: true },
  // Set automatically by the deploy workflow (e.g. "/repo-name"). basePath also
  // prefixes the framework's own /_next assets; raw public assets use asset().
  basePath: basePath || undefined,
  eslint: {
    // The port keeps the original markup verbatim (raw <img>, exact class names),
    // so we don't want lint stylistic rules to block production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
