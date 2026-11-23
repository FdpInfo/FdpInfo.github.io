# Setting up a workspace

Use Node.js 22, specified in [`.nvmrc`](../.nvmrc), and npm.

```bash
git clone https://github.com/FdpInfo/FdpInfo.github.io.git
cd FdpInfo.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the language switcher or append `?lang=pt` to open the Portuguese version.

Before submitting a change, run `npm run build` and `npm run check:assets`. [Build and deployment](../BUILD.md).
