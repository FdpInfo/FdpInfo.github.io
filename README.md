# FDP Client — Official Website

The official website for **FDP Client**, the free and open-source Minecraft Forge
injection client. Built with **Next.js 15 + React 19 + TypeScript** (App Router) and
shipped as a fully static export, so it runs on GitHub Pages with no server while
keeping React, TypeScript, Swiper, AOS, the particle canvas and Google Analytics all
working client-side.

Live site: **https://fdpinfo.github.io/next/**

## Pages

- `/` — home (hero, logo marquee, feature tabs, "What is FDP?", showcase, statistics, pricing, reviews)
- `/download` — download page with live download count and an auto-redirect toast (with a Stop button)
- `/community` — community hub (Discord, releases, report a bug)
- `/changelogs` — full changelog and known-issues hub; also opens the GitHub releases page
- `/donate` — donations & plans
- `/privacy` — privacy policy
- `/tos` — terms of service
- `/terms` — terms & conditions
- `/refund` — refund policy

A centered **command palette** (open with `Ctrl`/`Cmd + K`, `/`, or the header search
button) lets visitors jump to any page or home section instantly. Every secondary page
has a **Back to home** button, and the whole site is responsive and mobile-friendly.

## Development

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # static export into out/
```

## Deployment (GitHub Pages)

The site is exported as a 100% static bundle (`output: 'export'` → `out/`). Pushing to
`main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds and publishes automatically.

1. In **Settings → Pages**, set **Source: GitHub Actions**.
2. Push to `main` — the workflow builds and deploys.

The `basePath` is detected automatically: a `<user>.github.io` repo (or a custom domain
via `public/CNAME`) is served from the root, while a project repo is served from
`/<repo>` and every asset is prefixed accordingly through the `asset()` helper.

## Credits

Designed & developed by **lucsp.lima (aka Zywl)** — https://lucas-lima.xyz

## License

Proprietary — © 2026 lucas-lima.xyz (Lucas Lima / Zywl). All rights reserved. This repository is
publicly viewable for reference only; no permission is granted to copy, reuse,
redistribute, or deploy it without written permission. See [LICENSE](LICENSE) for the
full terms. For requests, contact https://lucas-lima.xyz.
