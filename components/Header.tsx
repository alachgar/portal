"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Menu, Cross } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-border bg-surface-100/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="container-page flex h-[72px] items-center justify-between gap-s-4">
        <a href="#top" className="flex items-center rounded-md bg-[#f4f4f0] px-1.5 py-1" aria-label={`${site.name}, accueil`}>
          <Image src="/brand/nova-tech-trust-symbol.png" alt="" width={44} height={37} priority className="h-[37px] w-auto" />
          <Image src="/brand/nova-tech-trust-wordmark.png" alt={site.name} width={128} height={36} priority className="ml-1 hidden h-[30px] w-auto sm:block" />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-s-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="font-display text-label uppercase text-ink-muted hover:text-ink">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-s-2">
          <a href={site.bookingUrl} className="btn-primary hidden sm:inline-flex">Prendre contact</a>
          <button
            type="button"
            className="btn-secondary px-3 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <Cross /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="container-page pb-s-5 lg:hidden">
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-s-3 font-display text-label uppercase">{n.label}</a>
              </li>
            ))}
          </ul>
          <a href={site.bookingUrl} onClick={() => setOpen(false)} className="btn-primary mt-s-4 w-full">Prendre contact</a>
        </nav>
      )}
    </header>
  );
}
