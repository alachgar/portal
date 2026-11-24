import { finalCta, site } from "@/content/site";
import { ArrowRight } from "./Icons";
import { d } from "./delay";

export default function FinalCta() {
  return (
    <section id="contact" className="theme-graphite relative scroll-mt-24 overflow-hidden">
      <span data-reveal="blade" style={d(300)} className="blade -right-16 bottom-10 hidden w-[360px] md:block" aria-hidden />
      <div className="container-page relative py-s-8 sm:py-s-9">
        <div className="max-w-2xl">
          <p data-reveal="fade" className="kicker mb-s-3">Trust</p>
          <h2 data-reveal style={d(80)} className="font-display text-heading-1 sm:text-display-lg">{finalCta.title}</h2>
          <p data-reveal style={d(160)} className="mt-s-4 text-body-lg text-ink-muted">{finalCta.lead}</p>
          <div data-reveal style={d(240)} className="mt-s-6 flex flex-wrap gap-s-3">
            <a href={site.bookingUrl} className="btn-primary">{finalCta.cta}<ArrowRight className="nudge h-4 w-4" /></a>
            <a href={`mailto:${site.email}`} className="btn-ghost">{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
