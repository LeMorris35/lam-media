import type { CSSProperties } from "react";
import { Oswald, Anton } from "next/font/google";
import ConceptBanner from "@/components/ConceptBanner";
import SpartansNav from "./SpartansNav";

// Athletic type: Anton for big blocky headlines, Oswald for everything else.
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

// ── Team colors live here. Swap these six values to re-skin for a new team.
const themeVars = {
  "--tm-ink": "#0a0f0a",
  "--tm-green": "#1a7a3c",
  "--tm-green-dark": "#0c3a1e",
  "--tm-gold": "#f2b713",
  "--tm-gold-dark": "#cf8d04",
} as CSSProperties;

export default function SpartansLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={themeVars}
      className={`${anton.variable} ${oswald.variable} min-h-screen bg-white text-[var(--tm-ink)] [font-family:var(--font-oswald)] [&_.font-display]:[font-family:var(--font-anton)]`}
    >
      <ConceptBanner />
      <SpartansNav />
      {children}
    </div>
  );
}
