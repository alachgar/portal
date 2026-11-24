import { method } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { Search, Route, Cpu, Graduation } from "./Icons";
import { d } from "./delay";

const icons = [Search, Route, Cpu, Graduation];

export default function Method() {
  return (
    <section id="methode" className="section">
      <div className="container-page">
        <SectionHeading kicker={method.kicker} title={method.title} lead={method.lead} />

        <div className="relative mt-s-7">
          {/* Fil conducteur qui se trace d'une étape à l'autre */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-px bg-border lg:block" aria-hidden>
            <div data-reveal="line" style={d(200)} className="h-full w-full bg-action" />
          </div>

          <ol className="grid gap-s-4 sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((s, i) => {
              const Icon = icons[i] ?? Search;
              return (
                <li key={s.title} data-reveal style={d(200 + i * 260)} className="flex flex-col items-center">
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-pill border border-action bg-surface-100 font-mono text-body-sm text-action">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="card lift group mt-s-4 w-full flex-1">
                    <span className="icon-tile grid h-11 w-11 place-items-center rounded-md bg-surface-300 text-action">
                      <Icon className="draw h-6 w-6" />
                    </span>
                    <h3 className="mt-s-4 font-display text-heading-3">{s.title}</h3>
                    <p className="mt-s-2 text-body-sm text-ink-muted">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
