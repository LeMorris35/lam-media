import SectionHeading from "./SectionHeading";
import { bookHref, bookExternal } from "./Header";
import { Check, ArrowRight } from "./icons";

/*
  PRICING — you start with one package.
  When you're ready to show a price, set `startingPrice` below, e.g. "$750".
  Leave it as "" and the card shows "Let's Talk" instead of a number.
*/
const startingPrice = ""; // TODO: e.g. "$750"

const features = [
  "Custom, mobile-friendly design",
  "Up to 5 pages (Home, About, Services, etc.)",
  "Contact form + click-to-call",
  "Google Maps & business hours",
  "Basic local SEO so you get found",
  "Connected to your own domain",
  "Built and launched in about 2 weeks",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest pricing, no surprises"
          subtitle="One simple package to get your business online and growing. Bigger needs? We'll build a custom quote together."
        />

        <div className="mx-auto mt-14 max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border-2 border-brand bg-white shadow-2xl shadow-brand/10">
            <div className="bg-brand px-8 py-3 text-center text-sm font-bold uppercase tracking-wider text-white">
              Most Popular
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-ink">Starter Website</h3>
              <p className="mt-2 text-slate">
                Everything a local business needs to look professional online and
                start bringing in customers.
              </p>

              <div className="mt-6 flex items-end gap-2">
                {startingPrice ? (
                  <>
                    <span className="text-5xl font-extrabold tracking-tight text-ink">
                      {startingPrice}
                    </span>
                    <span className="pb-1.5 text-slate">one-time build</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold tracking-tight text-ink">
                    Let&apos;s Talk
                  </span>
                )}
              </div>
              {startingPrice && (
                <p className="mt-1 text-sm text-slate">Starting price — final quote after your free consult</p>
              )}

              <a
                href={bookHref}
                {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
              >
                Book a Free Consult
                <ArrowRight className="h-5 w-5" />
              </a>

              <ul className="mt-8 space-y-3.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-6 text-center text-sm text-slate">
                Optional <span className="font-semibold text-ink">hosting &amp; care plan</span> available to
                keep your site updated, backed up, and secure.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-slate">
            Need an online store, booking system, or something custom?{" "}
            <a href="#contact" className="font-semibold text-brand hover:underline">
              Let&apos;s talk about it.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
