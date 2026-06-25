"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, team } from "./data";
import SpartanHelmet from "./SpartanHelmet";

export default function SpartansNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/demos/spartans" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--tm-gold)]/20 bg-[var(--tm-ink)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/demos/spartans" className="flex items-center gap-2.5">
          <SpartanHelmet className="h-12 w-12" />
          <span className="font-display text-xl uppercase tracking-wide text-white">
            Missouri <span className="text-[var(--tm-gold)]">Spartans</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive(href)
                  ? "text-[var(--tm-gold)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-[var(--tm-ink)] px-5 py-3 md:hidden">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                isActive(href) ? "text-[var(--tm-gold)]" : "text-white/80"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={`tel:${team.contact.phone.replace(/[^0-9]/g, "")}`}
            className="mt-2 block rounded-md bg-[var(--tm-gold)] px-3 py-3 text-center text-sm font-bold uppercase tracking-wide text-[var(--tm-ink)]"
          >
            Call the Coach
          </a>
        </nav>
      )}
    </header>
  );
}
