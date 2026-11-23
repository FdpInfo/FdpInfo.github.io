# Contributing to FdpInfo

Keep changes focused on the website and describe the pages and user flows they affect. Check desktop and narrow layouts for visual changes, and include screenshots with the pull request.

- Add new public text to the relevant locale dictionaries in [`src/lib/i18n/dictionaries`](../src/lib/i18n/dictionaries).
- Use the [asset helper](../src/lib/asset.ts) for raw public asset URLs so project-site base paths work.
- Run `npm run build` and `npm run check:assets` before opening a pull request.
- Send FDPClient and ZAVZ changes to the projects that own those releases. [FDPClient](https://github.com/SkidderMC/FDPClient) · [ZAVZ](https://github.com/opZywl/Zavz).

[Workspace setup](WORKSPACE.md) · [Build and deployment](../BUILD.md) · [Website license](../LICENSE).
