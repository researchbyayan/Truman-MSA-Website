/**
 * Events data model.
 *
 * This shape is intentionally CMS-friendly, the same fields map cleanly to
 * JSON, Supabase, or the Google Calendar API when you're ready to load events
 * dynamically. For now, edit this file directly.
 *
 * IMPORTANT: Do not invent dates. Until real Fall 2026 events are confirmed,
 * keep the placeholder cards (tbd: true) so the site stays accurate.
 */

export type EventCategory =
  | "Religious"
  | "Social"
  | "Educational"
  | "Service"
  | "Outreach"
  | "Community";

export type MSAEvent = {
  id: string;
  title: string;
  date?: string; // ISO date string, e.g. "2026-09-12", omit if not confirmed
  time?: string; // e.g. "6:00 PM"
  location?: string;
  description: string;
  category: EventCategory;
  rsvpUrl?: string;
  tbd?: boolean; // true = details coming soon (shown as a placeholder card)
};

/**
 * Upcoming events, pulled from the Fall 2026 Planner.
 * Update these as the semester progresses (or as the planner changes).
 */
export const UPCOMING_EVENTS: MSAEvent[] = [
  {
    id: "weekly-jummah",
    title: "Weekly Campus Jummah",
    category: "Religious",
    description:
      "Friday prayer every week. Everyone is welcome, check GroupMe for weekly updates.",
    time: "3:30 PM",
    location: "Interfaith Center · SUB Down Under",
  },
  {
    id: "gen-body-sep-20",
    title: "General Body Meeting",
    category: "Community",
    description:
      "Open to all members, updates, plans, and community. Come meet everyone.",
    date: "2026-09-20",
    time: "8:30 – 9:30 PM",
    location: "VH 1010",
  },
  {
    id: "fundraising-week",
    title: "Fundraising & Philanthropy Week",
    category: "Service",
    description:
      "A week focused on giving back, fundraising and charitable initiatives.",
    date: "2026-10-11",
  },
  {
    id: "game-night",
    title: "Game Night",
    category: "Social",
    description: "Games, prizes, and good company. Bring a friend!",
    date: "2026-10-18",
    time: "7:00 – 9:00 PM",
    location: "TBA",
  },
  {
    id: "brotherhood-week",
    title: "Brotherhood Week",
    category: "Social",
    description:
      "A week of gatherings and activities building community among the brothers.",
    date: "2026-11-01",
  },
  {
    id: "sisterhood-week",
    title: "Sisterhood Week",
    category: "Social",
    description:
      "A week of gatherings and programming building community among the sisters.",
    date: "2026-11-08",
  },
];

export const PAST_EVENT_CATEGORIES: {
  title: string;
  description: string;
  image?: string; // drop photos in /public/gallery/ and reference them here
}[] = [
  {
    title: "Ramadan Programming",
    description: "Iftars, reflections, and community throughout the holy month.",
  },
  {
    title: "Guest Speakers",
    description: "Talks and discussions on faith, culture, and student life.",
  },
  {
    title: "Community Dinners",
    description: "Shared meals that bring students together.",
  },
  {
    title: "Educational Programs",
    description: "Learning opportunities open to the whole campus.",
  },
  {
    title: "Social Events",
    description: "Game nights, outings, and friendship beyond the classroom.",
  },
  {
    title: "Interfaith & Community Outreach",
    description: "Building understanding across the Truman community.",
  },
];
