type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Signature-style mark for Karam Kabbas — a flourished "K" initial
 * flowing into a trailing wave (the rest of the autograph), no oval.
 * Strokes use `currentColor`, so the mark adapts to the parent color.
 */
export default function Logo({ className = "h-11 w-auto", title = "Karam Kabbas" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 270 170"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "K" stem — top entry loop down to a lower curl */}
      <path
        d="M86 34 C 71 27 60 44 68 63 C 76 84 70 118 79 150 C 82 162 73 171 63 162"
        strokeWidth="5"
      />
      {/* K upper arm */}
      <path d="M72 97 C 93 82 112 66 133 49" strokeWidth="5" />
      {/* K lower arm — diagonal sweep crossing downward */}
      <path d="M72 99 C 91 111 108 128 123 149" strokeWidth="5" />

      {/* Trailing signature wave (the rest of the name) */}
      <path
        d="M128 78 C 149 65 162 87 183 76 C 204 65 216 88 239 77 C 250 71 258 73 264 81"
        strokeWidth="3.4"
      />
    </svg>
  );
}
