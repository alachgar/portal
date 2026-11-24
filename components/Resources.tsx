import { resources } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./Icons";

export default function Resources() {
  return (
    <section id="ressources" className="section">
      <div className="container-page">
        <SectionHeading kicker={resources.kicker} title={resources.title} lead={resources.lead} />
        <ul className="mt-s-7 grid gap-s-4 md:grid-cols-3">
          {resources.items.map((r, i) => (
            <li key={r.title} className="card flex flex-col gap-s-3">
              <p className="font-mono text-caption text-ink-muted">Guide {String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-heading-3">{r.title}</h3>
              <p className="text-body-sm text-ink-muted">{r.body}</p>
              <a href={r.href} className="link-action mt-auto">Lire le guide<ArrowRight /></a>
            </li>
          ))}
        </ul>
        <div className="mt-s-6 text-center">
          <a href="#" className="btn-secondary">{resources.cta}</a>
        </div>
      </div>
    </section>
  );
}
