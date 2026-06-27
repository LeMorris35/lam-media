import { site } from "@/lib/site";
import { Check } from "./icons";

const highlights = [
  "Independently built & owned",
  "Web and mobile apps",
  "Designed around real problems",
  "A growing lineup — always shipping",
];

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand">
          About {site.shortName}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          An independent studio, building in the open
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate">
          <p>
            {site.name} is a one-person studio building practical software — apps
            that solve real, everyday problems instead of adding to the noise.
          </p>
          <p>
            It started with one idea and a stubborn habit of building things.
            Today it&apos;s a growing lineup of tools and web apps, with more in
            development — and a goal to keep shipping software people genuinely
            reach for.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-medium text-ink">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
