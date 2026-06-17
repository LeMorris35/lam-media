import Image from "next/image";
import { site, asset } from "@/lib/site";
import { Mail, Phone, MapPin } from "./icons";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const telHref = `tel:${site.phone.replace(/[^\d]/g, "")}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-2 text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={asset("/lam-logo.png")}
              alt={site.name}
              width={264}
              height={102}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm leading-relaxed">
              {site.tagline}. Affordable, professional websites for local
              businesses across {site.serviceArea}.
            </p>
            <div className="mt-5 flex gap-3">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.7 0 14.6 0 12.2 0 10.5 1.5 10.5 4.2V6H8v3h2.5v9H14V9Z" />
                  </svg>
                </a>
              )}
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-brand-light" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={telHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-brand-light" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-light" />
                {site.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built by {site.shortName} Media &amp; Web Company.</p>
        </div>
      </div>
    </footer>
  );
}
