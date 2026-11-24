import { indicators } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { Clock, Flag, Euro, Users, Database } from "./Icons";
import { d } from "./delay";

const icons = [Clock, Flag, Euro, Users, Database];

export default function Indicators() {
  return (
    <section id="indicateurs" className="section bg-surface-200">
      <div className="container-page">
        <SectionHeading kicker={indicators.kicker} title={indicators.title} lead={indicators.lead} />
        <ul className="mt-s-7 grid gap-s-4 sm:grid-cols-2 lg:grid-cols-5">
          {indicators.items.map((it, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <li key={it.code} data-reveal style={d(i * 110)}>
                <div className={`lift group flex h-full flex-col rounded-md border p-s-5 ${it.highlight ? "border-action bg-surface-100" : "border-border bg-surface-100"}`}>
                  <div className="flex items-center justify-between">
                    <span className="icon-tile grid h-11 w-11 place-items-center rounded-md bg-surface-300 text-action">
                      <Icon className="draw h-6 w-6" />
                    </span>
                    <p className="font-mono text-caption text-ink-muted">{it.code}</p>
                  </div>
                  <h3 className="mt-s-4 font-display text-heading-3">{it.title}</h3>
                  <p className="mt-s-2 text-body-sm text-ink-muted">{it.body}</p>
                  {it.highlight && <p className="badge mt-auto w-fit bg-surface-300 pt-1 text-action">Mesuré dès le diagnostic</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
