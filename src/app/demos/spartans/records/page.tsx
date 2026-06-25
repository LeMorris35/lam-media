import type { Metadata } from "next";
import { PageHeader, SpartansFooter } from "../parts";
import { records } from "../data";

export const metadata: Metadata = {
  title: "Records — Missouri Spartans · Concept Demo by LAM Media",
};

export default function RecordsPage() {
  return (
    <>
      <PageHeader kicker="Franchise" title="Team Records" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {records.map((r) => (
              <div
                key={r.label}
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-[var(--tm-green-dark)] p-7 text-white"
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, var(--tm-gold) 0 2px, transparent 2px 18px)",
                  }}
                />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--tm-gold)]">
                    {r.label}
                  </p>
                  <p className="font-display mt-2 text-5xl uppercase leading-none text-white">
                    {r.value}
                  </p>
                  <p className="mt-3 text-sm text-white/70">{r.holder}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-slate-400">
            Sample franchise records for this concept demo — these would grow as
            the Spartans make history each season.
          </p>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
