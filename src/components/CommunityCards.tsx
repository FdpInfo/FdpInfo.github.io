"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const DISCORD_PATH =
  "M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419Z";

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="hub-ico" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </span>
  );
}

function CardBody({
  icon,
  title,
  desc,
  cta,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <>
      {icon}
      <span className="hub-title">{title}</span>
      <span className="hub-desc">{desc}</span>
      <span className="hub-link">
        {cta} <span className="arr">-&gt;</span>
      </span>
    </>
  );
}

export function CommunityCards({
  discord,
  githubReleases,
  githubIssueNew,
}: {
  discord: string;
  githubReleases: string;
  githubIssueNew: string;
}) {
  const openInNewTab = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="hub-grid">
      {/* Discord */}
      <a className="hub-card" href={discord}>
        <CardBody
          icon={
            <Icon>
              <path d={DISCORD_PATH} transform="scale(0.66)" />
            </Icon>
          }
          title="Join our Discord"
          desc="Chat with the community, get help and talk to the devs in real time."
          cta="Open Discord"
        />
      </a>

      {/* Changelog — opens the in-site changelog AND the GitHub releases */}
      <Link
        className="hub-card"
        href="/changelogs"
        onClick={() => openInNewTab(githubReleases)}
      >
        <CardBody
          icon={
            <Icon>
              <path d="M4 0h6l4 4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm5 1.5V4a1 1 0 0 0 1 1h2.5L9 1.5ZM5 8h6v1.5H5V8Zm0 3h6v1.5H5V11Z" />
            </Icon>
          }
          title="Changelog & releases"
          desc="Opens the full in-site changelog and the GitHub releases in a new tab."
          cta="View changelog & GitHub"
        />
      </Link>

      {/* Report a bug — opens a new GitHub issue */}
      <a
        className="hub-card"
        href={githubIssueNew}
        target="_blank"
        rel="noreferrer"
      >
        <CardBody
          icon={
            <Icon>
              <path d="M8 0a3 3 0 0 1 2.83 2H12a1 1 0 1 1 0 2h-.05A4 4 0 0 1 12 5v1h2a1 1 0 1 1 0 2h-2v1a4 4 0 0 1-.05.55l.05.45h2a1 1 0 1 1 0 2h-1.17A3 3 0 0 1 8 16a3 3 0 0 1-2.83-2H4a1 1 0 1 1 0-2h2v-1a4 4 0 0 1 .05-.55L6 10H4a1 1 0 1 1 0-2h2V7a4 4 0 0 1 .05-.55L6 6H4.05A1 1 0 0 1 4 4h1.17A3 3 0 0 1 8 0Zm-1 8v3a1 1 0 1 0 2 0V8a1 1 0 1 0-2 0Z" />
            </Icon>
          }
          title="Report a bug"
          desc="Hit an issue? Open a ticket on GitHub so we can track and squash it fast."
          cta="Open a GitHub issue"
        />
      </a>

      {/* Support */}
      <Link className="hub-card" href="/donate">
        <CardBody
          icon={
            <Icon>
              <path d="M8 14.25.91 7.66A4 4 0 0 1 6.6 2.1L8 3.43 9.4 2.1a4 4 0 0 1 5.69 5.56L8 14.25Z" />
            </Icon>
          }
          title="Support the project"
          desc="FDP is free — donations keep it alive and unlock exclusive capes."
          cta="Donate"
        />
      </Link>
    </div>
  );
}
