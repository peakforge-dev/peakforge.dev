import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-border rounded-lg overflow-hidden bg-bg hover:border-border/80 transition-colors">
      {/* Visual placeholder */}
      <div className="aspect-[16/10] bg-bg-subtle border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-lg border border-border bg-bg flex items-center justify-center">
            <span className="text-[18px] font-semibold text-text-muted select-none">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${project.name}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${project.name})`} />
          </svg>
        </div>
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
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[13px] text-text-muted hover:text-accent transition-colors"
          >
            GitHub
            <span className="text-[11px]">&#x2197;</span>
          </a>
        )}
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
