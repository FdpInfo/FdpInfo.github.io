// Post-build smoke check: scans every built HTML file in out/ for local asset
// references (images, css, js, media) and fails if any reference is missing the
// deploy basePath (would 404 on a project page) or points to a file that does
// not exist. This is exactly the class of bug that shipped the broken
// glow-top.svg before — now CI catches it.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

if (!existsSync(OUT)) {
  console.error(`Asset check: "${OUT}/" not found — run the build first.`);
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const htmlFiles = walk(OUT).filter((f) => f.endsWith(".html"));
const assetRe =
  /(?:src|href)="([^"]+\.(?:svg|png|jpe?g|gif|webp|avif|css|js|mjs|mp4|webm|woff2?|ttf|otf|ico|txt|zip|json))(?:\?[^"]*)?"/g;

const unprefixed = new Set();
const missingFile = new Set();
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = assetRe.exec(html))) {
    const url = m[1];
    if (/^(https?:)?\/\//.test(url) || url.startsWith("data:")) continue;
    if (!url.startsWith("/")) continue; // relative refs are not basePath-sensitive
    checked++;
    if (BASE && !url.startsWith(`${BASE}/`)) {
      unprefixed.add(url);
      continue;
    }
    const path = BASE ? url.slice(BASE.length) : url;
    if (!existsSync(join(OUT, path))) missingFile.add(url);
  }
}

if (unprefixed.size || missingFile.size) {
  if (unprefixed.size) {
    console.error(
      `Asset check FAILED — ${unprefixed.size} reference(s) missing the basePath "${BASE}" (will 404):`
    );
    for (const u of unprefixed) console.error("  " + u);
  }
  if (missingFile.size) {
    console.error(
      `Asset check FAILED — ${missingFile.size} reference(s) point to a missing file:`
    );
    for (const u of missingFile) console.error("  " + u);
  }
  process.exit(1);
}

console.log(
  `Asset check OK — ${checked} local asset reference(s) across ${htmlFiles.length} page(s), 0 broken.`
);
