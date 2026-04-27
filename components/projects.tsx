import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const isInternal = (url: string) => url.startsWith("/");

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-border rounded-lg overflow-hidden bg-bg hover:border-border/80 transition-colors">
      {/* Project visual */}
      <div className="aspect-[16/10] border-b border-border relative overflow-hidden">
        {project.icon ? (
          <Image
            src={project.icon}
            alt={`${project.name} icon`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-bg-subtle flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg border border-border bg-bg flex items-center justify-center">
              <span className="text-[18px] font-semibold text-text-muted select-none">
                {project.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
            {project.category}
          </span>
          {project.status && (
            <>
              <span className="text-text-muted/40" aria-hidden="true">·</span>
              <span className="text-[11px] font-medium text-accent/80">
                {project.status}
              </span>
            </>
          )}
        </div>
        <h3 className="text-[16px] font-semibold text-text mb-1.5">
          {project.name}
        </h3>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center gap-4 mt-3">
          {project.url && (
            isInternal(project.url) ? (
              <Link
                href={project.url}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Open
                <span className="text-[11px]">&rarr;</span>
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Open
                <span className="text-[11px]">&#x2197;</span>
              </a>
            )
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-hover transition-colors"
            >
              App Store
              <span className="text-[11px]">&#x2197;</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-accent transition-colors"
            >
              GitHub
              <span className="text-[11px]">&#x2197;</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[13px] font-medium tracking-widest uppercase text-accent mb-3">
            Projects
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
            Selected work
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg">
            A mix of apps, tools, and utilities — each built to solve a real problem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
