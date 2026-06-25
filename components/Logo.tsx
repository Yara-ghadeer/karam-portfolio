type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Signature-style "KK" monogram for Karam Kabbas — an original vector
 * recreation in the spirit of a hand-signed autograph: a tall flourished
 * first K, an overlapping second k, and a long trailing tail with an end
 * loop. Strokes use `currentColor` to adapt to the parent color.
 */
export default function Logo({ className = "h-12 w-auto", title = "Karam Kabbas" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 200"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tall flourish / upper arm of the first K */}
      <path d="M70 150 C 120 105 165 70 210 38" strokeWidth="3" />

      {/* First K — stem with a cursive foot loop */}
      <path
        d="M86 50 C 78 92 72 150 80 188 C 83 200 71 206 60 198 C 51 191 58 178 74 181"
        strokeWidth="4.5"
      />

      {/* First K — lower arm */}
      <path d="M74 132 C 108 150 140 170 168 178" strokeWidth="4.5" />

      {/* Second k — overlapping stem + small bowl */}
      <path d="M176 60 C 168 104 165 150 172 184" strokeWidth="4" />
      <path
        d="M168 138 C 188 126 202 142 188 156 C 202 164 216 174 230 184"
        strokeWidth="4"
      />

      {/* Long trailing signature tail with an end loop */}
      <path
        d="M176 184 C 240 200 308 206 352 188 C 372 180 362 162 344 168 C 330 173 336 190 360 186"
        strokeWidth="3.4"
      />
    </svg>
  );
}
