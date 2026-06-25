type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * "KK" monogram for Karam Kabbas.
 * Strokes use `currentColor`, so the logo adapts to whatever
 * text color the parent sets (dark on light header, etc.).
 */
export default function Logo({ className, title = "Karam Kabbas" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 64"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First K */}
      <line x1="14" y1="8" x2="14" y2="56" />
      <path d="M14 33 L37 8" />
      <path d="M14 33 L37 56" />

      {/* Second K */}
      <line x1="52" y1="8" x2="52" y2="56" />
      <path d="M52 33 L75 8" />
      <path d="M52 33 L75 56" />
    </svg>
  );
}
