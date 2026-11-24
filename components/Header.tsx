"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Menu, Cross, ArrowRight } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });

    // Lien actif selon la section visible
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);

  return (
    <header className={`header-in fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-surface-100/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className={`container-page flex items-center justify-between gap-s-4 transition-[height] duration-300 ${scrolled ? "h-[60px]" : "h-[76px]"}`}>
        <a href="#top" className="logo-shine logo-in flex items-center rounded-md bg-[#f4f4f0] px-1.5 py-1" aria-label={`${site.name}, accueil`}>
          <Image src="/brand/nova-tech-trust-symbol.png" alt="" width={44} height={37} priority className="h-[34px] w-auto" />
          <Image src="/brand/nova-tech-trust-wordmark.png" alt={site.name} width={128} height={36} priority className="ml-1 hidden h-[28px] w-auto sm:block" />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-s-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href ? "true" : undefined}
                  className={`group relative py-2 font-display text-label uppercase transition-colors hover:text-ink ${active === n.href ? "text-ink" : "text-ink-muted"}`}
                >
                  {n.label}
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-action transition-transform duration-300 ${active === n.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-s-2">
          <a href={site.bookingUrl} className="btn-primary hidden sm:inline-flex">Prendre contact<ArrowRight className="nudge h-4 w-4" /></a>
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

      {/* Barre de progression de lecture, en cuivre */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-action" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="container-page pb-s-5 lg:hidden">
          <ul className="is-in flex flex-col divide-y divide-border border-y border-border">
            {nav.map((n, i) => (
              <li key={n.href} className="pop-in" style={{ "--d": `${i * 40}ms` } as React.CSSProperties}>
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
