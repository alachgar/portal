import type { CSSProperties } from "react";
/** Délai d'apparition en cascade pour [data-reveal]. */
export const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
