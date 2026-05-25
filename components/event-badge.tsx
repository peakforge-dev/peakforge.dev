"use client";

import { useEffect, useState } from "react";
import type { ProjectEvent } from "@/lib/data";

type Phase =
  | { kind: "hidden" }
  | { kind: "upcoming"; daysUntil: number }
  | { kind: "live" }
  | { kind: "ending"; hoursLeft: number };

function resolvePhase(event: ProjectEvent, now: Date): Phase {
  const showFrom = new Date(event.showFrom);
  const starts = new Date(event.starts);
  const ends = new Date(event.ends);
  const hideAfter = new Date(event.hideAfter);

  if (now < showFrom || now > hideAfter) return { kind: "hidden" };

  if (now < starts) {
    const ms = starts.getTime() - now.getTime();
    const daysUntil = Math.max(1, Math.ceil(ms / 86_400_000));
    return { kind: "upcoming", daysUntil };
  }

  if (now <= ends) {
    const ms = ends.getTime() - now.getTime();
    const hoursLeft = ms / 3_600_000;
    if (hoursLeft <= 12) return { kind: "ending", hoursLeft: Math.ceil(hoursLeft) };
    return { kind: "live" };
  }

  return { kind: "hidden" };
}

function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function EventBadge({ event }: { event: ProjectEvent }) {
  // Render nothing on first pass (server) — recompute on client so we get the
  // user's actual current date rather than build time.
  const [phase, setPhase] = useState<Phase>({ kind: "hidden" });

  useEffect(() => {
    setPhase(resolvePhase(event, new Date()));
    // Re-check every 5 min in case the user keeps the page open across a phase change.
    const id = setInterval(() => setPhase(resolvePhase(event, new Date())), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [event]);

  if (phase.kind === "hidden") return null;

  const label =
    phase.kind === "upcoming"
      ? `${event.title} · in ${phase.daysUntil} ${phase.daysUntil === 1 ? "Tag" : "Tagen"}`
      : phase.kind === "ending"
      ? `${event.title} · endet bald`
      : `${event.title} · heute live`;

  const isLive = phase.kind === "live" || phase.kind === "ending";

  return (
    <a
      href={event.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`In-App Event: ${label}`}
      className="
        absolute top-3 right-3 z-10
        inline-flex items-center gap-1.5
        px-3 py-1.5 rounded-full
        text-[11px] font-semibold tracking-tight
        text-[#1A0A00]
        bg-[#FFD86B]/95
        ring-1 ring-[#FF8A1A]/40
        shadow-[0_8px_24px_-6px_rgba(255,140,0,0.55),0_0_0_4px_rgba(255,184,0,0.18)]
        backdrop-blur-md
        transition-transform duration-200 hover:scale-[1.04]
      "
      style={isLive ? { animation: "luxmaster-pulse 2.4s ease-in-out infinite" } : undefined}
    >
      <span className="text-[#C8500A]">
        <SunIcon />
      </span>
      <span>{label}</span>
      <style>{`
        @keyframes luxmaster-pulse {
          0%, 100% { box-shadow: 0 8px 24px -6px rgba(255,140,0,0.55), 0 0 0 4px rgba(255,184,0,0.18); }
          50%      { box-shadow: 0 10px 30px -4px rgba(255,140,0,0.75), 0 0 0 8px rgba(255,184,0,0.30); }
        }
      `}</style>
    </a>
  );
}
