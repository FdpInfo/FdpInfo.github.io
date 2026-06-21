import type { Metadata } from "next";
import { DonateContent } from "./DonateContent";

export const metadata: Metadata = {
  title: "FDP Client – Donate & Plans",
  description: "Donations and plans for FDP Client are off for now.",
};

export default function DonatePage() {
  return <DonateContent />;
}
