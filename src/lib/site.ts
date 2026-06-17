/*
  ────────────────────────────────────────────────────────────────────────
  SITE CONFIG — edit your business details here, in ONE place.
  Anything marked "TODO" should be replaced with your real info before
  you share the site with clients.
  ────────────────────────────────────────────────────────────────────────
*/
export const site = {
  name: "LAM Media & Web Company",
  shortName: "LAM",
  tagline: "Your Local Partner for Digital Growth",

  // TODO: update to your real domain once you have one (used for SEO/share links)
  url: "https://lammediaweb.com",

  // Where you work — used in headings and for local SEO
  city: "Clinton, MO",
  serviceArea: "Clinton, MO & the greater Henry County area",

  email: "lammediaweb@outlook.com",
  phone: "(660) 351-3634",

  // Calendly scheduler — all "Book a Free Consult" buttons open this.
  bookingUrl: "https://calendly.com/lammediaweb/30min",

  // Formspree endpoint — the contact form submits here and emails you.
  formspreeEndpoint: "https://formspree.io/f/xaqzzvwp",

  // TODO: add your social links (leave "" to hide the icon)
  social: {
    facebook: "",
    instagram: "",
  },

  // Stripe Payment Links (Stripe-hosted checkout) — used on the /pay page.
  payments: {
    carePlan: "https://buy.stripe.com/dRmbJ04Ne9F60kHf9D9EI01", // $50/mo care plan
    buildFee: "https://buy.stripe.com/9B68wOcfGg3ud7t5z39EI00", // $150 one-time build
  },
} as const;

/**
 * Where the "Book a Free Consult" / CTA buttons point:
 * your scheduler if set, otherwise the contact section on the page.
 * Defined here (a plain module) so both server and client components can use it.
 */
export const bookHref = site.bookingUrl || "#contact";
export const bookExternal = Boolean(site.bookingUrl);

/**
 * Prefix a file in the /public folder with the deploy base path.
 * On GitHub Pages the site lives under /<repo-name>, so images need that
 * prefix. Locally the base path is empty, so this changes nothing.
 */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
