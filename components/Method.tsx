import { method } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Method() {
  return (
    <section id="methode" className="section">
      <div className="container-page">
        <SectionHeading kicker={method.kicker} title={method.title} lead={method.lead} />
        <ol className="mt-s-7 grid gap-s-4 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((s, i) => (
            <li key={s.title} className="card">
              <p className="font-mono text-body-sm text-action">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-s-4 font-display text-heading-3">{s.title}</h3>
              <p className="mt-s-2 text-body-sm text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
