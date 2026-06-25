import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Phone } from "@/components/icons";
import { asset } from "@/lib/site";
import { SpartansFooter } from "./parts";
import { team, pillars, schedule } from "./data";

export const metadata: Metadata = {
  title: "Missouri Spartans — Concept Demo by LAM Media",
  description:
    "Sample semi-pro football team website concept built by LAM Media & Web Company — roster, schedule, stats, records, and team history.",
};

export default function SpartansHome() {
  const nextGame = schedule.find((g) => !g.result);
  const lastGame = [...schedule].reverse().find((g) => g.result);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[var(--tm-ink)]">
        {/* diagonal field stripes */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, var(--tm-green) 0 3px, transparent 3px 60px)",
          }}
        />
        <img
          src={asset("/spartans/logo.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[30rem] w-auto -translate-y-1/2 opacity-90 drop-shadow-2xl lg:block xl:right-6"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tm-gold)]">
            <span className="h-px w-8 bg-[var(--tm-gold)]" />
            {team.league} · {team.city}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-6xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Missouri{" "}
            <span className="text-[var(--tm-gold)]">Spartans</span> Football
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {team.intro}
          </p>
          <p className="mt-4 font-display text-2xl uppercase italic text-[var(--tm-green)]">
            {team.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demos/spartans/schedule"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--tm-gold)] px-7 py-3.5 text-base font-bold uppercase tracking-wide text-[var(--tm-ink)] transition-colors hover:bg-[var(--tm-gold-dark)]"
            >
              <Calendar className="h-5 w-5" />
              2025 Schedule
            </Link>
            <Link
              href="/demos/spartans/roster"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white transition-colors hover:border-[var(--tm-gold)] hover:text-[var(--tm-gold)]"
            >
              Meet the Roster
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* record strip */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4">
            {[
              ["2025 Record", team.record2025],
              ["Founded", "2025"],
              ["League", "MRFL"],
              ["Followers", team.contact.followers],
            ].map(([label, value]) => (
              <div key={label} className="py-5 text-center">
                <p className="font-display text-3xl text-[var(--tm-gold)]">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT / LAST GAME ── */}
      <section className="bg-[var(--tm-green-dark)] py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          {nextGame && (
            <div className="rounded-xl border border-[var(--tm-gold)]/30 bg-black/20 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--tm-gold)]">
                Next Game
              </p>
              <p className="font-display mt-3 text-3xl uppercase text-white">
                {nextGame.home ? "vs" : "@"} {nextGame.opponent}
              </p>
              <p className="mt-3 flex items-center gap-2 text-white/80">
                <Calendar className="h-5 w-5 text-[var(--tm-gold)]" />
                {nextGame.date}, {team.season}
              </p>
              <p className="mt-1 flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5 text-[var(--tm-gold)]" />
                {nextGame.location}
              </p>
            </div>
          )}
          {lastGame && (
            <div className="rounded-xl border border-white/10 bg-black/20 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                Last Result
              </p>
              <p className="font-display mt-3 flex items-center gap-3 text-3xl uppercase text-white">
                <span
                  className={
                    lastGame.result === "W"
                      ? "text-[var(--tm-gold)]"
                      : "text-red-400"
                  }
                >
                  {lastGame.result}
                </span>
                {lastGame.score}
              </p>
              <p className="mt-3 text-white/80">
                {lastGame.home ? "vs" : "@"} {lastGame.opponent}
              </p>
              <Link
                href="/demos/spartans/schedule"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-[var(--tm-gold)] hover:underline"
              >
                Full schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── MISSION / PILLARS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--tm-green)]">
              More Than Football
            </p>
            <h2 className="font-display mt-3 text-4xl uppercase text-[var(--tm-ink)] sm:text-5xl">
              Faith. Family. Legacy.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We support men&apos;s mental health, lift up our families, and build
              our community — on and off the field. Strong men. Strong families.
              Stronger Spartans.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-7 text-center"
              >
                <p className="font-display text-3xl uppercase text-[var(--tm-green)]">
                  You {p.title}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACH / CONTACT ── */}
      <section className="bg-[var(--tm-ink)] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[auto_1fr]">
          <div className="flex justify-center">
            <img
              src={asset("/spartans/coach.png")}
              alt={`${team.coach}, Head Coach & Owner of the Missouri Spartans`}
              className="h-44 w-44 rounded-full border-4 border-[var(--tm-gold)] object-cover object-[center_top]"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--tm-gold)]">
              {team.coachTitle}
            </p>
            <h2 className="font-display mt-2 text-4xl uppercase text-white">
              {team.coach}
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Want to join the team, sponsor the Spartans, or book us for an event?
              Reach out — we&apos;d love to hear from you.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <a
                href={`tel:${team.contact.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--tm-gold)] px-6 py-3 font-bold uppercase tracking-wide text-[var(--tm-ink)] transition-colors hover:bg-[var(--tm-gold-dark)]"
              >
                <Phone className="h-5 w-5" />
                {team.contact.phone}
              </a>
              <a
                href={`mailto:${team.contact.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-[var(--tm-gold)] hover:text-[var(--tm-gold)]"
              >
                Email the Coach
              </a>
            </div>
          </div>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
