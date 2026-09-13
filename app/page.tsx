import Link from "next/link";
import {
  ArrowRight,
  HandHeart,
  Users2,
  BookOpen,
  Building2,
  Instagram,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { VerseMarquee } from "@/components/verse-marquee";
import { JummahSection } from "@/components/jummah-section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { EventCard } from "@/components/event-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/cta-banner";
import { UPCOMING_EVENTS } from "@/data/events";
import { ACTIVE_COMMITTEES } from "@/data/committees";
import { EXECUTIVE_BOARD, ADVISOR } from "@/data/leadership";
import { FAQ } from "@/data/faq";
import { BoardMarquee } from "@/components/board-marquee";
import { PlannerEmbed } from "@/components/planner-embed";
import { InstagramGrid } from "@/components/instagram-embed";
import { RECAP_POSTS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/data/recap";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Scrolling Qur'an verses */}
      <VerseMarquee />

      {/* Quick Jumu'ah info */}
      <JummahSection />

      {/* 4. Welcome / Mission */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Welcome"
            title="Your Community at Truman"
            description="MSA brings together Muslim students at Truman State University and ATSU-KCOM, supporting one another in practicing Islam, celebrating the many cultures and traditions within our faith, and building genuine friendship and understanding between Muslims and non-Muslims alike."
          />
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Religious activities & prayer",
                "Islamic celebrations",
                "Discussions & educational programs",
                "Social & athletic activities",
                "Community service",
                "Interfaith outreach",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Upcoming Events */}
      <section className="section geo-bg">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="What's Next"
              title="Upcoming Events"
              description="Here's a taste of what MSA has planned. Full details land on GroupMe and the semester planner."
            />
            <Reveal>
              <Link href="/events" className="btn-secondary">
                All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fall 2026 Planner preview */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fall 2026"
            title="What's Happening This Semester?"
            description="Our full semester planner lives inside the site, dates, events, and everything MSA has lined up."
          />
          <Reveal className="mt-8">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6">
              <PlannerEmbed height="60vh" showActions={false} />
              <div className="mt-5 flex justify-center">
                <Link href="/planner" className="btn-primary">
                  View Full Fall 2026 Planner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Recap (live from Instagram) */}
      <section className="section geo-bg">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Recap"
              title="Straight from our Instagram"
              description="Catch up on recent gatherings, prayers, and community moments, posted by MSA."
            />
            <Reveal>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Instagram className="h-4 w-4" />
                Follow @{INSTAGRAM_HANDLE}
              </a>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <InstagramGrid urls={RECAP_POSTS.slice(0, 3)} />
          </Reveal>
        </div>
      </section>

      {/* 8. Committees */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Get Involved"
              title="Find Your Place"
              description="You don't need to hold an executive position to make a difference. Committees are where students shape MSA."
            />
            <Reveal>
              <Link href="/committees" className="btn-secondary">
                All Committees
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ACTIVE_COMMITTEES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="card h-full hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {c.id === "fundraising-philanthropy" && (
                      <HandHeart className="h-5 w-5" />
                    )}
                    {c.id === "sisterhood" && <Users2 className="h-5 w-5" />}
                    {c.id === "brotherhood" && <Users2 className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {c.purpose}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Executive Board */}
      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Leadership"
            title="Meet the Executive Board"
            description="The students serving MSA for the 2026-27 academic year."
          />
          <div className="mt-10">
            <BoardMarquee members={[ADVISOR, ...EXECUTIVE_BOARD]} />
          </div>
        </div>
      </section>

      {/* 10. Affiliation / partners */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Beyond Campus"
            title="Connected to a Larger Community"
            description="Our organization is affiliated with MSA National and frequently collaborates with the Islamic Center of Kirksville."
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="card flex h-full items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900">
                    MSA National
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    An affiliation connecting Truman MSA to a nationwide network
                    of Muslim student organizations.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card flex h-full items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900">
                    Islamic Center of Kirksville
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    A close community partner and home to Friday prayer in
                    Kirksville.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Get Involved CTA */}
      <CTABanner
        secondary={{ label: "View the Planner", href: "/planner" }}
      />

      {/* 12. FAQ */}
      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Questions?"
            title="Frequently Asked"
          />
          <div className="mt-12">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
