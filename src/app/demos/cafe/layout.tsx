import { Playfair_Display } from "next/font/google";
import ConceptBanner from "@/components/ConceptBanner";

// Warm display serif — loaded once here and shared by every café page.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

export default function CafeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} min-h-screen bg-stone-50 text-stone-800`}>
      <ConceptBanner />
      {children}
    </div>
  );
}
