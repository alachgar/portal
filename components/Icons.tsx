// Icônes au trait 1,5px, jointures angulaires (règle d'iconographie du brand book).
// Chaque tracé porte pathLength="1" : la classe `draw` les fait se dessiner à l'apparition.
import type { ReactNode } from "react";

type P = { className?: string };
const Svg = ({ className, children }: { className: string; children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor"
    strokeWidth={1.5} strokeLinejoin="miter" strokeLinecap="square">{children}</svg>
);
const L = (d: string) => <path d={d} pathLength={1} />;

export const ArrowUpRight = ({ className = "h-4 w-4" }: P) => <Svg className={className}>{L("M7 17 17 7")}{L("M8 7h9v9")}</Svg>;
export const ArrowRight = ({ className = "h-4 w-4" }: P) => <Svg className={className}>{L("M4 12h15")}{L("M13 6l6 6-6 6")}</Svg>;
export const Check = ({ className = "h-5 w-5" }: P) => <Svg className={className}>{L("m5 12 5 5 9-10")}</Svg>;
export const Cross = ({ className = "h-5 w-5" }: P) => <Svg className={className}>{L("M6 6l12 12")}{L("M18 6 6 18")}</Svg>;
export const Plus = ({ className = "h-5 w-5" }: P) => <Svg className={className}>{L("M12 5v14")}{L("M5 12h14")}</Svg>;
export const Menu = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M4 7h16")}{L("M4 12h16")}{L("M4 17h16")}</Svg>;
export const Lock = ({ className = "h-4 w-4" }: P) => <Svg className={className}>{L("M5 11h14v9H5z")}{L("M8 11V8a4 4 0 0 1 8 0v3")}</Svg>;
export const Alert = ({ className = "h-4 w-4" }: P) => <Svg className={className}>{L("M12 4 21 20H3z")}{L("M12 10v4")}{L("M12 17v.5")}</Svg>;

// Offre et méthode
export const Search = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z")}{L("m15.5 15.5 5 5")}</Svg>;
export const Route = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z")}{L("M18 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4z")}{L("M6 8v3a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3")}</Svg>;
export const Cpu = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M7 7h10v10H7z")}{L("M10 10h4v4h-4z")}{L("M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4")}</Svg>;
export const Graduation = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M2 9l10-5 10 5-10 5z")}{L("M6 11v5c3 2 9 2 12 0v-5")}{L("M22 9v5")}</Svg>;

// Indicateurs
export const Clock = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z")}{L("M12 7v5l3 2")}</Svg>;
export const Flag = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M5 21V4")}{L("M5 4h12l-2 4 2 4H5")}</Svg>;
export const Euro = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M17 6.5A7 7 0 1 0 17 17.5")}{L("M4 10h9M4 14h9")}</Svg>;
export const Users = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M9 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z")}{L("M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5")}{L("M16 4.5a3.5 3.5 0 0 1 0 6.5")}{L("M18 14.8c2 .6 3.5 2.3 3.5 5.2")}</Svg>;
export const Database = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z")}{L("M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6")}{L("M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3")}</Svg>;
export const Book = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z")}{L("M20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z")}</Svg>;
export const Chart = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M4 20V4")}{L("M4 20h16")}{L("M8 16v-4M12 16V8M16 16v-6")}</Svg>;
export const Calculator = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M5 3h14v18H5z")}{L("M8 6h8v3H8z")}{L("M8 13h1M12 13h1M16 13h0M8 17h1M12 17h1M16 13v4")}</Svg>;

// Bibliothèque de prompts
export const Copy = ({ className = "h-4 w-4" }: P) => <Svg className={className}>{L("M9 9h11v11H9z")}{L("M5 15H4V4h11v1")}</Svg>;
export const Prompt = ({ className = "h-6 w-6" }: P) => <Svg className={className}>{L("M3 5h18v14H3z")}{L("m7 10 3 2-3 2")}{L("M12 15h5")}</Svg>;
