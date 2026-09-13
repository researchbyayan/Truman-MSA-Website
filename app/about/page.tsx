import type { Metadata } from "next";
import {
  Target,
  Users,
  GraduationCap,
  Globe,
  Handshake,
  Sparkles,
  Building2,
  BookOpen,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CTABanner } from "@/components/cta-banner";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Muslim Student Association at Truman State University, our mission, purpose, and community.",
};

const purpose = [
  { icon: Users, text: "Bring Muslim students together." },
  { icon: Sparkles, text: "Support students in practicing Islam." },
  {
    icon: GraduationCap,
    text: "Support educational and spiritual development.",
  },
  {
    icon: Globe,
    text: "Promote understanding of Islamic cultures and traditions.",
  },
  {
    icon: Handshake,
    text: "Foster cooperation between Muslims and non-Muslims.",
  },
  {
    icon: Target,
    text: "Provide religious, educational, social, and athletic programming.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Truman MSA"
        description={`A student organization at ${SITE.university} rooted in Islam, serving Muslim students and open to anyone eager to learn.`}
      />

      {/* Mission */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Mission"
            title="Why we exist"
            description="We come together to worship, to learn, and to keep one another close to the deen while we are away from home."
          />
          <Reveal delay={0.1}>
            <blockquote className="rounded-2xl border-l-4 border-brand-600 bg-brand-50/60 p-8">
              <p className="font-display text-xl leading-relaxed text-neutral-800 sm:text-2xl">
                &ldquo;And hold firmly to the rope of Allah all together and do
                not become divided.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium uppercase tracking-wide text-brand-700">
                Qur&apos;an 3:103
              </footer>
            </blockquote>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              MSA supports Muslim students in faith, education, and community
              while building understanding, friendship, and cooperation across
              the Truman community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Purpose */}
      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Purpose"
            title="What we set out to do"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {purpose.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.05}>
                <div className="card h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-medium text-neutral-800">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Community"
            title="We're not on this journey alone"
            description="MSA works alongside partners on and off campus to serve Muslim students and the broader Truman community."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="card flex h-full items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900">
                    Islamic Center of Kirksville
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    A community partner we collaborate with regularly, and home
                    to Friday prayer in Kirksville.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card flex h-full items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900">
                    MSA National
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Truman MSA is affiliated with MSA National, connecting us to
                    a nationwide network of Muslim student organizations.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Membership"
            title="Who can be part of MSA"
            description="Membership is open to all. Non-Muslim students are welcome to attend public activities and take part in the organization."
          />
          <Reveal className="mt-8">
            <figure className="mx-auto max-w-2xl text-center">
              <blockquote className="font-display text-lg italic leading-relaxed text-neutral-700 sm:text-xl">
                &ldquo;O mankind, We created you from a male and a female and
                made you peoples and tribes that you may know one another.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs font-medium uppercase tracking-wide text-brand-700">
                Qur&apos;an 49:13
              </figcaption>
            </figure>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Regular Membership",
                text: "Muslim Truman students, their spouses, and Muslim faculty and staff.",
              },
              {
                title: "Associate Membership",
                text: "Non-Muslim members of the Truman community who wish to take part.",
              },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="card flex h-full min-h-[10rem] flex-col">
                  <h3 className="font-display text-lg font-semibold text-brand-800">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">
                A note on voting:
              </span>{" "}
              Voting privileges are reserved for currently enrolled Truman
              State University students, in accordance with the MSA
              Constitution.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Governance / Structure */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="How MSA Works"
            title="Organizational Structure"
            description="A simple structure that keeps things running while opening the door for broad student participation."
          />
          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
            {[
              { label: "General Membership", note: "Everyone who takes part" },
              { label: "Executive Board", note: "Handles administration" },
              {
                label: "Functional Committees",
                note: "Where students get involved",
              },
              { label: "Programs & Events", note: "What we build together" },
            ].map((row, i, arr) => (
              <Reveal key={row.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
                  <p className="font-display text-lg font-semibold text-neutral-900">
                    {row.label}
                  </p>
                  <p className="text-sm text-neutral-500">{row.note}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-center py-1 text-brand-400">
                    ↓
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Funding note */}
      <section className="pb-8">
        <div className="container-page">
          <Reveal>
            <p className="mx-auto max-w-3xl rounded-2xl bg-neutral-50 p-6 text-center text-sm text-neutral-500">
              MSA has received organizational support and funding through the
              Fund Allotment Council (FAC) and the Office of Community
              Enrichment (OCE).
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Come as you are."
        description="Whether you're looking for community or just curious to learn, there's a place for you."
        primary={{ label: "Get Involved", href: "/get-involved" }}
        secondary={{ label: "See Committees", href: "/committees" }}
      />
    </>
  );
}
