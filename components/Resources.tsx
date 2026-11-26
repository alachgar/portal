import { resources } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Book, Chart, Calculator, Prompt } from "./Icons";
import { d } from "./delay";

const icons = [Book, Chart, Calculator];

export default function Resources() {
  const f = resources.featured;
  return (
    <section id="ressources" className="section">
      <div className="container-page">
        <SectionHeading kicker={resources.kicker} title={resources.title} lead={resources.lead} />

        {/* Ressource mise en avant : bibliothèque de prompts */}
        <a
          href={f.href}
          data-reveal
          className="card lift group mt-s-7 grid gap-s-5 border-action/40 md:grid-cols-[auto_1fr_auto] md:items-center"
        >
          <span className="icon-tile grid h-14 w-14 place-items-center rounded-md bg-surface-300 text-action"><Prompt className="draw h-7 w-7" /></span>
          <div>
            <p className="kicker mb-s-2 !text-action">{f.label}</p>
            <h3 className="font-display text-heading-2">{f.title}</h3>
            <p className="mt-s-2 max-w-2xl text-body text-ink-muted">{f.body}</p>
            <ul className="mt-s-3 flex flex-wrap gap-s-2" aria-label="Étapes couvertes">
              {f.tags.map((t) => <li key={t} className="badge">{t}</li>)}
            </ul>
          </div>
          <span className="btn-primary w-fit">{f.cta}<ArrowRight className="nudge h-4 w-4" /></span>
        </a>

        <ul className="mt-s-4 grid gap-s-4 md:grid-cols-3">
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
