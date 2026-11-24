import { faq, site } from "@/content/site";
import { Plus } from "./Icons";

export default function Faq() {
  return (
    <section id="faq" className="section bg-surface-200">
      <div className="container-page grid gap-s-7 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-heading-1 sm:text-display-lg">{faq.title}</h2>
          <p className="mt-s-4 text-body-lg text-ink-muted">{faq.lead}</p>
          <a href={site.bookingUrl} className="btn-primary mt-s-5">Prendre contact</a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faq.items.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-s-4 py-s-5 font-display text-heading-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-action transition-transform group-open:rotate-45" />
              </summary>
              <p className="pb-s-5 pr-s-6 text-body text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
