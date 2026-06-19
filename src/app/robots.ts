import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/asset";

// Required for `output: export` — emit a static robots.txt at build time.
export const dynamic = "force-static";

const SITE = `https://fdpinfo.github.io${BASE_PATH}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
