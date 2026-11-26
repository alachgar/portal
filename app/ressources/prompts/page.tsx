import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import PromptLibrary from "@/components/PromptLibrary";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Alert } from "@/components/Icons";
import { d } from "@/components/delay";
import { promptLibrary } from "@/content/prompts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bibliothèque de prompts — Nova Tech Trust",
  description: promptLibrary.lead,
};

const contactHref = site.bookingUrl.startsWith("#") ? `/${site.bookingUrl}` : site.bookingUrl;

export default function PromptsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-surface-100/90 backdrop-blur-md">
        <div className="container-page flex h-[60px] items-center justify-between gap-s-4">
          <a href="/" className="logo-shine flex items-center rounded-md bg-[#f4f4f0] px-1.5 py-1" aria-label={`${site.name}, accueil`}>
            <Image src="/brand/nova-tech-trust-symbol.png" alt="" width={44} height={37} priority className="h-[30px] w-auto" />
            <Image src="/brand/nova-tech-trust-wordmark.png" alt={site.name} width={128} height={36} priority className="ml-1 hidden h-[24px] w-auto sm:block" />
          </a>
          <nav aria-label="Fil d'Ariane" className="hidden font-display text-label uppercase text-ink-muted md:block">
            <a href="/" className="hover:text-ink">Accueil</a>
            <span className="mx-s-2" aria-hidden>/</span>
            <a href="/#ressources" className="hover:text-ink">Ressources</a>
            <span className="mx-s-2" aria-hidden>/</span>
            <span className="text-ink" aria-current="page">Prompts</span>
          </nav>
          <a href={contactHref} className="btn-primary">Prendre contact<ArrowRight className="nudge h-4 w-4" /></a>
        </div>
      </header>

      <main>
        <section className="section !pb-s-6">
          <div className="container-page">
            <SectionHeading kicker={promptLibrary.kicker} title={promptLibrary.title} lead={promptLibrary.lead} align="left" />
            <ol className="mt-s-7 grid gap-s-4 md:grid-cols-3">
              {promptLibrary.howTo.map((s, i) => (
                <li key={s.title} data-reveal style={d(i * 120)} className="card flex gap-s-3">
                  <span className="font-mono text-heading-3 text-action">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-heading-3">{s.title}</p>
                    <p className="mt-1 text-body-sm text-ink-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pb-s-8 sm:pb-s-9" aria-label="Prompts">
          <div className="container-page">
            <PromptLibrary />

            <p className="mt-s-6 flex items-start gap-s-2 text-body-sm text-ink-muted">
              <Alert className="mt-0.5 h-4 w-4 shrink-0" /> {promptLibrary.disclaimer}
            </p>
            <p className="mt-s-2 text-caption text-ink-muted">
              {promptLibrary.sourceLabel}{" "}
              <a href={promptLibrary.sourceUrl} className="text-action hover:underline" target="_blank" rel="noopener noreferrer">Voir la source</a>
            </p>
          </div>
        </section>

        <section className="theme-graphite py-s-8">
          <div className="container-page flex flex-col items-start gap-s-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-heading-1">{promptLibrary.cta.title}</h2>
              <p className="mt-s-3 text-body-lg text-ink-muted">{promptLibrary.cta.body}</p>
            </div>
            <a href={contactHref} className="btn-primary shrink-0">{promptLibrary.cta.label}<ArrowRight className="nudge h-4 w-4" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
