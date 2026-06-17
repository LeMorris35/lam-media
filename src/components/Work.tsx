import SectionHeading from "./SectionHeading";
import { bookHref, bookExternal } from "./Header";
import { ArrowRight } from "./icons";

type Project = {
  name: string;
  category: string;
  description: string;
  // Per-industry color theme for the mini preview
  primary: string;
  tint: string;
};

const projects: Project[] = [
  {
    name: "Maple & Main Coffee Co.",
    category: "Café & Coffee Shop",
    description: "A warm, welcoming site with the menu, hours, and an order-ahead button front and center.",
    primary: "#b45309",
    tint: "#fef3c7",
  },
  {
    name: "Evergreen Lawn & Landscape",
    category: "Home & Outdoor Services",
    description: "Built to turn visitors into quote requests, with clear services and a simple booking form.",
    primary: "#15803d",
    tint: "#dcfce7",
  },
  {
    name: "Heartland Family Dental",
    category: "Healthcare & Clinics",
    description: "A clean, trustworthy design with easy appointment booking and new-patient info.",
    primary: "#0d9488",
    tint: "#ccfbf1",
  },
];

function MiniPreview({ name, primary, tint }: Project) {
  return (
    <div className="h-52 w-full overflow-hidden p-4" style={{ backgroundColor: tint }}>
      <div className="flex h-full flex-col gap-2.5 rounded-lg bg-white p-3 shadow-md">
        {/* nav */}
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-bold" style={{ color: primary }}>
            {name.split(" ")[0]}
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-6 rounded" style={{ backgroundColor: tint }} />
            <span className="h-1.5 w-6 rounded" style={{ backgroundColor: tint }} />
            <span className="h-1.5 w-6 rounded" style={{ backgroundColor: primary }} />
          </div>
        </div>
        {/* hero */}
        <div className="flex flex-1 flex-col justify-center rounded-md px-3" style={{ backgroundColor: primary }}>
          <div className="h-2 w-3/5 rounded bg-white/90" />
          <div className="mt-1.5 h-2 w-2/5 rounded bg-white/60" />
          <div className="mt-2.5 h-4 w-16 rounded-full bg-white/90" />
        </div>
        {/* cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded p-1.5" style={{ backgroundColor: tint }}>
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: primary }} />
              <div className="mt-1 h-1 w-full rounded bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Designs that mean business"
          subtitle="Concept designs that show our range and style. Your project will be built uniquely for your business — these are just a taste of what's possible."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="relative">
                <MiniPreview {...project} />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate shadow-sm backdrop-blur">
                  Concept
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate">Want to see your business reimagined like this?</p>
          <a
            href={bookHref}
            {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
          >
            Get Your Free Mockup
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
