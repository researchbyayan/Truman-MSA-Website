import { ExternalLink } from "lucide-react";
import { PLANNER } from "@/data/site";

/**
 * Embeds the Fall 2026 Google Sheet directly in the page.
 *
 * We use Google's /preview endpoint (see data/site.ts → PLANNER.previewUrl).
 * If Google ever blocks the iframe (X-Frame-Options), switch to a published
 * URL instead: in Google Sheets, File → Share → Publish to web → Embed, then
 * replace PLANNER.previewUrl with the generated
 *   .../pubhtml?widget=true&headers=false
 * URL. The "Open Full Planner" button always links to the original sheet.
 */
export function PlannerEmbed({
  height = "76vh",
  showActions = true,
}: {
  height?: string;
  showActions?: boolean;
}) {
  return (
    <div>
      {showActions && (
        <div className="mb-5 flex flex-wrap gap-3">
          <a
            href={PLANNER.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Open Full Planner
          </a>
        </div>
      )}

      {/* Content is zoomed out ~20% (scale 0.8). The iframe is sized 125% so
          that after scaling it fills the container exactly. */}
      <div
        className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        style={{ height }}
      >
        <iframe
          src={PLANNER.previewUrl}
          title="MSA Fall 2026 Semester Planner"
          style={{
            width: "125%",
            height: "125%",
            border: "0",
            transform: "scale(0.8)",
            transformOrigin: "0 0",
          }}
          loading="lazy"
        />
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        Having trouble viewing the planner?{" "}
        <a
          href={PLANNER.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-700 hover:underline"
        >
          Open it in Google Sheets
        </a>
        .
      </p>
    </div>
  );
}
