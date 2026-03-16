"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-[15px] font-semibold tracking-tight text-text"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-secondary hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-accent hover:text-accent-hover transition-colors"
          >
            GitHub
            <span className="inline-block ml-1 text-[11px]">&#x2197;</span>
          </a>
        </nav>

        {/* Mobile nav */}
        <nav className="flex sm:hidden items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-secondary hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
