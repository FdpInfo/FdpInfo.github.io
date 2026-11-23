# Architecture

FdpInfo uses Next.js App Router, React, and TypeScript. Next.js exports the site as static files in `out/` for GitHub Pages.

| Path | Responsibility |
| --- | --- |
| [`src/app`](../src/app) | Routes, page metadata, and page-specific UI. |
| [`src/components`](../src/components) | Shared layout, sections, navigation, and interactions. |
| [`src/lib`](../src/lib) | Locales, URLs, build metadata, and other shared utilities. |
| [`public`](../public) | Static assets included in the exported site. |
| [`scripts/check-assets.mjs`](../scripts/check-assets.mjs) | Checks local references in the exported HTML and stylesheets. |

The site reads download metadata and SHA-256 checksums from the build service in the browser. Project repositories track releases and implementation. [Download page](https://fdpinfo.github.io/download/) · [FDPClient](https://github.com/SkidderMC/FDPClient) · [ZAVZ](https://github.com/opZywl/Zavz).
