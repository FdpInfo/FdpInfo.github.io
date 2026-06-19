import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/asset";

// Required for `output: export` — emit a static sitemap.xml at build time.
export const dynamic = "force-static";

// Lists the real (crawlable) deployment URLs so search engines can discover
// every page. Each page's canonical still points at the root origin, which is
// the intended attribution target.
const SITE = `https://fdpinfo.github.io${BASE_PATH}`;

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "download", priority: 0.9 },
  { path: "community", priority: 0.7 },
  { path: "changelogs", priority: 0.7 },
  { path: "donate", priority: 0.6 },
  { path: "privacy", priority: 0.3 },
  { path: "tos", priority: 0.3 },
  { path: "terms", priority: 0.3 },
  { path: "refund", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: path ? `${SITE}/${path}/` : `${SITE}/`,
    changeFrequency: "weekly",
    priority,
  }));
}
