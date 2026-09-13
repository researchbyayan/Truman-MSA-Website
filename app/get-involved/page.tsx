import type { Metadata } from "next";
import {
  CalendarCheck,
  MessageCircle,
  Instagram,
  HandHeart,
  Users,
  Lightbulb,
  Mail,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { SocialButtons } from "@/components/social-buttons";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "There's a place for you in MSA. Attend events, join GroupMe, follow along, and get involved.",
};

const ways = [
  { icon: CalendarCheck, text: "Attend events and Jumu'ah" },
  { icon: MessageCircle, text: "Join the GroupMe" },
  { icon: Instagram, text: "Follow us on Instagram" },
  { icon: HandHeart, text: "Volunteer at events" },
  { icon: Users, text: "Join a committee" },
  { icon: Lightbulb, text: "Suggest new ideas" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Join MSA"
        title="There’s a place for you in MSA."
        description="However you like to show up, MSA has room for you. Come as you are."
      />

      {/* Connect buttons */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Connect"
            title="Say hello, we'd love to meet you"
            description="The fastest way to stay in the loop is GroupMe. Follow along on Instagram and reach out any time by email."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <SocialButtons />
          </div>
          <Reveal className="mt-6">
            <p className="text-center text-sm text-neutral-500">
              Prefer email? Reach us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-brand-700 hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="section geo-bg">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Ways In"
            title="However you like to participate"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((w, i) => (
              <Reveal key={w.text} delay={i * 0.05}>
                <div className="card flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-neutral-800">{w.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 text-center sm:p-12">
              <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white">
                <Mail className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-neutral-900">
                Contact MSA
              </h2>
              <p className="mt-2 text-neutral-600">
                Questions, ideas, or just want to connect? We&apos;re here.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-primary mt-6"
              >
                <Mail className="h-4 w-4" />
                Email the Executive Board
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
