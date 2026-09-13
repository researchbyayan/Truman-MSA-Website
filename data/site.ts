/**
 * Central site configuration.
 * Future executives can update almost everything about the site from this file
 * without touching component code.
 */

export const SITE = {
  organizationName: "Muslim Student Association",
  shortName: "MSA",
  university: "Truman State University",
  location: "Kirksville, Missouri",
  tagline: "Faith. Community. Belonging.",
  description:
    "The Muslim Student Association at Truman State University brings students together through faith, friendship, service, education, and community.",
  url: "https://trumanmsa.vercel.app",
  email: "es65721@truman.edu",
};

/**
 * Social + communication links.
 * Leave a value as an empty string ("") if the URL isn't ready yet, the UI
 * will show a tasteful "Coming Soon" state instead of a broken/fake link.
 */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/truman.msa/",
  groupme: "https://groupme.com/join_group/116443473/wEp2eMe5",
  email: "mailto:es65721@truman.edu",
};

/**
 * The Google Sheets planner.
 * - `previewUrl` embeds inside an iframe (Google's /preview endpoint).
 * - `externalUrl` opens the full editable/viewable sheet in a new tab.
 *
 * FALLBACK (if Google blocks the /preview iframe):
 *   In Google Sheets: File → Share → Publish to web → Embed,
 *   then replace `previewUrl` below with the generated URL, which looks like:
 *   https://docs.google.com/spreadsheets/d/e/<PUBLISH_ID>/pubhtml?widget=true&headers=false
 */
export const PLANNER = {
  spreadsheetId: "1KRXhjubA9XWd2TMRr2qlWB6P-Aom1heHuFVk91kUw2A",
  previewUrl:
    "https://docs.google.com/spreadsheets/d/1KRXhjubA9XWd2TMRr2qlWB6P-Aom1heHuFVk91kUw2A/preview",
  externalUrl:
    "https://docs.google.com/spreadsheets/d/1KRXhjubA9XWd2TMRr2qlWB6P-Aom1heHuFVk91kUw2A/edit?usp=sharing",
  // Placeholder, wire up an .ics export or Google Calendar subscribe link later.
  calendarUrl: "",
};

export const CONSTITUTION_URL = "/MSA-Constitution-2025.pdf";

/**
 * Shared Google Drive folder containing MSA documents, guides, and archives.
 * Update this if the folder is ever moved.
 */
export const MSA_RESOURCES_FOLDER_URL =
  "https://drive.google.com/drive/folders/1i4yY5sZVFyKarGngFuGqadtFGkLWHDv0?usp=drive_link";

/**
 * Friday Prayer Schedule spreadsheet.
 * Lives inside the MSA Resources Folder; link kept separate so we can point
 * directly at it once the shareable link is finalized. Until then it points
 * at the Resources Folder.
 */
export const FRIDAY_PRAYER_SCHEDULE_URL = MSA_RESOURCES_FOLDER_URL;

/**
 * Jummah (Friday) prayer information.
 */
export const JUMMAH = {
  campus: {
    label: "Campus Jummah",
    day: "Friday",
    time: "3:30 PM",
    location: "Interfaith Center",
    sublocation: "SUB Basement",
    note: "Check GroupMe for weekly updates.",
    contactName: "Mohammed Ayan Mahmood",
    contactPhone: "(323) 621-7535",
  },
  community: {
    label: "Community Jummah",
    day: "Friday",
    time: "1:30 PM",
    location: "Islamic Center of Kirksville",
    address: "1308 S Baltimore St, Kirksville, MO 63501",
    contactName: "Dr. Kafi Rahman",
    contactPhone: "(605) 270-7645",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1308+S+Baltimore+St+Kirksville+MO+63501",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Committees", href: "/committees" },
  { label: "Minutes", href: "/minutes" },
  { label: "Resources", href: "/resources" },
  { label: "Get Involved", href: "/get-involved" },
];
