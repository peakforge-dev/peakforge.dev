export interface ProjectEvent {
  /** Display label, e.g. "Sonnenwende '26" */
  title: string;
  /** ISO date string — when the badge becomes visible (announce phase) */
  showFrom: string;
  /** ISO date string — when the event actually starts */
  starts: string;
  /** ISO date string — when the event ends */
  ends: string;
  /** ISO date string — when the badge stops rendering (grace period after end) */
  hideAfter: string;
  /** Click target — App Store Custom Product Page or deep link */
  href: string;
}

/**
 * Text overlay rendered on top of the project thumbnail. Lives as real HTML
 * (not baked into the image) so glyphs stay browser-sharp regardless of card
 * display width.
 */
export interface ProjectOverlay {
  eyebrow?: string;
  stat?: { value: string; unit?: string };
  wordmark?: string;
  tagline?: string;
  /** "light" = light background (default, dark text). "dark" = dark background (cream text). */
  tone?: "light" | "dark";
}

export interface Project {
  name: string;
  category: string;
  description: string;
  status?: string;
  github?: string;
  appStore?: string;
  url?: string;
  icon?: string;
  thumbnail?: string;
  overlay?: ProjectOverlay;
  event?: ProjectEvent;
}

// Defined before `projects` so the DevTools card can show the live tool count.
export const tools: Project[] = [
  {
    name: "PfP",
    category: "Planning Tool",
    description:
      "Pflanzenflächenplanung — Flächen- und Sortimentsplanung für Gartencenter.",
    status: "Active",
    url: "https://pfp.peakforge.dev",
    github: "https://github.com/peakforge-dev/PfP",
  },
  {
    name: "Seedbase",
    category: "Garden Tool",
    description:
      "Saatgut-Datenbank mit lokalen Kulturdaten für das Schweizer Mittelland und optionaler KI-Anreicherung.",
    status: "Active",
    url: "https://seedbase.peakforge.dev",
  },
];

export const projects: Project[] = [
  {
    name: "LuxMaster",
    category: "iOS App",
    description: "Professional light measurement using the iPhone camera.",
    status: "Active",
    github: "https://github.com/peakforge-dev/luxmaster",
    appStore: "https://apps.apple.com/ch/app/luxmaster/id6760295083",
    icon: "/images/icon-luxmaster.png",
    thumbnail: "/images/luxmaster-thumbnail-readable.png",
    overlay: {
      eyebrow: "Tageslicht",
      stat: { value: "12'400", unit: "lx" },
      wordmark: "LuxMaster",
      tagline: "iPhone Light Meter",
    },
    event: {
      title: "Sonnenwende '26",
      showFrom: "2026-06-07T00:00:00+02:00",
      starts: "2026-06-20T00:00:00+02:00",
      ends: "2026-06-22T23:59:59+02:00",
      // Badge disappears as soon as the event ends — no grace period.
      hideAfter: "2026-06-22T23:59:59+02:00",
      href: "https://apps.apple.com/ch/app/luxmaster/id6760295083",
    },
  },
  {
    name: "Legate",
    category: "Companion App",
    description:
      "Companion tool for Travian Kingdoms — timing, coordination, and planning.",
    status: "Active",
    github: "https://github.com/peakforge-dev/legate",
    icon: "/images/icon-legate.png",
    thumbnail: "/images/legate-thumbnail.png",
    overlay: {
      eyebrow: "Defense Call",
      stat: { value: "01:23:45" },
      wordmark: "Legate",
      tagline: "Travian Defense Timing",
      tone: "dark",
    },
  },
  {
    name: "RunSmart",
    category: "Training Tool",
    description: "Practical training planning for endurance athletes.",
    status: "In Development",
    github: "https://github.com/peakforge-dev/runsmart",
    thumbnail: "/images/runsmart-thumbnail.png",
    overlay: {
      eyebrow: "Z2 Pace",
      stat: { value: "5:24", unit: "/km" },
      wordmark: "RunSmart",
      tagline: "Plan. Run. Peak.",
      tone: "dark",
    },
  },
  {
    name: "DevTools",
    category: "Developer Utilities",
    description:
      "A growing collection of small tools for everyday workflows.",
    url: "/tools",
    thumbnail: "/images/devtools-thumbnail.png",
    overlay: {
      eyebrow: "Toolkit",
      stat: { value: String(tools.length), unit: tools.length === 1 ? "tool" : "tools" },
      wordmark: "DevTools",
      tagline: "Everyday utilities",
      tone: "dark",
    },
  },
];

export const siteConfig = {
  name: "Peakforge",
  motto: "Build useful things.",
  description: "Peakforge builds small useful software.",
  github: "https://github.com/peakforge-dev",
  email: "hello@peakforge.dev",
  whatsapp: {
    label: "Message on WhatsApp",
    href: "/whatsapp",
  },
  domain: "peakforge.dev",
} as const;
