export default function SectionHeading({
  kicker, title, lead, align = "center",
}: { kicker?: string; title: string; lead?: string; align?: "center" | "left" }) {
  const a = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      {kicker && <p className="kicker mb-s-3">{kicker}</p>}
      <h2 className="font-display text-heading-1 sm:text-display-lg">{title}</h2>
      {lead && <p className="mt-s-4 text-body-lg text-ink-muted">{lead}</p>}
    </div>
  );
}
