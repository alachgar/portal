import { hero, site } from "@/content/site";
import DashboardMock from "./DashboardMock";
import { ArrowRight } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-s-8 pt-32 sm:pb-s-9 sm:pt-40">
      <div className="container-page grid items-center gap-s-7 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="kicker mb-s-4">{hero.kicker}</p>
          <h1 className="font-display text-[40px] font-extrabold leading-[44px] tracking-[-0.01em] sm:text-display-xl">
            {hero.title}
          </h1>
          <p className="mt-s-5 max-w-xl text-body-lg text-ink-muted">{hero.lead}</p>
          <div className="mt-s-6 flex flex-wrap gap-s-3">
            <a href={site.bookingUrl} className="btn-primary">{hero.primaryCta}<ArrowRight /></a>
            <a href="#offre" className="btn-secondary">{hero.secondaryCta}</a>
          </div>

          <dl className="mt-s-7 grid max-w-xl grid-cols-3 gap-s-4 border-t border-border pt-s-5">
            {hero.proof.map((p) => (
              <div key={p.label}>
                <dt className="sr-only">{p.label}</dt>
                <dd className="font-display text-heading-2">{p.value}</dd>
                <dd className="mt-1 text-caption text-ink-muted">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          {/* Motif de la lame : un seul pour la composition, jamais derrière du texte. */}
          <span className="blade -right-8 -top-12 hidden w-[220px] lg:block" aria-hidden />
          <div className="relative">
            <DashboardMock />
          </div>
        </div>
      </div>

      <div className="container-page mt-s-8">
        <p className="caption text-center font-display text-label uppercase text-ink-muted">{hero.trustLabel}</p>
        <ul className="mt-s-4 flex flex-wrap items-center justify-center gap-x-s-7 gap-y-s-3">
          {hero.trust.map((t) => (
            <li key={t} className="font-display text-heading-3 text-brand-steel-dark dark:text-ink-muted">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
