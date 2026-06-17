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

  // TODO: replace these with your real business contact info
  email: "hello@lammediaweb.com",
  phone: "(660) 555-0123",

  // TODO: paste your free Calendly (or other scheduler) link here.
  // Leave it as "" for now — the "Book a Free Consult" buttons will simply
  // scroll to the contact form until you add a link.
  bookingUrl: "",

  // TODO: create a free form endpoint at https://formspree.io and paste the
  // URL here so the contact form actually emails you. Until then the form
  // shows a friendly message instead of sending.
  formspreeEndpoint: "",

  // TODO: add your social links (leave "" to hide the icon)
  social: {
    facebook: "",
    instagram: "",
  },
} as const;
