import type { Metadata } from "next";
import { getMeta, GITHUB_RELEASES, GITHUB_ISSUE_NEW } from "@/lib/community-data";
import { CommunityContent } from "./CommunityContent";

export const metadata: Metadata = {
  title: "FDP Client – Community",
  description:
    "Join the FDP Client community on Discord, follow the changelog and support the project.",
};

export default function CommunityPage() {
  const meta = getMeta();

  return (
    <CommunityContent
      discord={meta.discord}
      githubReleases={GITHUB_RELEASES}
      githubIssueNew={GITHUB_ISSUE_NEW}
    />
  );
}
