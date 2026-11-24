import { hero, site } from "@/content/site";
import DashboardMock from "./DashboardMock";
import { ArrowRight } from "./Icons";
import { CountUp } from "./Motion";
import { d } from "./delay";

// Met en valeur la fin du titre (« sans eux. ») avec un filet cuivré qui se trace.
function Title({ text }: { text: string }) {
  const accent = "sans eux.";
  if (!text.endsWith(accent)) return <>{text}</>;
  return <>{text.slice(0, -accent.length)}<span className="accent-line">{accent}</span></>;
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-s-8 pt-32 sm:pb-s-9 sm:pt-40">
      <div className="container-page relative grid items-center gap-s-7 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p data-reveal="fade" className="kicker mb-s-4 inline-flex items-center gap-s-3">
            <span data-reveal="line" style={d(200)} className="h-px w-10 bg-action" aria-hidden />
            {hero.kicker}
          </p>
          <h1 data-reveal style={d(80)} className="font-display text-[40px] font-extrabold leading-[46px] tracking-[-0.01em] sm:text-display-xl">
            <Title text={hero.title} />
          </h1>
          <p data-reveal style={d(220)} className="mt-s-5 max-w-xl text-body-lg text-ink-muted">{hero.lead}</p>
          <div data-reveal style={d(320)} className="mt-s-6 flex flex-wrap gap-s-3">
            <a href={site.bookingUrl} className="btn-primary">{hero.primaryCta}<ArrowRight className="nudge h-4 w-4" /></a>
            <a href="#offre" className="btn-secondary">{hero.secondaryCta}</a>
          </div>

          <dl className="mt-s-7 grid max-w-xl grid-cols-3 gap-s-4 border-t border-border pt-s-5">
            {hero.proof.map((p, i) => (
              <div key={p.label} data-reveal style={d(420 + i * 90)}>
                <dt className="sr-only">{p.label}</dt>
                <dd className="font-display text-heading-2"><CountUp value={p.value} /></dd>
                <dd className="mt-1 text-caption text-ink-muted">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          {/* Motif de la lame : un seul pour la composition, jamais derrière du texte. */}
          <span data-reveal="blade" style={d(900)} className="blade -right-8 -top-12 hidden w-[220px] lg:block" aria-hidden />
          <div data-reveal="scale" style={d(250)} className="float-card relative">
            <DashboardMock />
          </div>
        </div>
      </div>

      <div className="container-page relative mt-s-8">
        <p data-reveal="fade" className="text-center font-display text-label uppercase text-ink-muted">{hero.trustLabel}</p>
        <ul className="mt-s-4 flex flex-wrap items-center justify-center gap-x-s-7 gap-y-s-3">
          {hero.trust.map((t, i) => (
            <li key={t} data-reveal style={d(100 + i * 100)} className="font-display text-heading-3 text-brand-steel-dark transition-colors hover:text-ink dark:text-ink-muted">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
