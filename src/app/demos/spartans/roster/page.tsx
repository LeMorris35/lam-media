import type { Metadata } from "next";
import { PageHeader, SpartansFooter } from "../parts";
import { roster } from "../data";

export const metadata: Metadata = {
  title: "Roster — Missouri Spartans · Concept Demo by LAM Media",
};

// Group positions into units for a cleaner roster
const units: { name: string; positions: string[] }[] = [
  { name: "Offense", positions: ["QB", "RB", "WR", "TE", "C", "G", "T"] },
  { name: "Defense", positions: ["DE", "DT", "LB", "CB", "S"] },
];

export default function RosterPage() {
  return (
    <>
      <PageHeader kicker="2025 Season" title="Team Roster" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          {units.map((unit) => {
            const players = roster.filter((p) => unit.positions.includes(p.pos));
            return (
              <div key={unit.name} className="mb-14 last:mb-0">
                <h2 className="font-display mb-5 flex items-center gap-3 text-3xl uppercase text-[var(--tm-ink)]">
                  <span className="h-7 w-1.5 bg-[var(--tm-gold)]" />
                  {unit.name}
                </h2>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left">
                    <thead className="bg-[var(--tm-green-dark)] text-xs font-bold uppercase tracking-widest text-white">
                      <tr>
                        <th className="px-4 py-3 sm:px-6">#</th>
                        <th className="px-4 py-3 sm:px-6">Player</th>
                        <th className="px-4 py-3 sm:px-6">Pos</th>
                        <th className="hidden px-4 py-3 sm:table-cell sm:px-6">Ht</th>
                        <th className="hidden px-4 py-3 sm:table-cell sm:px-6">Wt</th>
                        <th className="hidden px-4 py-3 md:table-cell md:px-6">Hometown</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {players.map((p) => (
                        <tr key={p.no} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-display text-xl text-[var(--tm-green)] sm:px-6">
                            {p.no}
                          </td>
                          <td className="px-4 py-3 font-semibold sm:px-6">{p.name}</td>
                          <td className="px-4 py-3 sm:px-6">{p.pos}</td>
                          <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{p.ht}</td>
                          <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{p.wt}</td>
                          <td className="hidden px-4 py-3 text-slate-500 md:table-cell md:px-6">
                            {p.hometown}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
          <p className="mt-2 text-sm italic text-slate-400">
            Sample roster shown for this concept demo — real players and photos
            would be added for the live site.
          </p>
        </div>
      </section>

      <SpartansFooter />
    </>
  );
}
