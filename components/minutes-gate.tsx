"use client";

import { useEffect, useState, FormEvent } from "react";
import {
  FileText,
  Download,
  CalendarDays,
  ClipboardList,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MEETING_MINUTES } from "@/data/minutes";
import {
  MINUTES_PASSWORD,
  OFFICER_EMAILS,
  MEETING_LINK,
  MEETING_EMAIL,
} from "@/data/officers";

const STORAGE_KEY = "msa-minutes-auth";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function MeetingLinkPanel() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === MINUTES_PASSWORD) {
        setUnlocked(true);
      }
    } catch {}
    setReady(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === MINUTES_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, MINUTES_PASSWORD);
      } catch {}
      setUnlocked(true);
      setError("");
      setInput("");
    } else {
      setError("Incorrect password.");
    }
  }

  function handleLogout() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
    setUnlocked(false);
  }

  function startAndEmailMeeting() {
    window.open(MEETING_LINK, "_blank", "noopener,noreferrer");
    const to = OFFICER_EMAILS.join(",");
    const subject = encodeURIComponent(MEETING_EMAIL.subject);
    const body = encodeURIComponent(MEETING_EMAIL.body(MEETING_LINK));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  if (!ready) return null;

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-semibold text-neutral-900">
            Admin (Officers only)
          </h2>
          <p className="mt-0.5 text-sm text-neutral-600">
            One click opens the Google Meet and emails the link to every officer.
          </p>
        </div>
      </div>

      {unlocked ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={startAndEmailMeeting}
            disabled={OFFICER_EMAILS.length === 0}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            title={
              OFFICER_EMAILS.length === 0
                ? "Add officer emails in data/officers.ts"
                : "Open the Google Meet and email the link to every officer"
            }
          >
            <Mail className="h-4 w-4" />
            Start Meeting & Email Link
          </button>
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-800"
          >
            Log out
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-wrap items-start gap-2"
        >
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200">
            <Lock className="h-4 w-4 text-neutral-400" />
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Officer password"
              className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Unlock
          </button>
          {error && (
            <p className="w-full text-sm text-red-600">{error}</p>
          )}
        </form>
      )}
    </div>
  );
}

export function MinutesGate() {
  const minutes = [...MEETING_MINUTES].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <section className="section">
      <div className="container-page space-y-10">
        <MeetingLinkPanel />

        {minutes.length > 0 ? (
          <div className="mx-auto max-w-3xl space-y-4">
            {minutes.map((m, i) => (
              <Reveal key={m.url} delay={i * 0.05}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-4 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <FileText className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-neutral-900">
                      {m.title}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-neutral-500">
                      <CalendarDays className="h-4 w-4" />
                      {formatDate(m.date)}
                    </p>
                    {m.summary && (
                      <p className="mt-1 text-sm text-neutral-600">
                        {m.summary}
                      </p>
                    )}
                  </div>
                  <Download className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <ClipboardList className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-neutral-900">
                Minutes coming soon
              </h2>
              <p className="mx-auto mt-2 max-w-md text-neutral-600">
                Executive Board meeting minutes will be posted here as they
                become available.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
