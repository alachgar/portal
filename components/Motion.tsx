"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Observe tous les éléments [data-reveal] et leur ajoute `is-in` à l'apparition.
 * Les animations ne s'activent que si <html> porte la classe `motion`
 * (absente quand l'utilisateur demande de réduire les animations).
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  return null;
}

/** Fait défiler le premier nombre d'une valeur (« 18 ans », « +4,2 % », « 82/100 »). */
export function CountUp({ value, className, duration = 1400 }: { value: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    const m = value.match(/\d+(?:,\d+)?/);
    if (!m || m.index === undefined) return;
    const target = parseFloat(m[0].replace(",", "."));
    const dec = (m[0].split(",")[1] || "").length;
    const fmt = (n: number) => value.slice(0, m.index) + n.toFixed(dec).replace(".", ",") + value.slice(m.index! + m[0].length);
    setText(fmt(0));
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setText(fmt(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);

  return <span ref={ref} className={`tabular-nums ${className ?? ""}`}>{text}</span>;
}

