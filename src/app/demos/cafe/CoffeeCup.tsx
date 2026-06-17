/*
  A custom-drawn coffee cup illustration (SVG) — created from scratch, so it's
  completely free to use with no licensing. Colors are warm to match the café.
*/
export default function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="A warm cup of coffee"
    >
      {/* steam */}
      <g stroke="#c98a4b" strokeWidth="5" strokeLinecap="round" opacity="0.5">
        <path d="M100 62 q -12 -10 0 -22 q 12 -12 0 -24" />
        <path d="M120 64 q -12 -10 0 -22 q 12 -12 0 -24" />
        <path d="M140 62 q -12 -10 0 -22 q 12 -12 0 -24" />
      </g>

      {/* saucer */}
      <ellipse cx="120" cy="194" rx="84" ry="16" fill="#ffffff" stroke="#e7d8c4" strokeWidth="3.5" />
      <ellipse cx="120" cy="191" rx="58" ry="9" fill="#f5ece0" />

      {/* handle (drawn before the body so the body covers its base) */}
      <path d="M176 112 c 30 0 30 46 -6 48" stroke="#e7d8c4" strokeWidth="11" strokeLinecap="round" />

      {/* cup body */}
      <path
        d="M64 100 C 64 158 86 182 120 182 C 154 182 176 158 176 100 Z"
        fill="#ffffff"
        stroke="#e7d8c4"
        strokeWidth="3.5"
      />

      {/* rim + coffee */}
      <ellipse cx="120" cy="100" rx="56" ry="15" fill="#ffffff" stroke="#e7d8c4" strokeWidth="3.5" />
      <ellipse cx="120" cy="100" rx="45" ry="11" fill="#6b3410" />

      {/* latte-art heart */}
      <path
        d="M120 107 c -5 -7 -15 -4 -15 3 c 0 6 7 9 15 12 c 8 -3 15 -6 15 -12 c 0 -7 -10 -10 -15 -3 Z"
        fill="#f3e3c8"
      />
    </svg>
  );
}
