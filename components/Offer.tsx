import { beforeAfter, offers, site } from "@/content/site";
import { ArrowUpRight, Check, Cross, Search, Cpu, Graduation } from "./Icons";
import { d } from "./delay";

const offerIcons = [Search, Cpu, Graduation];

export default function Offer() {
  return (
    <section id="offre" className="section bg-surface-200">
      <div className="container-page">
        <h2 data-reveal className="mx-auto max-w-3xl text-center font-display text-heading-1 sm:text-display-lg">{beforeAfter.title}</h2>

        <div className="mt-s-7 grid gap-s-4 md:grid-cols-2">
          <div data-reveal style={d(0)} className="rounded-md border border-border bg-surface-300 p-s-6">
            <p className="font-display text-label uppercase text-ink-muted">{beforeAfter.before.label}</p>
            <ul className="mt-s-4 space-y-s-3">
              {beforeAfter.before.items.map((i, k) => (
                <li key={i} data-reveal="fade" style={d(150 + k * 120)} className="flex gap-s-3 text-ink-muted">
                  <Cross className="draw mt-0.5 h-5 w-5 shrink-0 text-danger" /><span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={d(150)} className="rounded-md border border-border-strong bg-surface-100 p-s-6">
            <p className="font-display text-label uppercase text-action">{beforeAfter.after.label}</p>
            <ul className="mt-s-4 space-y-s-3">
              {beforeAfter.after.items.map((i, k) => (
                <li key={i} data-reveal="fade" style={d(500 + k * 120)} className="flex gap-s-3">
                  <Check className="draw mt-0.5 h-5 w-5 shrink-0 text-success" /><span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-s-6 grid gap-s-4 md:grid-cols-3">
          {offers.map((o, i) => {
            const Icon = offerIcons[i] ?? Search;
            return (
              <div key={o.title} data-reveal style={d(i * 120)}>
                <article className="card lift group flex h-full flex-col gap-s-3 bg-surface-100">
                  <div className="flex items-start justify-between">
                    <p className="kicker">{o.kicker}</p>
                    <span className="icon-tile grid h-11 w-11 place-items-center rounded-md bg-surface-300 text-action">
                      <Icon className="draw h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="font-display text-heading-3">{o.title}</h3>
                  <p className="text-body-sm text-ink-muted">{o.body}</p>
                  <p className="mt-auto pt-s-2 font-mono text-body-sm">{o.price}</p>
                  <a href={o.cta === "Voir la méthode" ? "#methode" : site.bookingUrl} className="link-action">
                    {o.cta}<ArrowUpRight className="nudge nudge-up h-4 w-4" />
                  </a>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
