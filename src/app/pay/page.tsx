import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, asset } from "@/lib/site";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: `Make a Payment | ${site.name}`,
  description: "Securely pay your invoice or start your website care plan with LAM Media & Web Company.",
};

const options = [
  {
    name: "Website Care Plan",
    price: "$50",
    cadence: "/month",
    blurb: "Hosting, updates, backups, security, and support to keep your site running smoothly.",
    cta: "Start Care Plan",
    href: site.payments.carePlan,
    featured: true,
  },
  {
    name: "Website Build",
    price: "$150",
    cadence: "one-time",
    blurb: "One-time fee to design and build your custom website.",
    cta: "Pay Build Fee",
    href: site.payments.buildFee,
    featured: false,
  },
];

export default function PayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-mist">
      {/* Top bar */}
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <Link href="/" aria-label={site.name}>
            <Image src={asset("/lam-logo-dark.png")} alt={site.name} width={264} height={102} className="h-9 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-slate transition-colors hover:text-brand">
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink">Make a Payment</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate">
            Securely pay your invoice or start your care plan. All payments are processed by Stripe.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {options.map((o) => (
            <div
              key={o.name}
              className={`flex flex-col rounded-2xl border bg-white p-7 shadow-sm ${
                o.featured ? "border-brand shadow-brand/10" : "border-line"
              }`}
            >
              {o.featured && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  Most common
                </span>
              )}
              <h2 className="text-xl font-bold text-ink">{o.name}</h2>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-ink">{o.price}</span>
                <span className="pb-1 text-slate">{o.cadence}</span>
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-slate">{o.blurb}</p>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold shadow-sm transition-colors ${
                  o.featured
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-line bg-white text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {o.cta}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-slate">
          <Check className="h-4 w-4 text-brand" />
          Secure checkout powered by Stripe — we never see your card details.
        </p>
      </main>

      {/* Slim footer */}
      <footer className="border-t border-line bg-white py-6">
        <div className="mx-auto max-w-4xl px-5 text-center text-sm text-slate">
          {site.name} · {site.phone} · {site.email}
        </div>
      </footer>
    </div>
  );
}
