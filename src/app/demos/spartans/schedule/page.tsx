import type { Metadata } from "next";
import { PageHeader, SpartansFooter } from "../parts";
import { schedule, team } from "../data";

export const metadata: Metadata = {
  title: "Schedule — Missouri Spartans · Concept Demo by LAM Media",
};

export default function SchedulePage() {
  const wins = schedule.filter((g) => g.result === "W").length;
  const losses = schedule.filter((g) => g.result === "L").length;

  return (
    <>
      <PageHeader kicker={`${team.season} Season`} title="Schedule" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <p className="mb-6 font-display text-2xl uppercase text-[var(--tm-ink)]">
            Record:{" "}
            <span className="text-[var(--tm-green)]">
              {wins}–{losses}
            </span>
          </p>

          <div className="space-y-3">
            {schedule.map((g, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                {/* date */}
                <div className="w-16 shrink-0 text-center">
                  <p className="font-display text-2xl leading-none text-[var(--tm-ink)]">
                    {g.date.split(" ")[1]}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {g.date.split(" ")[0]}
                  </p>
                </div>

                {/* opponent */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    <span className="text-slate-400">
                      {g.home ? "vs " : "@ "}
                    </span>
                    {g.opponent}
                  </p>
                  <p className="text-sm text-slate-500">{g.location}</p>
                </div>

                {/* result */}
                <div className="shrink-0 text-right">
                  {g.result ? (
                    <span
                      className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-display text-lg uppercase ${
                        g.result === "W"
                          ? "bg-[var(--tm-green)]/10 text-[var(--tm-green)]"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {g.result} {g.score}
                    </span>
                  ) : (
                    <span className="rounded-md bg-[var(--tm-gold)]/15 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-[var(--tm-gold-dark)]">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm italic text-slate-400">
            Sample schedule for this concept demo — real opponents, dates, and a
            live results feed would be added for the team&apos;s site.
          </p>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
