import type { Metadata } from "next";
import { PageHeader, SpartansFooter } from "../parts";
import { seasons, team } from "../data";

export const metadata: Metadata = {
  title: "History — Missouri Spartans · Concept Demo by LAM Media",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader kicker="Past Seasons" title="Team History" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="relative border-l-2 border-[var(--tm-gold)]/40 pl-8">
            {seasons.map((s) => (
              <div key={s.year} className="relative mb-10 last:mb-0">
                {/* node */}
                <span className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--tm-gold)] bg-[var(--tm-green-dark)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--tm-gold)]" />
                </span>

                <div className="rounded-xl border border-slate-200 p-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="font-display text-4xl uppercase text-[var(--tm-ink)]">
                      {s.year}
                    </h2>
                    <span className="rounded-md bg-[var(--tm-green)]/10 px-3 py-1 font-display text-xl text-[var(--tm-green)]">
                      {s.record}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--tm-gold-dark)]">
                      {s.finish}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-600">{s.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-7 text-center">
            <p className="font-display text-2xl uppercase text-[var(--tm-ink)]">
              The story is just beginning.
            </p>
            <p className="mt-2 text-slate-600">
              Every future season, record, and championship will live here.{" "}
              {team.tagline}
            </p>
          </div>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
