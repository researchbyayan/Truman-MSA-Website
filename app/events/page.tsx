import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { EventCard } from "@/components/event-card";
import { PlannerEmbed } from "@/components/planner-embed";
import { Reveal } from "@/components/reveal";
import { UPCOMING_EVENTS } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming MSA events at Truman State University and the full Fall 2026 semester planner.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="What's Happening"
        title="Events"
        description="Jumu'ah, community dinners, guest speakers, and service. Here's how to join in."
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Upcoming" title="Coming Up" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Semester Planner"
            title="Fall 2026 Planner"
            description="Every event, date, and detail for the semester, in one sheet."
          />
          <Reveal className="mt-8">
            <PlannerEmbed height="78vh" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
