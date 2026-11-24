import Image from "next/image";
import { footer, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-100">
      <div className="container-page grid gap-s-7 py-s-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="logo-shine inline-flex rounded-md bg-[#f4f4f0] p-s-2">
            <Image src="/brand/nova-tech-trust-lockup.png" alt={site.name} width={140} height={108} className="h-auto w-[120px]" loading="eager" />
          </div>
          <p className="mt-s-4 max-w-xs text-body-sm text-ink-muted">{footer.about}</p>
        </div>
        {footer.columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="font-display text-label uppercase">{c.title}</p>
            <ul className="mt-s-4 space-y-s-2">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="text-body-sm text-ink-muted transition-colors hover:text-action">{l.label}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-s-2 py-s-5 text-caption text-ink-muted sm:flex-row sm:justify-between">
          <p>© {year} Nova Tech Trust. Tous droits réservés.</p>
          <p>{site.signature}</p>
        </div>
      </div>
    </footer>
  );
}
