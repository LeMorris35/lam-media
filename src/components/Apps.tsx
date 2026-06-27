import SectionHeading from "./SectionHeading";
import AppShots from "./AppShots";
import { ArrowRight } from "./icons";
import { site } from "@/lib/site";

/* ── Brand logos ─────────────────────────────────────────────────────────
   Drawn from each app's BRAND spec so every card wears its real identity. */

// LifeMetricOS — the real "Graduated Layered Stack" mark, ported verbatim from
// the app's own LogoMark.tsx (three fading white plates on a rounded indigo tile).
function LifeMetricOSLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="LifeMetricOS">
      <rect width="64" height="64" rx="14" fill="#4f46e5" />
      <polygon points="16,20 32,15 48,20 32,25" fill="#ffffff" />
      <polygon points="16,32 32,27 48,32 32,37" fill="#ffffff" opacity="0.78" />
      <polygon points="16,44 32,39 48,44 32,49" fill="#ffffff" opacity="0.56" />
    </svg>
  );
}

// All Fifty — gradient squircle, "All" over "50", framed by four white stars.
function AllFiftyLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="af-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
        <path
          id="af-star"
          fill="#fff"
          d="M0,-6 1.47,-2.02 5.71,-1.85 2.38,0.77 3.53,4.85 0,2.5 -3.53,4.85 -2.38,0.77 -5.71,-1.85 -1.47,-2.02 Z"
        />
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#af-grad)" />
      <use href="#af-star" transform="translate(26 25)" />
      <use href="#af-star" transform="translate(74 25)" />
      <use href="#af-star" transform="translate(19 52)" />
      <use href="#af-star" transform="translate(81 52)" />
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fontFamily="Sora, system-ui, sans-serif"
        fontWeight={700}
        fontSize={19}
        fill="#fff"
      >
        All
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontFamily="Sora, system-ui, sans-serif"
        fontWeight={800}
        fontSize={40}
        fill="#fff"
      >
        50
      </text>
    </svg>
  );
}

/* ── In-card previews ───────────────────────────────────────────────────── */

// LifeMetricOS — clean indigo dashboard mock.
function DashboardPreview({ accent }: { accent: string }) {
  return (
    <div className="h-56 w-full overflow-hidden bg-mist p-4">
      <div className="flex h-full gap-3 rounded-xl bg-white p-3 shadow-md">
        {/* sidebar */}
        <div className="hidden w-14 flex-col gap-2 rounded-lg bg-ink p-2 sm:flex">
          <div className="h-3 w-3 rounded" style={{ background: accent }} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-full rounded bg-white/20" />
          ))}
        </div>
        {/* main */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 rounded-lg border border-line p-2">
                <div className="h-2 w-8 rounded bg-line" />
                <div className="mt-1.5 h-3 w-10 rounded" style={{ background: accent }} />
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-line p-3">
            {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: accent, opacity: 0.85 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// All Fifty — a gradient-filled 50-state grid (first 32 "visited").
function MapPreview({ gradient }: { gradient: string }) {
  return (
    <div className="flex h-56 w-full flex-col justify-center bg-mist p-4">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div
          className="grid grid-cols-10 gap-1 rounded-md p-1"
          style={{ backgroundImage: gradient }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-[2px] ${i < 32 ? "bg-transparent" : "bg-white"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-slate">
          <span style={{ color: "#6366f1" }}>32</span> / 50 states explored
        </p>
      </div>
    </div>
  );
}

export default function Apps() {
  return (
    <section id="apps" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Apps"
          title="Apps we've built"
          subtitle="A growing lineup of tools, maps, and software — designed to be genuinely useful, not just another thing on your phone."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {site.apps.map((app) => {
            const live = app.status === "live";
            return (
              <article
                key={app.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="relative">
                  {app.screenshots.length > 0 ? (
                    <AppShots images={app.screenshots} alt={app.name} />
                  ) : app.preview === "dashboard" ? (
                    <DashboardPreview accent={app.accent} />
                  ) : (
                    <MapPreview gradient={app.gradient} />
                  )}
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur ${
                      live ? "bg-green-500/90 text-white" : "bg-white/90 text-slate"
                    }`}
                  >
                    {app.statusLabel}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* logo + name */}
                  <div className="flex items-center gap-3">
                    {app.logo === "layers" ? (
                      <LifeMetricOSLogo className="h-11 w-11 shrink-0 rounded-xl" />
                    ) : (
                      <AllFiftyLogo className="h-11 w-11 shrink-0 rounded-xl" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold leading-tight text-ink">{app.name}</h3>
                      <p className="text-sm font-medium" style={{ color: app.accent }}>
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed text-slate">{app.description}</p>

                  <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                    {app.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  {live ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                      style={{ background: app.accent }}
                    >
                      {app.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex w-fit items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-slate">
                      {app.cta}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-slate">
          More apps in development — this is just the beginning.
        </p>
      </div>
    </section>
  );
}
