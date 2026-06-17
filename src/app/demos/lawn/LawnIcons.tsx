/* Simple line icons for the landscaping demo. Inherit color + size from className. */
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

export function Grass({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21c0-5 1.5-8 4-10" />
      <path d="M12 21c0-6 0-10 0-14" />
      <path d="M20 21c0-5-1.5-8-4-10" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function Tree({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22v-5" />
      <path d="M12 17a6 6 0 0 0 5-9 5 5 0 0 0-10 0 6 6 0 0 0 5 9Z" />
    </svg>
  );
}

export function Leaf({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 20c8 1 15-5 15-15 0 0-13-1-15 9-.6 3 0 6 0 6Z" />
      <path d="M5 20C9 14 12 12 17 10" />
    </svg>
  );
}

export function Mulch({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v7" />
      <path d="M8 6l4-3 4 3" />
      <path d="M5 14h14l-1.5 6h-11L5 14Z" />
    </svg>
  );
}

export function Scissors({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 8l12 10M8 16L20 6" />
    </svg>
  );
}

export function Snow({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function Check({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function Star({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function ArrowRight({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
