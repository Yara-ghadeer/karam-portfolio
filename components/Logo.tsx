type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Signature-style mark for Karam Kabbas — an oval flourish crossing a
 * stylized "K" with a trailing wave (echoing a hand-drawn autograph).
 * Strokes use `currentColor`, so the mark adapts to the parent color.
 */
export default function Logo({ className = "h-12 w-auto", title = "Karam Kabbas" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 180"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Oval flourish */}
      <ellipse
        cx="140"
        cy="86"
        rx="110"
        ry="50"
        transform="rotate(-15 140 86)"
        strokeWidth="2.4"
      />

      {/* Stylized "K" — stem */}
      <path
        d="M116 34 C 110 30 106 37 109 49 C 113 73 110 113 117 152"
        strokeWidth="4"
      />
      {/* K upper arm */}
      <path d="M112 92 C 130 79 147 64 164 47" strokeWidth="4" />
      {/* K lower arm with terminal curl */}
      <path
        d="M112 94 C 128 106 142 124 150 145 C 153 153 147 160 139 154"
        strokeWidth="4"
      />

      {/* Trailing wave (the rest of the signature) */}
      <path
        d="M170 93 C 182 82 192 101 205 92 C 218 83 228 102 242 92 C 251 86 258 88 266 95"
        strokeWidth="2.8"
      />
    </svg>
  );
}
