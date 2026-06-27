import { site } from "@/lib/site";
import { ArrowRight, Check } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Diagonal brand accent (echoes the logo's slash) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-40 h-[40rem] w-[40rem] rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-mist [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)] lg:block" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-slate shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Independent app studio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            We build apps people{" "}
            <span className="text-brand">actually use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            {site.name} is an independent studio crafting practical tools, maps,
            and software — from personal dashboards to interactive web apps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apps"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
            >
              Explore our apps
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand" /> Built independently</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand" /> Web &amp; mobile</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand" /> Designed to be useful</span>
          </div>
        </div>

        {/* Right: app window mockup */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10">
            <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate">app.lammediaweb.com</div>
            </div>
            <div className="flex gap-3 p-5">
              <div className="hidden w-16 flex-col gap-2 rounded-xl bg-ink p-2.5 sm:flex">
                <div className="h-4 w-4 rounded bg-brand-light" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-2.5 w-full rounded bg-white/20" />
                ))}
              </div>
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-xl border border-line p-3">
                      <div className="h-2 w-8 rounded bg-line" />
                      <div className="mt-2 h-4 w-12 rounded bg-brand" />
                    </div>
                  ))}
                </div>
                <div className="flex h-28 items-end gap-2 rounded-xl border border-line p-3">
                  {[45, 70, 55, 85, 60, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-brand/80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 -top-3 hidden items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm font-bold text-ink">LifeMetricOS — live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
