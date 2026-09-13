"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Users, Heart } from "lucide-react";
import { SITE } from "@/data/site";

const glance = [
  { icon: CalendarDays, title: "Jumu'ah", sub: "Every Friday" },
  { icon: Heart, title: "Community", sub: "Events all semester" },
  { icon: Users, title: "Everyone Welcome", sub: "Muslim & non-Muslim" },
  { icon: MapPin, title: "Truman State", sub: "Kirksville, MO" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background: deep purple gradient + subtle geometric grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-neutral-950 to-black" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* soft glow */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-800/30 blur-3xl" />
      </div>

      <div className="container-page relative py-24 sm:py-32">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Greeting for everyone who lands here */}
          <div className="mb-8">
            <p
              lang="ar"
              dir="rtl"
              className="text-left font-display text-base font-semibold text-brand-200 sm:text-lg"
            >
              السلام عليكم ورحمة الله وبركاته
            </p>
            <p className="mt-2 text-sm font-medium italic tracking-wide text-neutral-300">
              Peace be upon you, with mercy and blessings of Allah.
            </p>
          </div>

          <h1 className="font-grandview text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Faith. <span className="text-brand-300">Community.</span>
            <br />
            Belonging.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            The {SITE.organizationName} at {SITE.university} brings students
            together through faith, friendship, service, education, and
            community.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/get-involved" className="btn-primary">
              Join Our Community
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/planner"
              className="btn border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:-translate-y-0.5"
            >
              View Fall 2026 Planner
            </Link>
          </div>
        </motion.div>

        {/* At a Glance */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4">
          {glance.map((g, i) => (
            <motion.div
              key={g.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
            >
              <g.icon className="h-6 w-6 text-brand-300" />
              <p className="mt-3 font-display text-lg font-semibold">
                {g.title}
              </p>
              <p className="text-sm text-neutral-400">{g.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
