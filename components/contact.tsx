import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg">
          <p className="text-[13px] font-medium tracking-widest uppercase text-accent mb-3">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text mb-4">
            Get in touch
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10">
            Questions, ideas, or project inquiries — always happy to hear from
            you.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-bg-subtle transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-bg-subtle border border-border flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-medium text-text">Email</p>
                <p className="text-[13px] text-text-secondary">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-bg-subtle transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-bg-subtle border border-border flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-medium text-text">GitHub</p>
                <p className="text-[13px] text-text-secondary">
                  peakforge-dev
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
