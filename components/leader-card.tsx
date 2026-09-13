import { Mail } from "lucide-react";
import type { Leader } from "@/data/leadership";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="card flex h-full flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-4 ring-neutral-100">
        {leader.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={leader.photo}
            alt={leader.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-600 to-brand-900 font-display text-2xl font-bold text-white">
            {initials(leader.name)}
          </span>
        )}
      </div>

      <span className="mt-4 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
        {leader.position}
      </span>

      <h3 className="mt-3 font-display text-lg font-semibold text-neutral-900">
        {leader.name}
      </h3>

      {(leader.major || leader.year) && (
        <p className="mt-1 text-sm text-neutral-500">
          {[leader.major, leader.year].filter(Boolean).join(" · ")}
        </p>
      )}

      {leader.bio && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {leader.bio}
        </p>
      )}

      {leader.email && (
        <a
          href={`mailto:${leader.email}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      )}
    </div>
  );
}
