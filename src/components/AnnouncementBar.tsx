/* Site-wide launch offer banner — sits at the very top of the homepage. */
export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 text-center text-sm">
        <span aria-hidden>🎉</span>
        <span className="font-semibold">Launch offer:</span>
        <span>
          Free website build for our first{" "}
          <span className="font-semibold text-brand-light">5 clients</span> — just $50/mo.
        </span>
        <a href="#contact" className="font-semibold text-brand-light underline-offset-2 hover:underline">
          Claim your spot →
        </a>
      </div>
    </div>
  );
}
