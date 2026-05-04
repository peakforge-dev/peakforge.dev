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
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[#25D366]/40 hover:bg-bg-subtle transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-bg-subtle border border-border flex items-center justify-center text-text-muted group-hover:text-[#25D366] transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.49A11.84 11.84 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.09.55 4.14 1.59 5.94L.12 24l6.32-1.66a11.88 11.88 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.16-3.47-8.41Zm-8.42 18.29h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.22-3.75.99 1-3.65-.24-.37a9.82 9.82 0 0 1-1.5-5.27C2.22 6.43 6.65 2 12.11 2a9.86 9.86 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.95 8.95 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-medium text-text">WhatsApp</p>
                <p className="text-[13px] text-text-secondary">
                  {siteConfig.whatsapp.label}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[#181717]/30 hover:bg-bg-subtle transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-bg-subtle border border-border flex items-center justify-center text-text-muted group-hover:text-[#181717] transition-colors">
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
