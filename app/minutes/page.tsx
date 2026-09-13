import type { Metadata } from "next";
import { PageHero } from "@/components/section-heading";
import { MinutesGate } from "@/components/minutes-gate";

export const metadata: Metadata = {
  title: "Meeting Minutes",
  description:
    "Executive Board meeting minutes for the Muslim Student Association at Truman State University.",
};

export default function MinutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Executive Board Meeting Minutes"
        description="A record of MSA Executive Board meetings, posted here for transparency and reference."
      />
      <MinutesGate />
    </>
  );
}
