import { resources } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Book, Chart, Calculator } from "./Icons";
import { d } from "./delay";

const icons = [Book, Chart, Calculator];

export default function Resources() {
  return (
    <section id="ressources" className="section">
      <div className="container-page">
        <SectionHeading kicker={resources.kicker} title={resources.title} lead={resources.lead} />
        <ul className="mt-s-7 grid gap-s-4 md:grid-cols-3">
          {resources.items.map((r, i) => {
            const Icon = icons[i] ?? Book;
            return (
            <li key={r.title} data-reveal style={d(i * 120)}>
              <a href={r.href} className="card lift group flex h-full flex-col gap-s-3">
              <div className="flex items-center justify-between">
                <span className="icon-tile grid h-11 w-11 place-items-center rounded-md bg-surface-300 text-action"><Icon className="draw h-6 w-6" /></span>
                <p className="font-mono text-caption text-ink-muted">Guide {String(i + 1).padStart(2, "0")}</p>
              </div>
              <h3 className="font-display text-heading-3">{r.title}</h3>
              <p className="text-body-sm text-ink-muted">{r.body}</p>
              <span className="link-action mt-auto">Lire le guide<ArrowRight className="nudge h-4 w-4" /></span>
              </a>
            </li>
            );
          })}
        </ul>
        <div data-reveal className="mt-s-6 text-center">
          <a href="#" className="btn-secondary">{resources.cta}</a>
        </div>
      </div>
    </section>
  );
}
