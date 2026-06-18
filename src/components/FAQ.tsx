import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Right now the build is free for our first 5 clients — you just cover the $50/month care plan (hosting, updates, security & support). After that, website builds start at $150.",
  },
  {
    q: "How long does it take?",
    a: "Most websites are designed and launched in about 1–2 weeks once you've sent over your content.",
  },
  {
    q: "What do I need to give you?",
    a: "Just the basics: your logo if you have one, a few photos, your list of services, and your hours. I'll walk you through exactly what's needed — no tech knowledge required.",
  },
  {
    q: "What if I don't like the design?",
    a: "We work through it together with revisions until you're happy — and you always see your site before it goes live.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. Once it's built, it's yours — and you own your own domain name too.",
  },
  {
    q: "What does the $50/month cover?",
    a: "Hosting, security, backups, updates, and small changes — so your site stays fast, safe, and current without you having to think about it.",
  },
  {
    q: "Do I need to be tech-savvy?",
    a: "Not at all — that's my job. You run your business, I handle the website.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions? Answered."
          subtitle="The things small-business owners ask me most — before they decide to reach out."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition-colors hover:border-brand/40 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink">
                {f.q}
                <span className="shrink-0 text-2xl leading-none text-brand transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
