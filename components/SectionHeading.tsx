import { d } from "./delay";

export default function SectionHeading({
  kicker, title, lead, align = "center",
}: { kicker?: string; title: string; lead?: string; align?: "center" | "left" }) {
  const a = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      {kicker && (
        <p data-reveal="fade" className="kicker mb-s-3 inline-flex items-center gap-s-3">
          <span data-reveal="line" style={d(150)} className="h-px w-8 bg-action" aria-hidden />
          {kicker}
        </p>
      )}
      <h2 data-reveal style={d(80)} className="font-display text-heading-1 sm:text-display-lg">{title}</h2>
      {lead && <p data-reveal style={d(160)} className="mt-s-4 text-body-lg text-ink-muted">{lead}</p>}
    </div>
  );
}
