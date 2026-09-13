/**
 * Executive Board, 2026-27 academic year.
 *
 * Only add fields you can verify. Leave optional fields undefined and the
 * leadership cards will simply omit them (no fake majors, bios, or emails).
 *
 * To add a photo: drop the image in /public/leadership/ and set
 *   photo: "/leadership/first-last.jpg"
 */

export type Leader = {
  name: string;
  position: string;
  major?: string;
  year?: string;
  bio?: string;
  email?: string;
  photo?: string;
};

export const ADVISOR: Leader = {
  name: "Dr. Kafi Rahman",
  position: "Advisor",
};

export const EXECUTIVE_BOARD: Leader[] = [
  {
    name: "Mohammed Ayan Mahmood",
    position: "President",
  },
  {
    name: "Ahmed Begović",
    position: "Vice President",
  },
  {
    name: "Khadija Diouf",
    position: "Secretary",
  },
  {
    name: "Mewardi Kedir",
    position: "Risk Manager",
  },
  {
    name: "Md. Tanvir Ibn Alam",
    position: "Treasurer",
  },
  {
    name: "Riyad Hassan Ropam",
    position: "Historian",
  },
];
