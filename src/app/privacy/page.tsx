import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "FDP Client Privacy Policy",
  alternates: { canonical: "https://fdpinfo.github.io/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
