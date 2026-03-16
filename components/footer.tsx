import Image from "next/image";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-icon-256.png"
              alt=""
              width={256}
              height={256}
              className="w-6 h-6"
            />
            <div>
              <p className="text-[14px] font-semibold text-text">
                {siteConfig.name}
              </p>
              <p className="text-[13px] text-text-muted mt-0.5">
                {siteConfig.motto}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-text-secondary">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-text transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle">
          <p className="text-[12px] text-text-muted">
            &copy; {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
