import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Building2,
  FileText,
  CalendarRange,
  GraduationCap,
  Mail,
  ExternalLink,
  ArrowRight,
  FolderOpen,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  JUMMAH,
  SITE,
  CONSTITUTION_URL,
  MSA_RESOURCES_FOLDER_URL,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful resources for Muslim students at Truman State University, Jummah, the Islamic Center of Kirksville, the MSA Constitution, and more.",
};

type Resource = {
  icon: typeof CalendarDays;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  external?: boolean;
  comingSoon?: boolean;
};

const resources: Resource[] = [
  {
    icon: CalendarDays,
    title: "Jummah",
    description: `Campus: ${JUMMAH.campus.day} ${JUMMAH.campus.time}, Interfaith Center. ICK: ${JUMMAH.community.day} ${JUMMAH.community.time}.`,
    href: "/#jummah",
    cta: "Prayer Times",
  },
  {
    icon: Building2,
    title: "Islamic Center of Kirksville",
    description: JUMMAH.community.address,
    href: JUMMAH.community.mapUrl,
    cta: "Get Directions",
    external: true,
  },
  {
    icon: FileText,
    title: "MSA Constitution",
    description:
      "Our governing document, mission, membership, structure, and how MSA operates.",
    href: CONSTITUTION_URL || undefined,
    cta: "View Constitution",
    external: true,
    comingSoon: !CONSTITUTION_URL,
  },
  {
    icon: CalendarRange,
    title: "Fall 2026 Planner",
    description: "Everything MSA has planned for the semester, in one place.",
    href: "/planner",
    cta: "Open Planner",
  },
  {
    icon: FolderOpen,
    title: "MSA Resources Folder",
    description:
      "Shared Google Drive with the Friday Prayer schedule, meeting notes, and other MSA documents.",
    href: MSA_RESOURCES_FOLDER_URL,
    cta: "Open Drive Folder",
    external: true,
  },
  {
    icon: GraduationCap,
    title: "Campus Resources",
    description:
      "Prayer spaces, halal options, and support for Muslim students at Truman.",
    comingSoon: true,
  },
  {
    icon: Mail,
    title: "Contact MSA",
    description: "Reach the Executive Board with questions or ideas.",
    href: `mailto:${SITE.email}`,
    cta: "Email Us",
    external: true,
  },
];

const future = [
  "Halal food",
  "Prayer spaces",
  "Ramadan resources",
  "New Muslim resources",
  "Local Muslim community resources",
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Helpful Resources"
        description="Everything you might need, Friday prayer, the Islamic Center, our constitution, and more."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="card flex h-full flex-col hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {r.description}
                  </p>

                  {r.comingSoon ? (
                    <span className="mt-4 inline-flex w-fit items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                      Coming Soon
                    </span>
                  ) : r.href ? (
                    r.external ? (
                      <a
                        href={r.href}
                        target={
                          r.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
                      >
                        {r.cta}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={r.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
                      >
                        {r.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Future resources */}
          <Reveal className="mt-12">
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                More resources on the way
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                We&apos;re building out guides for:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {future.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-600"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
