import Link from "next/link";
import { team } from "./data";
import SpartanHelmet from "./SpartanHelmet";

/* A bold banner that tops every inner page (Roster, Schedule, etc.) */
export function PageHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <section className="relative overflow-hidden bg-[var(--tm-green-dark)]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--tm-gold) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-5 py-12">
        <SpartanHelmet className="h-20 w-20 shrink-0" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--tm-gold)]">
            {kicker}
          </p>
          <h1 className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export function SpartansFooter() {
  return (
    <footer className="bg-[var(--tm-ink)] py-12 text-white/70">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <SpartanHelmet className="h-14 w-14" />
            <div>
              <p className="font-display text-lg uppercase text-white">
                Missouri Spartans
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--tm-gold)]">
                {team.tagline}
              </p>
            </div>
          </div>
          <div className="text-sm">
            <p>{team.contact.location}</p>
            <p>
              {team.contact.phone} ·{" "}
              <a href={`mailto:${team.contact.email}`} className="hover:text-white">
                {team.contact.email}
              </a>
            </p>
            <p className="mt-1 text-xs text-white/50">
              {team.contact.facebookLabel} · {team.contact.instagramLabel} ·{" "}
              {team.contact.followers} followers
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          Website designed &amp; built by{" "}
          <Link href="/" className="font-semibold text-brand-light hover:text-white">
            LAM Media &amp; Web Company
          </Link>
        </div>
      </div>
    </footer>
  );
}
