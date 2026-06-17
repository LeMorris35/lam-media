import { Poppins } from "next/font/google";
import ConceptBanner from "@/components/ConceptBanner";

// Friendly geometric sans — gives the landscaping demo its own identity.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function LawnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} min-h-screen bg-white text-gray-700`}>
      <ConceptBanner />
      {children}
    </div>
  );
}
