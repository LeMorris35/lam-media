import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import { site } from "@/lib/site";

function DashboardPreview() {
  return (
    <div className="h-56 w-full overflow-hidden bg-mist p-4">
      <div className="flex h-full gap-3 rounded-xl bg-white p-3 shadow-md">
        {/* sidebar */}
        <div className="hidden w-14 flex-col gap-2 rounded-lg bg-ink p-2 sm:flex">
          <div className="h-3 w-3 rounded bg-brand-light" />
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
                <div className="mt-1.5 h-3 w-10 rounded bg-brand" />
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-line p-3">
            {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-brand/80" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPreview() {
  // 50 cells; the first 32 are "visited" (brand), the rest light — evokes "All Fifty"
  return (
    <div className="flex h-56 w-full flex-col justify-center bg-mist p-4">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="grid grid-cols-10 gap-1.5">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm ${i < 32 ? "bg-brand" : "bg-line"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-slate">
          <span className="text-brand">32</span> / 50 states explored
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
                  {app.preview === "dashboard" ? <DashboardPreview /> : <MapPreview />}
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur ${
                      live ? "bg-green-500/90 text-white" : "bg-white/90 text-slate"
                    }`}
                  >
                    {live ? "Live" : "Coming soon"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ink">{app.name}</h3>
                  <p className="mt-1 font-medium text-brand">{app.tagline}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-slate">{app.description}</p>

                  {live ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
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
