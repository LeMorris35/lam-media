import type { Metadata } from "next";
import Link from "next/link";
import LawnScene from "./LawnScene";
import QuoteForm from "./QuoteForm";
import { Grass, Tree, Leaf, Mulch, Scissors, Snow, Check, Star, ArrowRight } from "./LawnIcons";

const head = "[font-family:var(--font-poppins)]";

export const metadata: Metadata = {
  title: "Cedarline Lawn & Landscape — Concept Demo by LAM Media",
  description:
    "Sample landscaping website concept built by LAM Media & Web Company, featuring online quote requests, services, and reviews.",
};

const company = {
  name: "Cedarline Lawn & Landscape",
  phone: "(555) 014-7788",
  area: "Your Town, MO & nearby",
};

const services = [
  { icon: Grass, title: "Lawn Mowing & Edging", text: "Crisp, even cuts and clean edges, every single visit." },
  { icon: Tree, title: "Landscape Design", text: "Custom beds, plantings, and hardscapes that turn heads." },
  { icon: Leaf, title: "Yard & Leaf Cleanup", text: "Seasonal cleanups that make your whole yard shine." },
  { icon: Mulch, title: "Mulch & Garden Beds", text: "Fresh mulch and healthy, weed-free garden beds." },
  { icon: Scissors, title: "Tree & Shrub Trimming", text: "Shaped, healthy trees and tidy, trimmed shrubs." },
  { icon: Snow, title: "Snow Removal", text: "Driveways and walkways cleared before sunrise." },
];

const trust = ["Licensed & Insured", "Free Estimates", "Locally Owned & Operated", "100% Satisfaction Guarantee"];

const gallery = [
  { title: "Backyard Refresh", from: "#16a34a", to: "#15803d" },
  { title: "New Sod Install", from: "#22c55e", to: "#16a34a" },
  { title: "Garden Bed Design", from: "#15803d", to: "#14532d" },
  { title: "Seasonal Cleanup", from: "#4d7c0f", to: "#3f6212" },
];

const reviews = [
  { quote: "Cedarline completely transformed our backyard. Professional, on time, and the result blew us away.", name: "Sarah T." },
  { quote: "Fair price, great communication, and my lawn has never looked better. Highly recommend.", name: "Mike D." },
  { quote: "They handle everything so I don't have to think about it. Worth every penny.", name: "Jenna R." },
];

export default function LawnDemo() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-green-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className={`${head} flex items-center gap-2 text-xl font-extrabold text-green-950`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-white">
              <Grass className="h-5 w-5" />
            </span>
            Cedarline
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {[["Services", "#services"], ["Gallery", "#gallery"], ["Reviews", "#reviews"]].map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-gray-600 hover:text-green-700">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-green-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3.5 py-1.5 text-sm font-medium text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Locally owned · Licensed &amp; insured
            </p>
            <h1 className={`${head} mt-5 text-5xl font-extrabold leading-[1.05] text-green-950 lg:text-6xl`}>
              A yard you&apos;ll be <span className="text-green-700">proud of.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              Reliable lawn care and landscaping for busy homeowners. We&apos;ll keep
              your yard looking its best — so you don&apos;t have to lift a finger.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-green-800"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-green-300 bg-white px-7 py-3.5 text-base font-semibold text-green-800 transition-colors hover:border-green-700"
              >
                Our Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="flex text-yellow-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </span>
                5.0 rating
              </span>
              <span>· 200+ yards served</span>
              <span>· Free estimates</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl">
            <LawnScene className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">What we do</p>
            <h2 className={`${head} mt-3 text-4xl font-extrabold text-green-950`}>Full-service yard care</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className={`${head} mt-5 text-lg font-bold text-green-950`}>{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-green-900 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-3 text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Check className="h-5 w-5" />
              </span>
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">Recent work</p>
            <h2 className={`${head} mt-3 text-4xl font-extrabold text-green-950`}>See the difference</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <div
                key={g.title}
                className="relative flex h-48 items-end overflow-hidden rounded-2xl p-5 shadow-sm"
                style={{ backgroundImage: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
              >
                <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  Sample
                </span>
                <span className={`${head} text-lg font-bold text-white`}>{g.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-20 bg-green-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">Happy neighbors</p>
            <h2 className={`${head} mt-3 text-4xl font-extrabold text-green-950`}>What customers say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm">
                <div className="flex text-yellow-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-gray-700">“{r.quote}”</p>
                <p className={`${head} mt-5 font-bold text-green-950`}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-20 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">Free estimate</p>
            <h2 className={`${head} mt-3 text-4xl font-extrabold text-green-950`}>
              Ready for a greener yard?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Tell us a little about your property and we&apos;ll put together a free,
              no-pressure quote.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "We review your request and reach out within one business day",
                "We schedule a quick visit and give you a clear, written quote",
                "You approve it — and we get your yard looking great",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className={`${head} flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white`}>
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">
              Prefer to call? <span className="font-semibold text-green-800">{company.phone}</span>
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 py-12 text-green-100/80">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className={`${head} flex items-center justify-center gap-2 text-2xl font-extrabold text-white`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <Grass className="h-5 w-5" />
            </span>
            Cedarline
          </p>
          <p className="mt-3 text-sm">
            Serving {company.area} · {company.phone}
          </p>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm">
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
