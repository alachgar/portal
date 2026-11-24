import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nova Tech Trust — Copilote IA pour PMO",
  description:
    "Nova Tech Trust déploie un copilote IA multi-agents qui produit et contrôle vos reportings projet. Diagnostic, build et adoption pour les PME et ETI.",
  icons: { icon: "/brand/nova-tech-trust-symbol.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
