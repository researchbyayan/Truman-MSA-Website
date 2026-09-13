"use client";

type Verse = { text: string; ref: string };

const VERSES: Verse[] = [
  {
    text: "And hold firmly to the rope of Allah all together and do not become divided.",
    ref: "Qur'an 3:103",
  },
  {
    text: "Verily, in the remembrance of Allah do hearts find rest.",
    ref: "Qur'an 13:28",
  },
  {
    text: "O mankind, We created you from a male and a female and made you peoples and tribes that you may know one another.",
    ref: "Qur'an 49:13",
  },
  {
    text: "Indeed, with hardship comes ease.",
    ref: "Qur'an 94:6",
  },
  {
    text: "Seek help through patience and prayer.",
    ref: "Qur'an 2:45",
  },
];

export function VerseMarquee() {
  const track = [...VERSES, ...VERSES];
  return (
    <section
      aria-label="Verses from the Qur'an"
      className="border-y border-brand-100 bg-gradient-to-r from-brand-50/60 via-white to-brand-50/60"
    >
      <div
        className="group relative overflow-hidden py-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-[verse-marquee_80s_linear_infinite] group-hover:[animation-play-state:paused]">
          {track.map((v, i) => (
            <span
              key={`${v.ref}-${i}`}
              className="mx-10 inline-flex items-baseline gap-3 whitespace-nowrap font-display text-sm italic text-neutral-700 sm:text-base"
              aria-hidden={i >= VERSES.length ? true : undefined}
            >
              <span className="text-brand-500" aria-hidden="true">
                ✦
              </span>
              &ldquo;{v.text}&rdquo;
              <span className="text-xs font-semibold not-italic uppercase tracking-wide text-brand-700">
                {v.ref}
              </span>
            </span>
          ))}
        </div>
        <style jsx global>{`
          @keyframes verse-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-\\[verse-marquee_80s_linear_infinite\\] {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
