import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { SITE, SOCIAL_LINKS, JUMMAH, NAV_LINKS } from "@/data/site";
import { LogoMark } from "@/components/logo";

const quickLinks = NAV_LINKS.filter((l) =>
  ["/about", "/events", "/committees", "/resources"].includes(
    l.href
  )
);

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Org */}
        <div>
          <div className="flex items-center gap-3">
            <LogoMark size={44} />
            <div>
              <p className="font-display text-lg font-semibold text-white">
                {SITE.shortName}
              </p>
              <p className="text-sm text-neutral-400">{SITE.university}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            {SITE.organizationName}
            <br />
            {SITE.university}
            <br />
            {SITE.location}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/feedback"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Anonymous Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <FooterSocial
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
                href={SOCIAL_LINKS.instagram}
              />
            </li>
            <li>
              <FooterSocial
                icon={<MessageCircle className="h-4 w-4" />}
                label="GroupMe"
                href={SOCIAL_LINKS.groupme}
              />
            </li>
            <li>
              <FooterSocial
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                href={SOCIAL_LINKS.email}
              />
            </li>
          </ul>
        </div>

        {/* Jumu'ah */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Jumu&apos;ah
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-400">
            <li>
              <span className="block font-medium text-neutral-200">Campus</span>
              {JUMMAH.campus.day}, {JUMMAH.campus.time}
            </li>
            <li>
              <span className="block font-medium text-neutral-200">
                Islamic Center of Kirksville
              </span>
              {JUMMAH.community.day}, {JUMMAH.community.time}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.organizationName} · Student
            organization at {SITE.university}.
          </p>
          <p className="text-neutral-600">
            This website does not represent the official views of {SITE.university}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 text-neutral-600">
        {icon}
        {label}
        <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
          Soon
        </span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}
