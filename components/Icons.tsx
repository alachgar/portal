// Icônes au trait 1,5px, jointures angulaires (règle d'iconographie du brand book).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "miter" as const, strokeLinecap: "square" as const };

export const ArrowUpRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const Check = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="m5 12 5 5 9-10" /></svg>
);
export const Cross = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Plus = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M12 5v14M5 12h14" /></svg>
);
export const Menu = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Lock = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><rect x="5" y="11" width="14" height="9" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);
export const Alert = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M12 4 21 20H3z" /><path d="M12 10v4M12 17v.5" /></svg>
);
