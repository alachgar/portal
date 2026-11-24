import { faq, site } from "@/content/site";
import { Plus, ArrowRight } from "./Icons";
import { d } from "./delay";

export default function Faq() {
  return (
    <section id="faq" className="section bg-surface-200">
      <div className="container-page grid gap-s-7 lg:grid-cols-[1fr_1.6fr]">
        <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-heading-1 sm:text-display-lg">{faq.title}</h2>
          <p className="mt-s-4 text-body-lg text-ink-muted">{faq.lead}</p>
          <a href={site.bookingUrl} className="btn-primary mt-s-5">Prendre contact<ArrowRight className="nudge h-4 w-4" /></a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faq.items.map((f, i) => (
            <details key={f.q} data-reveal style={d(i * 80)} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-s-4 py-s-5 font-display text-heading-3 transition-colors hover:text-action focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill border border-border-strong text-action transition-all duration-300 group-open:rotate-45 group-open:border-action group-open:bg-action group-open:text-action-on"><Plus className="h-4 w-4" /></span>
              </summary>
              <p className="faq-a pb-s-5 pr-s-6 text-body text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
