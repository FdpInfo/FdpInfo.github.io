import type { Metadata } from "next";
import { DownloadContent } from "./DownloadContent";
import { getMeta, getInjector, getDownloadCount } from "@/lib/community-data";

export const metadata: Metadata = {
  title: "FDP Client – Downloads",
  description: "Download FDP Client – the best free Minecraft cheat client.",
  authors: [{ name: "fdpclient" }],
};

const OFFICIAL = "https://lucas-lima.xyz/archives/fdpclient";

export default async function DownloadPage() {
  const meta = getMeta();
  const injector = getInjector();
  const downloads = await getDownloadCount();
  const build = meta.version.toUpperCase();

  return (
    <DownloadContent
      build={build}
      injectorVersion={injector.version}
      injectorEnabled={injector.enabled}
      downloads={downloads}
      official={OFFICIAL}
    />
  );
}
