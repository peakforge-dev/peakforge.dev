export interface Project {
  name: string;
  category: string;
  description: string;
  status?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "LuxMaster",
    category: "iOS App",
    description: "Professional light measurement using the iPhone camera.",
    status: "Active",
    github: "https://github.com/peakforge-dev/luxmaster",
  },
  {
    name: "TravianTimer",
    category: "Coordination Tool",
    description:
      "Timing and coordination tool for alliance defense calls.",
    github: "https://github.com/peakforge-dev/travian-timer",
  },
  {
    name: "RunSmart",
    category: "Training Tool",
    description: "Practical training planning for endurance athletes.",
    status: "In Development",
    github: "https://github.com/peakforge-dev/runsmart",
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
