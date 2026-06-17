import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "@/components/icons";
import CoffeeCup from "./CoffeeCup";
import TodayHours from "./TodayHours";
import { cafe, menu, hours, formatPrice } from "./data";

const serif = "[font-family:var(--font-playfair)]";

export const metadata: Metadata = {
  title: "Cobble & Bean Coffee Co. — Concept Demo by LAM Media",
  description:
    "Sample café website concept built by LAM Media & Web Company to showcase menu, hours, location, and online ordering for small businesses.",
};

const navLinks = [
  ["Menu", "#menu"],
  ["Hours", "#hours"],
  ["About", "#about"],
  ["Visit", "#visit"],
];

export default function CafeDemo() {
  return (
    <>
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
          <Link
            href="/demos/cafe/order"
            className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
          >
            Order Ahead
          </Link>
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

            {/* Live "today's hours" — fills the space and reflects the real day */}
            <TodayHours />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demos/cafe/order"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-800"
              >
                Order Ahead
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-base font-semibold text-stone-800 transition-colors hover:border-amber-700 hover:text-amber-700"
              >
                View the Menu
              </a>
            </div>
          </div>

          {/* Custom coffee-cup graphic */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-amber-100 to-amber-200/70 shadow-xl">
              <CoffeeCup className="h-3/4 w-3/4" />
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
                <h3 className={`${serif} mb-5 text-2xl font-bold text-stone-900`}>{cat.name}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-stone-900">{item.name}</span>
                        <span className="mb-1 flex-1 border-b border-dotted border-stone-300" />
                        <span className="font-semibold text-amber-700">{formatPrice(item.price)}</span>
                      </div>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/demos/cafe/order"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-800"
            >
              Order Ahead for Pickup
              <ArrowRight className="h-5 w-5" />
            </Link>
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
            <div className="relative mt-6 h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#d6d3d1_1px,transparent_1px),linear-gradient(90deg,#d6d3d1_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-9 w-9 text-amber-700" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="flex items-start gap-3 text-stone-700">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                {cafe.address}
              </p>
              <p className="flex items-center gap-3 text-stone-700">
                <Phone className="h-5 w-5 shrink-0 text-amber-700" />
                {cafe.phone}
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
          <p className="mt-3 text-sm text-stone-400">
            {cafe.address} · {cafe.phone}
          </p>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-stone-400">
            Website designed &amp; built by{" "}
            <Link href="/" className="font-semibold text-brand-light hover:text-white">
              LAM Media &amp; Web Company
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
