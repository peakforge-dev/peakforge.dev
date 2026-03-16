import Image from "next/image";
import { siteConfig } from "@/lib/data";

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between max-w-6xl mx-auto px-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-px h-full bg-border-subtle" />
        ))}
      </div>
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-full h-px bg-border-subtle" />
        ))}
      </div>
      {/* Subtle accent dot */}
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-accent/20" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-accent/15" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-bg">
      <GridPattern />
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo-icon-256.png"
              alt=""
              width={256}
              height={256}
              className="w-7 h-7 sm:w-8 sm:h-8 logo-adapt"
            />
            <p className="text-[13px] font-medium tracking-widest uppercase text-accent">
              {siteConfig.name}
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-text">
            Build useful things.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center h-10 px-6 text-[14px] font-medium rounded-md bg-text text-bg hover:bg-text/90 transition-colors"
            >
              View projects
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-10 px-6 text-[14px] font-medium rounded-md border border-border text-text hover:bg-bg-subtle transition-colors"
            >
              GitHub
              <span className="ml-1.5 text-[11px] text-text-muted">&#x2197;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
