"use client";
import { useMemo, useState } from "react";
import { promptLibrary, prompts, type PromptItem } from "@/content/prompts";
import { Check, Copy, Plus, Search } from "./Icons";

type Filter = (typeof promptLibrary.filters)[number];

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function PromptLibrary() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [query, setQuery] = useState("");
  const [withStyle, setWithStyle] = useState(true);

  const items = useMemo(() => {
    const q = normalize(query.trim());
    return prompts.filter((p) => {
      if (filter !== "Tous" && p.category !== filter) return false;
      if (!q) return true;
      return normalize(`${p.title} ${p.when} ${p.output} ${p.prompt} ${p.skill}`).includes(q);
    });
  }, [filter, query]);

  const count = (f: Filter) => (f === "Tous" ? prompts.length : prompts.filter((p) => p.category === f).length);

  return (
    <div>
      {/* Recherche et options */}
      <div className="flex flex-col gap-s-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-md">
          <span className="sr-only">Rechercher un prompt</span>
          <Search className="pointer-events-none absolute left-s-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher : risques, comité, ROI, atelier..."
            className="min-h-[44px] w-full rounded-md border border-border-strong bg-surface-200 py-s-2 pl-10 pr-s-3 text-body text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
          />
        </label>
        <label className="flex cursor-pointer items-start gap-s-2 text-body-sm md:max-w-sm" title={promptLibrary.styleHint}>
          <input
            type="checkbox"
            checked={withStyle}
            onChange={(e) => setWithStyle(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[rgb(var(--action))]"
          />
          <span>
            <span className="font-semibold">{promptLibrary.styleToggle}</span>
            <span className="block text-caption text-ink-muted">{promptLibrary.styleHint}</span>
          </span>
        </label>
      </div>

      {/* Filtres par étape */}
      <div role="tablist" aria-label="Filtrer par étape de projet" className="mt-s-5 flex flex-wrap gap-s-2">
        {promptLibrary.filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`inline-flex min-h-[40px] items-center gap-s-2 rounded-md border px-s-4 font-display text-label uppercase transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action ${
              filter === f ? "border-ink bg-ink text-surface-100" : "border-border-strong bg-surface-200 text-ink hover:bg-surface-300"
            }`}
          >
            {f}
            <span className="font-mono text-caption opacity-70">{count(f)}</span>
          </button>
        ))}
      </div>

      <p className="mt-s-4 text-body-sm text-ink-muted" aria-live="polite">
        {items.length} prompt{items.length > 1 ? "s" : ""}
      </p>

      <ul key={`${filter}-${query}`} className="is-in mt-s-4 grid gap-s-4 lg:grid-cols-2" role="tabpanel">
        {items.map((p, k) => (
          <PromptCard key={p.id} item={p} withStyle={withStyle} delay={Math.min(k, 8) * 50} />
        ))}
      </ul>

      {items.length === 0 && (
        <div className="card mt-s-4 text-center">
          <p className="text-body text-ink-muted">Aucun prompt ne correspond à cette recherche.</p>
          <button type="button" className="btn-ghost mt-s-2" onClick={() => { setQuery(""); setFilter("Tous"); }}>
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}

function PromptCard({ item, withStyle, delay }: { item: PromptItem; withStyle: boolean; delay: number }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const text = withStyle ? `${item.prompt}\n\n${promptLibrary.styleRules}` : item.prompt;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Repli pour les navigateurs sans API presse-papiers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li id={item.id} className="pop-in card flex flex-col gap-s-3" style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      <div className="flex items-center justify-between gap-s-2">
        <span className="badge">{item.category}</span>
        <span className="font-mono text-caption text-ink-muted">{item.id}</span>
      </div>
      <h3 className="font-display text-heading-3">{item.title}</h3>
      <dl className="space-y-s-2 text-body-sm">
        <div>
          <dt className="kicker !tracking-[0.16em]">Quand l'utiliser</dt>
          <dd className="mt-1 text-ink-muted">{item.when}</dd>
        </div>
        <div>
          <dt className="kicker !tracking-[0.16em]">Ce que vous obtenez</dt>
          <dd className="mt-1 text-ink-muted">{item.output}</dd>
        </div>
      </dl>

      <div className="relative">
        <pre
          id={`${item.id}-text`}
          className={`whitespace-pre-wrap break-words rounded-md border border-border bg-surface-100 p-s-4 font-mono text-[13px] leading-5 text-ink ${open ? "" : "max-h-40 overflow-hidden"}`}
        >
          {text}
        </pre>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-md bg-gradient-to-t from-surface-100 to-transparent" aria-hidden />
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-s-2 pt-s-2">
        <button
          type="button"
          className="btn-ghost px-0"
          aria-expanded={open}
          aria-controls={`${item.id}-text`}
          onClick={() => setOpen(!open)}
        >
          <Plus className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
          {open ? "Réduire" : "Voir le prompt complet"}
        </button>
        <button type="button" onClick={copy} className={copied ? "btn-secondary" : "btn-primary"} aria-live="polite">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copié" : "Copier le prompt"}
        </button>
      </div>
      <p className="font-mono text-caption text-ink-muted">Méthode : {item.skill}</p>
    </li>
  );
}
