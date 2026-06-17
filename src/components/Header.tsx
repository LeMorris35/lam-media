"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { Menu, X, ArrowRight } from "./icons";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

// Where the "Book a Free Consult" buttons point: your scheduler if set,
// otherwise the contact section at the bottom of the page.
export const bookHref = site.bookingUrl || "#contact";
export const bookExternal = Boolean(site.bookingUrl);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-white/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center" aria-label={site.name}>
          {/* Dark logo variant — readable on the light header background */}
          <Image
            src="/lam-logo-dark.png"
            alt={site.name}
            width={264}
            height={102}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookHref}
            {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Book a Free Consult
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href={bookHref}
              {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold text-white"
            >
              Book a Free Consult
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
