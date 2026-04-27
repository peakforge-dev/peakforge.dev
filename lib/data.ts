export interface Project {
  name: string;
  category: string;
  description: string;
  status?: string;
  github?: string;
  appStore?: string;
  url?: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    name: "LuxMaster",
    category: "iOS App",
    description: "Professional light measurement using the iPhone camera.",
    status: "Active",
    github: "https://github.com/peakforge-dev/luxmaster",
    appStore: "https://apps.apple.com/ch/app/luxmaster/id6760295083",
    icon: "/images/icon-luxmaster.png",
  },
  {
    name: "Legate",
    category: "Companion App",
    description:
      "Companion tool for Travian Kingdoms — timing, coordination, and planning.",
    status: "Active",
    github: "https://github.com/peakforge-dev/legate",
    icon: "/images/icon-legate.png",
  },
  {
    name: "RunSmart",
    category: "Training Tool",
    description: "Practical training planning for endurance athletes.",
    status: "In Development",
    github: "https://github.com/peakforge-dev/runsmart",
  },
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
    name: "DevTools",
    category: "Developer Utility",
    description:
      "Small automation utilities for fast and reliable workflows.",
  },
];

export const siteConfig = {
  name: "Peakforge",
  motto: "Build useful things.",
  description: "Peakforge builds small useful software.",
  github: "https://github.com/peakforge-dev",
  email: "hello@peakforge.dev",
  domain: "peakforge.dev",
} as const;
