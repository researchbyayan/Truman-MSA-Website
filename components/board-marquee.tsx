"use client";

import { LeaderCard } from "@/components/leader-card";
import type { Leader } from "@/data/leadership";

export function BoardMarquee({ members }: { members: Leader[] }) {
  const track = [...members, ...members];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]"
      >
        {track.map((leader, i) => (
          <div
            key={`${leader.name}-${i}`}
            className="w-64 shrink-0 sm:w-72"
            aria-hidden={i >= members.length ? true : undefined}
          >
            <LeaderCard leader={leader} />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_40s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
