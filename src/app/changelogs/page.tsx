import type { Metadata } from "next";
import { ChangelogsContent } from "./ChangelogsContent";
import {
  getChangelog,
  getKnownIssues,
  getMeta,
  GITHUB_RELEASES,
} from "@/lib/community-data";

export const metadata: Metadata = {
  title: "FDP Client – Changelog & Release Notes",
  description:
    "The full FDP Client changelog and known issues for every release, newest first.",
};

export default function ChangelogsPage() {
  const changelog = getChangelog();
  const issues = getKnownIssues();
  const meta = getMeta();
  const totalChanges = changelog.reduce((n, v) => n + v.items.length, 0);

  return (
    <ChangelogsContent
      changelog={changelog}
      issues={issues}
      meta={meta}
      totalChanges={totalChanges}
      githubReleases={GITHUB_RELEASES}
    />
  );
}
