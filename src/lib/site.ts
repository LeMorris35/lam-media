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
  tagline: "We build apps people actually use",

  // TODO: update to your real domain once you have one (used for SEO/share links)
  url: "https://lammediaweb.com",

  // Where you work — used in headings and for local SEO
  city: "Clinton, MO",
  serviceArea: "Clinton, MO & the greater Henry County area",

  email: "lammediaweb@outlook.com",
  phone: "(660) 351-3634",

  // Calendly scheduler — all "Book a Free Consult" buttons open this.
  bookingUrl: "",

  // Formspree endpoint — the contact form submits here and emails you.
  formspreeEndpoint: "https://formspree.io/f/xaqzzvwp",

  // TODO: add your social links (leave "" to hide the icon)
  social: {
    facebook: "",
    instagram: "",
  },

  // Stripe Payment Links (kept for the older /pay route; not shown in the app-studio site).
  payments: {
    carePlan: "https://buy.stripe.com/dRmbJ04Ne9F60kHf9D9EI01",
    buildFee: "https://buy.stripe.com/9B68wOcfGg3ud7t5z39EI00",
  },

  // The apps LAM Media builds — the showcase on the homepage.
  apps: [
    {
      name: "LifeMetricOS",
      tagline: "Your whole student life, in one dashboard.",
      description:
        "An all-in-one life operating system for students. Pull school, money, fitness, health, and habits into one fully customizable dashboard — with a single daily Life Metric Score (0–100) that shows how consistent you've really been.",
      features: [
        "Academics & GPA",
        "Money & budgeting",
        "Fitness & health",
        "Daily Life Metric Score",
        "Fully customizable",
      ],
      url: "https://lifemetricos.com",
      cta: "Open the app",
      status: "live", // "live" | "coming-soon"
      statusLabel: "Live on web · iOS coming soon",
      preview: "dashboard", // "dashboard" | "map"
      // Real in-app screenshots — ordered to alternate themes (dark → warm →
      // dark → green) so the rotating gallery also shows off customization.
      screenshots: [
        "/apps/lifemetricos/shot-1.jpeg", // Classes (midnight)
        "/apps/lifemetricos/shot-3.jpeg", // Calendar (warm)
        "/apps/lifemetricos/shot-2.jpeg", // Health (dark)
        "/apps/lifemetricos/shot-4.jpeg", // Settings (forest)
      ] as string[],
      logo: "layers", // "layers" | "stars"
      accent: "#4f46e5", // brand indigo
      gradient: "", // no gradient — solid indigo brand
    },
    {
      name: "All Fifty",
      tagline: "Collect all 50.",
      description:
        "A playful, interactive U.S. travel tracker — set a status for every state, log trips with photos and notes, check off 127 iconic landmarks, and unlock achievements as your map fills in. Travel journal meets bucket-list game.",
      features: [
        "Interactive 50-state map",
        "127 iconic landmarks",
        "75 achievements",
        "Trip journal + photos",
        "Shareable map image",
      ],
      url: "",
      cta: "Coming soon",
      status: "coming-soon",
      statusLabel: "Coming soon",
      preview: "map",
      // Real screenshots — the two landscape views (periwinkle dashboard + peach
      // map) that fit the card. Hero banner + achievements panel sit in the
      // folder too, ready to swap if we change the card shape later.
      screenshots: [
        "/apps/allfifty/shot-2.jpeg", // dashboard + stats (periwinkle)
        "/apps/allfifty/shot-3.jpeg", // map (sunset/peach)
      ] as string[],
      logo: "stars",
      accent: "#6366f1", // indigo (middle of the brand gradient — readable on white)
      gradient: "linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #d946ef 100%)",
    },
  ],
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
