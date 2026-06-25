import type { Metadata } from "next";
import { PageHeader, SpartansFooter } from "../parts";
import { teamStats, leaders, team } from "../data";

export const metadata: Metadata = {
  title: "Stats — Missouri Spartans · Concept Demo by LAM Media",
};

export default function StatsPage() {
  return (
    <>
      <PageHeader kicker={`${team.season} Season`} title="Team Stats" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          {/* team averages */}
          <h2 className="font-display mb-5 flex items-center gap-3 text-3xl uppercase text-[var(--tm-ink)]">
            <span className="h-7 w-1.5 bg-[var(--tm-gold)]" />
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {teamStats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="font-display text-4xl text-[var(--tm-green)]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* statistical leaders */}
          <h2 className="font-display mb-5 mt-14 flex items-center gap-3 text-3xl uppercase text-[var(--tm-ink)]">
            <span className="h-7 w-1.5 bg-[var(--tm-gold)]" />
            Team Leaders
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <div
                key={l.cat}
                className="rounded-xl border border-slate-200 p-6"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--tm-gold-dark)]">
                  {l.cat}
                </p>
                <p className="font-display mt-1 text-2xl uppercase text-[var(--tm-ink)]">
                  {l.player}
                </p>
                <p className="mt-1 text-slate-600">{l.line}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-slate-400">
            Sample stats for this concept demo — these would update through the
            season from real game data.
          </p>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
