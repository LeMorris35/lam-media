/* A custom-drawn landscaping scene (SVG) — free, no licensing. */
export default function LawnScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 340"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A freshly mowed lawn with a tree and sunshine"
    >
      <defs>
        <clipPath id="lawnClip">
          <path d="M0 235 Q200 205 400 235 L400 340 L0 340 Z" />
        </clipPath>
        <linearGradient id="lawnSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#eff6ff" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="400" height="340" fill="url(#lawnSky)" />

      {/* sun */}
      <circle cx="322" cy="68" r="40" fill="#fde68a" />
      <circle cx="322" cy="68" r="28" fill="#fcd34d" />

      {/* back hill */}
      <path d="M0 210 Q200 165 400 210 L400 340 L0 340 Z" fill="#86efac" />

      {/* tree */}
      <rect x="62" y="150" width="13" height="62" rx="4" fill="#a16207" />
      <circle cx="68" cy="138" r="32" fill="#16a34a" />
      <circle cx="45" cy="152" r="21" fill="#22c55e" />
      <circle cx="92" cy="152" r="21" fill="#15803d" />

      {/* front lawn */}
      <path d="M0 235 Q200 205 400 235 L400 340 L0 340 Z" fill="#15803d" />

      {/* mowing stripes */}
      <g clipPath="url(#lawnClip)">
        {[0, 80, 160, 240, 320].map((x) => (
          <rect key={x} x={x} y="195" width="40" height="160" fill="#199b4a" />
        ))}
      </g>

      {/* little flower bed */}
      <g>
        <circle cx="320" cy="270" r="7" fill="#f472b6" />
        <circle cx="338" cy="278" r="7" fill="#fb923c" />
        <circle cx="305" cy="282" r="7" fill="#facc15" />
        <circle cx="324" cy="288" r="7" fill="#f472b6" />
      </g>
    </svg>
  );
}
