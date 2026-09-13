import { Clock, MapPin, Phone, CalendarDays, ExternalLink } from "lucide-react";
import { JUMMAH, FRIDAY_PRAYER_SCHEDULE_URL } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function JummahSection() {
  const { campus, community } = JUMMAH;

  return (
    <section id="jummah" className="section geo-bg">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Friday Prayer</span>
          <h2 className="section-title">Jummah at Truman &amp; in Kirksville</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Looking for Friday prayer? Here&apos;s everything you need.
          </p>
          <a
            href={FRIDAY_PRAYER_SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-900 hover:underline"
          >
            Friday Prayer Schedule
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Campus */}
          <Reveal>
            <div className="card h-full border-brand-200 bg-gradient-to-br from-brand-50 to-white">
              <span className="eyebrow">{campus.label}</span>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-brand-900">
                  {campus.day}
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-2xl font-semibold text-brand-700">
                  {campus.time}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    {campus.location}
                    <br />
                    <span className="text-neutral-500">{campus.sublocation}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{campus.note}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    {campus.contactName}
                    <br />
                    <a
                      href={`tel:${campus.contactPhone.replace(/[^\d]/g, "")}`}
                      className="text-brand-700 hover:underline"
                    >
                      {campus.contactPhone}
                    </a>
                  </span>
                </li>
              </ul>
              <a
                href="#jummah"
                className="btn-primary mt-6 w-full"
                aria-label="Campus Jummah details"
              >
                <CalendarDays className="h-4 w-4" />
                Campus Jummah
              </a>
            </div>
          </Reveal>

          {/* Community */}
          <Reveal delay={0.1}>
            <div className="card h-full">
              <span className="eyebrow">{community.label}</span>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-neutral-900">
                  {community.day}
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-2xl font-semibold text-brand-700">
                  {community.time}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    {community.location}
                    <br />
                    <span className="text-neutral-500">{community.address}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    {community.contactName}
                    <br />
                    <a
                      href={`tel:${community.contactPhone.replace(/[^\d]/g, "")}`}
                      className="text-brand-700 hover:underline"
                    >
                      {community.contactPhone}
                    </a>
                  </span>
                </li>
              </ul>
              <a
                href={community.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full"
              >
                <ExternalLink className="h-4 w-4" />
                Islamic Center
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
