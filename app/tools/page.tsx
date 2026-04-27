import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/projects";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "DevTools — Peakforge",
  description:
    "A growing collection of small tools and utilities built by Peakforge.",
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-bg">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-accent transition-colors mb-6"
              >
                <span className="text-[11px]">&larr;</span>
                Back to projects
              </Link>
              <p className="text-[13px] font-medium tracking-widest uppercase text-accent mb-3">
                DevTools
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                Small tools, built when off-the-shelf didn&apos;t fit.
              </h1>
              <p className="mt-3 text-text-secondary max-w-lg">
                A growing collection of utilities and planning tools — each shaped around a real workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <ProjectCard key={tool.name} project={tool} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
