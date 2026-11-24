import { commitments, testimonials } from "@/content/site";
import SectionHeading from "./SectionHeading";
import { CountUp } from "./Motion";
import { d } from "./delay";

export default function Commitments() {
  return (
    <section id="engagements" className="section bg-surface-200">
      <div className="container-page">
        <SectionHeading kicker={commitments.kicker} title={commitments.title} lead={commitments.lead} />

        <dl data-reveal className="mt-s-7 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {commitments.stats.map((s, i) => (
            <div key={s.label} data-reveal="fade" style={d(150 + i * 120)} className="group relative overflow-hidden bg-surface-100 p-s-6 transition-colors hover:bg-surface-200">
              <span style={d(150)} className="bar absolute left-0 top-0 h-[2px] w-full bg-action" aria-hidden />
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-display-lg"><CountUp value={s.value} /></dd>
              <dd className="mt-s-2 text-body-sm text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Témoignages : s'affichent dès que content/site.ts en contient. */}
        {testimonials.length > 0 && (
          <ul className="mt-s-6 grid gap-s-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={t.author} data-reveal style={d(i * 120)} className="card lift">
                <blockquote className="text-body">« {t.quote} »</blockquote>
                <p className="mt-s-4 font-display text-body-sm font-semibold">{t.author}</p>
                <p className="text-caption text-ink-muted">{t.role}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
