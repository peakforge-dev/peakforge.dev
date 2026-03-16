"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-icon-256.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Image
            src="/images/wordmark.png"
            alt={siteConfig.name}
            width={706}
            height={161}
            className="h-[18px] w-auto"
            priority
          />
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
