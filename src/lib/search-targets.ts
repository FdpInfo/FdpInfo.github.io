// Navigation destinations for the centered command palette (Ctrl/Cmd+K).
// Plain data only (no fs) so it is safe to import from client components.
// External URLs are kept in sync with src/lib/community-data.ts.

export type SearchGroup = "Pages" | "Sections" | "Links";

export type SearchTarget = {
  label: string;
  href: string; // internal route, homepage anchor ("/#id"), or external URL
  hint: string; // short context shown on the right
  keywords: string; // extra terms to make matching forgiving
  group: SearchGroup;
  external?: boolean;
};

const GITHUB_RELEASES = "https://github.com/SkidderMC/FDPClient/releases";
const GITHUB_REPO = "https://github.com/SkidderMC/FDPClient/";
const GITHUB_ISSUE_NEW = "https://github.com/SkidderMC/FDPClient/issues/new";
const DISCORD = "https://discord.gg/3XRFGeqEYD";

export const SEARCH_TARGETS: SearchTarget[] = [
  // Pages
  { group: "Pages", label: "Home", href: "/", hint: "Page", keywords: "start landing main inicio principal" },
  { group: "Pages", label: "Download", href: "/download/", hint: "Page", keywords: "get install baixar beta build latest setup injector" },
  { group: "Pages", label: "Community", href: "/community/", hint: "Page", keywords: "discord members hub social join" },
  { group: "Pages", label: "Changelogs", href: "/changelogs/", hint: "Page", keywords: "updates versions notes releases history known issues bugs" },
  { group: "Pages", label: "Donate & Plans", href: "/donate/", hint: "Page", keywords: "support pricing plans buy money pay" },
  { group: "Pages", label: "Privacy policy", href: "/privacy/", hint: "Legal", keywords: "gdpr data cookies legal" },
  { group: "Pages", label: "Terms of Service", href: "/tos/", hint: "Legal", keywords: "tos legal rules agreement" },
  { group: "Pages", label: "Terms & Conditions", href: "/terms/", hint: "Legal", keywords: "conditions legal rules agreement" },
  { group: "Pages", label: "Refund policy", href: "/refund/", hint: "Legal", keywords: "money back chargeback legal refund" },

  // Homepage sections
  { group: "Sections", label: "Features", href: "/#features", hint: "Home section", keywords: "tabs capabilities personalisable configurable" },
  { group: "Sections", label: "What is FDP?", href: "/#what-is-fdp", hint: "Home section", keywords: "about info intro explanation" },
  { group: "Sections", label: "Showcase", href: "/#showcase", hint: "Home section", keywords: "video preview demo gallery" },
  { group: "Sections", label: "Statistics", href: "/#statistics", hint: "Home section", keywords: "stats numbers metrics downloads users" },
  { group: "Sections", label: "Pricing", href: "/#pricing", hint: "Home section", keywords: "plans price cost buy free" },
  { group: "Sections", label: "Reviews", href: "/#reviews", hint: "Home section", keywords: "testimonials feedback quotes customers" },

  // External links
  { group: "Links", label: "GitHub releases", href: GITHUB_RELEASES, hint: "GitHub", keywords: "downloads builds tags versions", external: true },
  { group: "Links", label: "Source code", href: GITHUB_REPO, hint: "GitHub", keywords: "repo repository open source code", external: true },
  { group: "Links", label: "Report a bug", href: GITHUB_ISSUE_NEW, hint: "GitHub", keywords: "issue problem error squash new ticket", external: true },
  { group: "Links", label: "Discord server", href: DISCORD, hint: "External", keywords: "chat community invite join", external: true },
];

export const GROUP_ORDER: SearchGroup[] = ["Pages", "Sections", "Links"];
