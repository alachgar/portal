import type { Config } from "tailwindcss";

// Toutes les valeurs viennent du design system Nova Tech Trust (tokens.json).
// Les couleurs thématiques passent par des variables CSS (app/globals.css)
// pour basculer entre les thèmes Papier (clair) et Graphite (sombre).
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        surface: { 100: v("surface-100"), 200: v("surface-200"), 300: v("surface-300") },
        ink: { DEFAULT: v("ink"), muted: v("ink-muted") },
        border: { DEFAULT: v("border"), strong: v("border-strong") },
        action: { DEFAULT: v("action"), hover: v("action-hover"), on: v("on-action") },
        success: { DEFAULT: v("success"), bg: v("success-bg") },
        warning: { DEFAULT: v("warning"), bg: v("warning-bg") },
        danger: { DEFAULT: v("danger"), bg: v("danger-bg") },
        brand: {
          graphite: "#393837",
          "steel-light": "#e4e6e5",
          steel: "#adb1b2",
          "steel-dark": "#787c7d",
          "copper-light": "#eebf8f",
          copper: "#b37b4a",
          "copper-deep": "#7f4d2a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["56px", { lineHeight: "60px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "display-lg": ["40px", { lineHeight: "44px", letterSpacing: "-0.005em", fontWeight: "700" }],
        "heading-1": ["32px", { lineHeight: "38px", fontWeight: "700" }],
        "heading-2": ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "heading-3": ["20px", { lineHeight: "26px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        caption: ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        kicker: ["12px", { lineHeight: "16px", letterSpacing: "0.32em", fontWeight: "600" }],
        label: ["13px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
      },
      spacing: {
        "s-1": "4px", "s-2": "8px", "s-3": "12px", "s-4": "16px", "s-5": "24px",
        "s-6": "32px", "s-7": "48px", "s-8": "64px", "s-9": "96px",
      },
      borderRadius: { none: "0", sm: "2px", md: "4px", lg: "8px", pill: "999px" },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        emboss: "var(--shadow-emboss)",
      },
      backgroundImage: {
        "gradient-copper": "linear-gradient(135deg, #eebf8f 0%, #b37b4a 50%, #7f4d2a 100%)",
        "gradient-steel": "linear-gradient(135deg, #e4e6e5 0%, #adb1b2 55%, #787c7d 100%)",
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
