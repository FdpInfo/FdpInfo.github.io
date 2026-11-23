# Build and deployment

Use Node.js 22 from [`.nvmrc`](.nvmrc) and install the locked dependencies.

```bash
npm ci
npm run build
npm run check:assets
```

The build compiles TypeScript and exports the website to `out/`. Serve that directory with a static HTTP server to preview the published output locally. [Workspace setup](docs/WORKSPACE.md).

## GitHub Actions

| Event | Result |
| --- | --- |
| Pull request to `main` | Builds the site and checks the exported asset paths. |
| Push to `main` | Runs the same checks, uploads the Pages artifact, and deploys it. |
| Manual run | Builds the selected branch. Feature branches produce the downloadable `fdpinfo-preview` artifact, and `main` also deploys. |

The repository's Pages source is **GitHub Actions**. The workflow derives `NEXT_PUBLIC_BASE_PATH` from the repository name and `public/CNAME`. User and organization Pages sites and custom domains use the root path. Other project sites use the repository name as a prefix.

[Workflow definition](.github/workflows/deploy.yml) · [Workflow runs](https://github.com/FdpInfo/FdpInfo.github.io/actions/workflows/deploy.yml) · [Published site](https://fdpinfo.github.io/).
