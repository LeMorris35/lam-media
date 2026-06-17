import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Free Consult",
    text: "We talk about your business, your goals, and what you need — no pressure and no confusing jargon.",
  },
  {
    n: "02",
    title: "Design & Build",
    text: "I design a site around your brand and build it to be fast, modern, and perfect on phones.",
  },
  {
    n: "03",
    title: "Review Together",
    text: "You see it, you give feedback, and we refine it together until it's exactly right.",
  },
  {
    n: "04",
    title: "Launch & Support",
    text: "We go live — then I keep it hosted, updated, and secure so you never have to worry.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* subtle brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="How It Works"
          title="Simple from start to finish"
          subtitle="No tech headaches. Just a clear, friendly process that gets your business online."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <span className="text-5xl font-extrabold text-brand/30">{step.n}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
