import type { Metadata } from "next";
import { RefundContent } from "./RefundContent";

export const metadata: Metadata = {
  title: "FDP Client Refund Policy",
  alternates: { canonical: "https://fdpinfo.github.io/refund" },
};

export default function RefundPage() {
  return <RefundContent />;
}
