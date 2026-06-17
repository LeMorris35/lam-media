import Image from "next/image";
import { site } from "@/lib/site";
import { Check } from "./icons";

const highlights = [
  "Based right here in Clinton, MO",
  "Personal, one-on-one service",
  "Affordable — no agency markup",
  "Fast, mobile-first websites",
];

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/5">
          <Image
            src="/lam-banner.png"
            alt={`${site.name} — proudly serving ${site.serviceArea}`}
            width={1942}
            height={809}
            className="h-auto w-full"
          />
        </div>

        {/* Copy */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-brand">
            About {site.shortName}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Your neighbor in the web business
          </h2>

          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate">
            <p>
              {site.name} is a local web design shop based right here in {site.city}.
              I started LAM because I saw too many great local businesses held back
              by no website — or one that&apos;s slow, outdated, and painful to use
              on a phone.
            </p>
            <p>
              Big agencies are expensive and treat small businesses like account
              numbers. I do the opposite: affordable, personal, and built around
              what your business actually needs. When you call, you talk to me.
            </p>
            <p className="font-medium text-ink">
              When you grow, our community grows — that&apos;s why I&apos;m here.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium text-ink">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
