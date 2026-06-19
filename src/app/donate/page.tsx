import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "FDP Client – Donate & Plans",
  description: "Donations and plans for FDP Client are off for now.",
};

export default function DonatePage() {
  return (
    <ComingSoon
      badge="Donate & Plans"
      title="Donations are off for now."
      description="Plans and donations are temporarily disabled while things get rebuilt. Want to support the project or get in touch? Everything lives at lucas-lima.xyz."
      ctaLabel="Go to lucas-lima.xyz"
    />
  );
}
