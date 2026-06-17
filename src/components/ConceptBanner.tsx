import Link from "next/link";

/*
  Sits at the very top of every demo site. It keeps things honest (clearly
  labels the page as a sample, not a real client) AND acts as a sales pitch
  back to the main LAM site.
*/
export default function ConceptBanner() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-2.5 text-center sm:flex-row sm:text-left">
        <p className="text-sm leading-snug">
          <span className="font-semibold text-brand-light">Concept demo</span>{" "}
          by LAM Media &amp; Web Company — your site would be designed custom for your business.
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/#work" className="text-sm text-white/70 transition-colors hover:text-white">
            ← All demos
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Build mine →
          </Link>
        </div>
      </div>
    </div>
  );
}
