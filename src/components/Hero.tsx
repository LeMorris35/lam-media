import { site } from "@/lib/site";
import { bookHref, bookExternal } from "./Header";
import { ArrowRight, MapPin, TrendingUp, Star } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Diagonal brand accent in the background (echoes your logo's slash) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-40 h-[40rem] w-[40rem] rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-mist [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)] lg:block" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-slate shadow-sm">
            <MapPin className="h-4 w-4 text-brand" />
            Web design for small businesses in {site.city}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Your Local Partner for{" "}
            <span className="text-brand">Digital Growth.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            Professional, affordable websites for local businesses — built to
            bring you more customers, without the big-agency price tag. Friendly,
            local service you can count on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={bookHref}
              {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
            >
              Book a Free Consult
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              See Our Work
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate">
            <MapPin className="h-4 w-4 text-brand" />
            Proudly serving {site.serviceArea}
          </p>
        </div>

        {/* Right: a CSS "browser window" mockup of a website */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10">
            {/* Browser top bar */}
            <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate">
                lammediaweb.com
              </div>
            </div>

            {/* Fake website content */}
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-16 rounded bg-ink/80" />
                <div className="hidden gap-2 sm:flex">
                  <div className="h-2.5 w-10 rounded bg-line" />
                  <div className="h-2.5 w-10 rounded bg-line" />
                  <div className="h-2.5 w-14 rounded bg-brand" />
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-brand to-brand-dark p-5">
                <div className="h-3 w-3/5 rounded bg-white/90" />
                <div className="mt-2 h-3 w-2/5 rounded bg-white/60" />
                <div className="mt-4 h-6 w-24 rounded-full bg-white/90" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-lg border border-line p-3">
                    <div className="h-6 w-6 rounded-md bg-brand/15" />
                    <div className="mt-2 h-2 w-full rounded bg-line" />
                    <div className="mt-1.5 h-2 w-2/3 rounded bg-line" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent cards */}
          <div className="absolute -left-4 -bottom-5 hidden items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-ink">Mobile-ready</p>
              <p className="text-xs text-slate">Looks great on any device</p>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 hidden items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-bold text-ink">Built to convert</span>
          </div>
        </div>
      </div>
    </section>
  );
}
