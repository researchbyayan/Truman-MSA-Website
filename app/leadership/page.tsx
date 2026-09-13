import type { Metadata } from "next";
import { PageHero } from "@/components/section-heading";
import { LeaderCard } from "@/components/leader-card";
import { Reveal } from "@/components/reveal";
import { CTABanner } from "@/components/cta-banner";
import { EXECUTIVE_BOARD, ADVISOR } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the MSA Executive Board serving Truman State University for the 2026-27 academic year.",
};

export default function LeadershipPage() {
  const board = [ADVISOR, ...EXECUTIVE_BOARD];
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Executive Board"
        description="The students serving MSA for the 2026-27 academic year."
      />

      <section className="section">
        <div className="container-page">
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]"
            aria-label="Executive Board members"
          >
            {board.map((leader) => (
              <div
                key={leader.name}
                className="w-64 shrink-0 snap-start sm:w-72"
              >
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-neutral-500">
            Scroll to see the full board.
          </p>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="section geo-bg">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5">Our Philosophy</span>
            <blockquote className="font-display text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl">
              &ldquo;A believer to another believer is like a building whose
              different parts support each other.&rdquo;
            </blockquote>
            <p className="mt-6 text-neutral-600">
              We lead the same way. Every role, and every member, holds a piece
              of what makes MSA strong. Service over status, teamwork over titles.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Want to help lead?"
        description="You don't need a title to make an impact. Join a committee and shape what MSA becomes."
        primary={{ label: "Explore Committees", href: "/committees" }}
        secondary={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}
