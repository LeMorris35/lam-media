import Image from "next/image";
import { site, asset } from "@/lib/site";
import { ArrowRight, Check } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Brand glows + a soft gradient so the banner isn't a flat block */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink to-ink-2" />
        <div className="absolute -left-32 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-light/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-light" />
            Independent app studio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We build apps people{" "}
            <span className="text-brand-light">actually use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {site.name} is an independent studio crafting practical tools, maps,
            and software — from personal dashboards to interactive web apps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apps"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
            >
              Explore our apps
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand-light" /> Built independently</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand-light" /> Web &amp; mobile</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand-light" /> Designed to be useful</span>
          </div>
        </div>

        {/* Right: real apps — LifeMetricOS in a browser frame, All Fifty behind */}
        <div className="relative mt-4 lg:mt-0">
          {/* All Fifty map peeking out behind, tilted */}
          <div className="absolute -bottom-10 -left-4 hidden w-3/5 -rotate-6 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:block">
            <Image
              src={asset("/apps/allfifty/shot-3.jpeg")}
              alt="All Fifty — interactive U.S. travel map"
              width={1176}
              height={712}
              className="h-auto w-full"
            />
          </div>

          {/* LifeMetricOS browser window in front */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-xs text-white/60">
                lifemetricos.com
              </div>
            </div>
            <Image
              src={asset("/apps/lifemetricos/shot-1.jpeg")}
              alt="LifeMetricOS dashboard"
              width={1784}
              height={828}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Floating "live" badge */}
          <div className="absolute -right-3 -top-3 hidden items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm font-bold text-ink">LifeMetricOS — live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
