import { beforeAfter, offers, site } from "@/content/site";
import { ArrowUpRight, Check, Cross } from "./Icons";

export default function Offer() {
  return (
    <section id="offre" className="section bg-surface-200">
      <div className="container-page">
        <h2 className="mx-auto max-w-3xl text-center font-display text-heading-1 sm:text-display-lg">{beforeAfter.title}</h2>

        <div className="mt-s-7 grid gap-s-4 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface-300 p-s-6">
            <p className="font-display text-label uppercase text-ink-muted">{beforeAfter.before.label}</p>
            <ul className="mt-s-4 space-y-s-3">
              {beforeAfter.before.items.map((i) => (
                <li key={i} className="flex gap-s-3 text-ink-muted"><Cross className="mt-0.5 h-5 w-5 shrink-0 text-danger" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border-strong bg-surface-100 p-s-6">
            <p className="font-display text-label uppercase text-action">{beforeAfter.after.label}</p>
            <ul className="mt-s-4 space-y-s-3">
              {beforeAfter.after.items.map((i) => (
                <li key={i} className="flex gap-s-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-success" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-s-6 grid gap-s-4 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.title} className="card flex flex-col gap-s-3 bg-surface-100">
              <p className="kicker">{o.kicker}</p>
              <h3 className="font-display text-heading-3">{o.title}</h3>
              <p className="text-body-sm text-ink-muted">{o.body}</p>
              <p className="mt-auto pt-s-2 font-mono text-body-sm">{o.price}</p>
              <a href={o.cta === "Voir la méthode" ? "#methode" : site.bookingUrl} className="link-action">{o.cta}<ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
