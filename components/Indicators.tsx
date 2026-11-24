import { indicators } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Indicators() {
  return (
    <section id="indicateurs" className="section bg-surface-200">
      <div className="container-page">
        <SectionHeading kicker={indicators.kicker} title={indicators.title} lead={indicators.lead} />
        <ul className="mt-s-7 grid gap-s-4 sm:grid-cols-2 lg:grid-cols-5">
          {indicators.items.map((it) => (
            <li
              key={it.code}
              className={`rounded-md border p-s-5 ${it.highlight ? "border-action bg-surface-100" : "border-border bg-surface-100"}`}
            >
              <p className="font-mono text-caption text-ink-muted">{it.code}</p>
              <h3 className="mt-s-3 font-display text-heading-3">{it.title}</h3>
              <p className="mt-s-2 text-body-sm text-ink-muted">{it.body}</p>
              {it.highlight && <p className="badge mt-s-4 bg-surface-300 text-action">Mesuré dès le diagnostic</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
