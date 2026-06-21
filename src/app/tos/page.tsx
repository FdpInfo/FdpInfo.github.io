import type { Metadata } from "next";
import { TosContent } from "./TosContent";

export const metadata: Metadata = {
  title: "FDP Terms of Service",
  alternates: { canonical: "https://fdpinfo.github.io/tos" },
};

export default function TosPage() {
  return <TosContent />;
}
