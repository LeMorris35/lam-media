import { Store, Wallet, TrendingUp, Handshake } from "./icons";

const values = [
  {
    icon: Store,
    title: "Built for Small Businesses",
    text: "Websites that work as hard as you do.",
  },
  {
    icon: Wallet,
    title: "Affordable Solutions",
    text: "Professional sites without the agency price.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Your Growth",
    text: "Helping you reach more customers and grow.",
  },
  {
    icon: Handshake,
    title: "Local. Reliable. Neighborly.",
    text: "We're here for you, because we're here too.",
  },
];

export default function ValueProps() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden px-5 py-2 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 px-2 py-6 lg:px-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-line">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-bold leading-tight text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-snug text-slate">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
