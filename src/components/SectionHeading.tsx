type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean; // use on dark backgrounds
};

export default function SectionHeading({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-slate"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
