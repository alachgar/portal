import { commitments, testimonials } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Commitments() {
  return (
    <section id="engagements" className="section bg-surface-200">
      <div className="container-page">
        <SectionHeading kicker={commitments.kicker} title={commitments.title} lead={commitments.lead} />

        <dl className="mt-s-7 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {commitments.stats.map((s) => (
            <div key={s.label} className="bg-surface-100 p-s-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-display-lg">{s.value}</dd>
              <dd className="mt-s-2 text-body-sm text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Témoignages : s'affichent dès que content/site.ts en contient. */}
        {testimonials.length > 0 && (
          <ul className="mt-s-6 grid gap-s-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.author} className="card">
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
