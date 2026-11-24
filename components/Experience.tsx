"use client";
import { useState } from "react";
import { experience, site } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { Lock } from "./Icons";

export default function Experience() {
  const [filter, setFilter] = useState(experience.filters[0]);
  const items = filter === "Tous" ? experience.items : experience.items.filter((i) => i.sector === filter);

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading kicker={experience.kicker} title={experience.title} lead={experience.lead} />

        <div role="tablist" aria-label="Filtrer par secteur" className="mt-s-6 flex flex-wrap justify-center gap-s-2">
          {experience.filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-[40px] rounded-md border px-s-4 font-display text-label uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action ${
                filter === f ? "border-ink bg-ink text-surface-100" : "border-border-strong bg-surface-200 text-ink hover:bg-surface-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-s-6 grid gap-s-4 md:grid-cols-2" role="tabpanel">
          {items.map((i) => (
            <li key={i.client} className="card flex flex-col gap-s-3">
              <p className="kicker">{i.tags}</p>
              <h3 className="font-display text-heading-2">{i.client}</h3>
              <p className="text-body text-ink-muted">{i.body}</p>
              <span className="badge mt-auto w-fit">{i.sector}</span>
            </li>
          ))}
        </ul>

        <p className="mt-s-6 flex items-center justify-center gap-s-2 text-center text-body-sm text-ink-muted">
          <Lock /> {experience.confidential}
        </p>
        <div className="mt-s-5 text-center">
          <a href={site.bookingUrl} className="btn-secondary">En parler ensemble</a>
        </div>
      </div>
    </section>
  );
}
