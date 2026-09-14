/**
 * Officer-managed configuration.
 *
 * Everything in this file changes when the Executive Board changes.
 * Update the password, meeting link, and officer email list each year
 * (or whenever officers rotate) so the Minutes page login and the
 * "Email Meeting Link" button stay in sync with the current board.
 */

/**
 * Password required to view the Meeting Minutes page.
 * Change this whenever officers change or the password is rotated.
 *
 * Note: this is client-side gating for convenience, not real security.
 * Anyone technical can bypass it, so don't put anything truly sensitive
 * behind it — treat it like a soft "members only" curtain.
 */
export const MINUTES_PASSWORD = "thereisonly1god";

/**
 * Google Meet (or Zoom) link used for MSA meetings.
 * Update this when the recurring meeting link changes.
 */
export const MEETING_LINK = "https://meet.google.com/szc-gxud-hrb";

/**
 * Emails that receive the "Email Meeting Link" one-click message.
 * Add each officer's email here; the button opens the user's mail client
 * with all of these pre-filled as recipients. Includes the faculty advisor.
 */
export const OFFICER_EMAILS: string[] = [
  "es65721@truman.edu", // Mohammed Ayan Mahmood — President
  "ti56662@truman.edu", // Ahmed Begović — Vice President
  "qm44574@truman.edu", // Khadija Diouf — Secretary
  "jc37517@truman.edu", // Mewardi Kedir — Risk Manager
  "iz25522@truman.edu", // Md. Tanvir Ibn Alam — Treasurer
  "jt84137@truman.edu", // Riyad Hassan Ropam — Historian
  "kafi@truman.edu", // Dr. Kafi Rahman — Advisor
];

/**
 * Subject line + body used when sending the meeting link.
 */
export const MEETING_EMAIL = {
  subject: "MSA Meeting Link",
  body: (link: string) =>
    `Assalamu alaikum,\n\nHere's the link for our MSA meeting:\n${link}\n\nSee you there,\nMSA Executive Board`,
};
