import SectionHeading from "./SectionHeading";
import { Code, Server, Search, Palette, TrendingUp, Handshake } from "./icons";

const services = [
  {
    icon: Code,
    title: "Website Design & Build",
    text: "Custom, modern websites designed around your business and the customers you want to reach.",
  },
  {
    icon: Server,
    title: "Hosting & Care Plans",
    text: "We host, update, back up, and secure your site so you never have to think about the tech.",
  },
  {
    icon: Search,
    title: "Local SEO",
    text: "Get found on Google when nearby customers search for exactly what you offer.",
  },
  {
    icon: Palette,
    title: "Branding & Logos",
    text: "Clean logos and brand visuals that make your business look established and trustworthy.",
  },
  {
    icon: TrendingUp,
    title: "Website Redesigns",
    text: "Already have a site that feels dated or slow? We'll modernize it and make it actually work.",
  },
  {
    icon: Handshake,
    title: "Real, Local Support",
    text: "Call or text and reach an actual person — not a help desk three states away.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything you need to grow online"
          subtitle="From your first website to keeping it running smoothly — we handle the digital side so you can focus on running your business."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-ink/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
