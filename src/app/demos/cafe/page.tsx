import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ConceptBanner from "@/components/ConceptBanner";
import { MapPin, Phone, ArrowRight } from "@/components/icons";

// A warm display serif for headings — gives this demo its own identity,
// distinct from the LAM brand site.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

const serif = "[font-family:var(--font-playfair)]";

export const metadata: Metadata = {
  title: "Cobble & Bean Coffee Co. — Concept Demo by LAM Media",
  description:
    "Sample café website concept built by LAM Media & Web Company to showcase menu, hours, and location designs for small businesses.",
};

const menu = [
  {
    name: "Espresso",
    items: [
      ["Espresso", "$3.00", "A rich, classic double shot."],
      ["Cappuccino", "$4.50", "Espresso, steamed milk, airy foam."],
      ["Latte", "$4.75", "Smooth espresso with silky milk."],
      ["Mocha", "$5.25", "Espresso, chocolate, steamed milk."],
      ["Cortado", "$4.25", "Equal parts espresso and warm milk."],
    ],
  },
  {
    name: "Brewed",
    items: [
      ["Drip Coffee", "$2.75", "Our daily small-batch roast."],
      ["Pour Over", "$4.50", "Hand-poured, single origin."],
      ["Cold Brew", "$4.75", "Steeped 18 hours, smooth & bold."],
      ["Nitro Cold Brew", "$5.50", "Creamy, cascading, no dairy."],
    ],
  },
  {
    name: "Not Coffee",
    items: [
      ["Chai Latte", "$4.75", "Spiced black tea & steamed milk."],
      ["Matcha Latte", "$5.00", "Stone-ground ceremonial matcha."],
      ["Hot Cocoa", "$3.75", "Real chocolate, house whip."],
      ["Loose-Leaf Tea", "$3.00", "Ask about today's selection."],
    ],
  },
  {
    name: "From the Bakery",
    items: [
      ["Butter Croissant", "$3.50", "Flaky, baked fresh each morning."],
      ["Cinnamon Roll", "$4.25", "Warm, gooey, cream-cheese glaze."],
      ["Blueberry Muffin", "$3.75", "Bursting with real berries."],
      ["Seasonal Scone", "$3.95", "Rotating flavor — ask our staff."],
    ],
  },
];

const hours = [
  ["Monday – Friday", "6:30a – 6:00p"],
  ["Saturday", "7:00a – 6:00p"],
  ["Sunday", "8:00a – 2:00p"],
];

const navLinks = [
  ["Menu", "#menu"],
  ["Hours", "#hours"],
  ["About", "#about"],
  ["Visit", "#visit"],
];

export default function CafeDemo() {
  return (
    <div className={`${playfair.variable} bg-stone-50 text-stone-800`}>
      <ConceptBanner />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <a href="#top" className={`${serif} text-xl font-extrabold tracking-tight text-stone-900`}>
            Cobble <span className="text-amber-700">&amp;</span> Bean
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-stone-600 hover:text-amber-700">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#menu"
            className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
          >
            Order Ahead
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Small-batch coffee roasters
            </p>
            <h1 className={`${serif} mt-4 text-5xl font-extrabold leading-[1.05] text-stone-900 lg:text-6xl`}>
              Your new favorite cup is brewing.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              Cozy mornings, friendly faces, and coffee roasted right here in the
              shop. Pull up a chair and stay a while.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-800"
              >
                View the Menu
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-base font-semibold text-stone-800 transition-colors hover:border-amber-700 hover:text-amber-700"
              >
                Find Us
              </a>
            </div>
          </div>

          {/* Decorative "photo" block */}
          <div className="relative">
            <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-gradient-to-br from-amber-700 to-amber-900 shadow-2xl">
              <span className="text-[9rem] leading-none drop-shadow-lg">☕</span>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-stone-200 bg-white px-5 py-3 shadow-lg">
              <p className="text-sm text-stone-500">Open today until</p>
              <p className={`${serif} text-xl font-bold text-stone-900`}>6:00 pm</p>
            </div>
            <div className="absolute -right-3 -top-3 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-lg">
              ★ Roasted in-house
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="scroll-mt-20 border-y border-stone-200 bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Our Menu</p>
            <h2 className={`${serif} mt-3 text-4xl font-extrabold text-stone-900`}>Made fresh, all day</h2>
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {menu.map((cat) => (
              <div key={cat.name}>
                <h3 className={`${serif} mb-5 text-2xl font-bold text-stone-900`}>
                  {cat.name}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map(([item, price, desc]) => (
                    <li key={item}>
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-stone-900">{item}</span>
                        <span className="mb-1 flex-1 border-b border-dotted border-stone-300" />
                        <span className="font-semibold text-amber-700">{price}</span>
                      </div>
                      <p className="text-sm text-stone-500">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Visit */}
      <section id="hours" className="scroll-mt-20 bg-stone-50 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
          {/* Hours */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className={`${serif} text-3xl font-extrabold text-stone-900`}>Hours</h2>
            <ul className="mt-6 divide-y divide-stone-100">
              {hours.map(([day, time]) => (
                <li key={day} className="flex items-center justify-between py-3">
                  <span className="font-medium text-stone-700">{day}</span>
                  <span className="font-semibold text-stone-900">{time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Open holidays 8:00a – 12:00p. Hours may vary on game days!
            </p>
          </div>

          {/* Visit */}
          <div id="visit" className="scroll-mt-20 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className={`${serif} text-3xl font-extrabold text-stone-900`}>Visit us</h2>
            {/* Faux map */}
            <div className="relative mt-6 h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#d6d3d1_1px,transparent_1px),linear-gradient(90deg,#d6d3d1_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-9 w-9 text-amber-700" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="flex items-start gap-3 text-stone-700">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                120 Market Street · Your Town, MO
              </p>
              <p className="flex items-center gap-3 text-stone-700">
                <Phone className="h-5 w-5 shrink-0 text-amber-700" />
                (555) 012-3456
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-stone-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Our Story</p>
          <h2 className={`${serif} mt-3 text-4xl font-extrabold text-stone-900`}>
            A little shop with a big heart
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Cobble &amp; Bean started with a simple idea: a genuinely great cup of
            coffee, served by people who know your name. We roast our beans in
            small batches, bake fresh every morning, and save you the best seat
            in the house.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["Roasted in-house", "Fresh beans, every week"],
              ["Locally owned", "Your neighbors, not a chain"],
              ["Free Wi-Fi", "Stay, work, and linger"],
            ].map(([title, sub]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <p className={`${serif} text-lg font-bold text-stone-900`}>{title}</p>
                <p className="mt-1 text-sm text-stone-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 text-stone-300">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className={`${serif} text-2xl font-extrabold text-white`}>
            Cobble <span className="text-amber-500">&amp;</span> Bean
          </p>
          <p className="mt-3 text-sm text-stone-400">120 Market Street · Your Town, MO · (555) 012-3456</p>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-stone-400">
            Website designed &amp; built by{" "}
            <Link href="/" className="font-semibold text-brand-light hover:text-white">
              LAM Media &amp; Web Company
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
