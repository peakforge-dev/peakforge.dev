export interface Project {
  name: string;
  category: string;
  description: string;
  status?: string;
}

export const projects: Project[] = [
  {
    name: "LuxMaster",
    category: "iOS App",
    description: "Professional light measurement using the iPhone camera.",
    status: "Active",
  },
  {
    name: "TravianTimer",
    category: "Coordination Tool",
    description:
      "Timing and coordination tool for alliance defense calls.",
  },
  {
    name: "RunSmart",
    category: "Training Tool",
    description: "Practical training planning for endurance athletes.",
    status: "In Development",
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
  description:
    "Independent software studio building simple apps and useful tools.",
  github: "https://github.com/peakforge-dev",
  email: "hello@peakforge.dev",
  domain: "peakforge.dev",
} as const;
