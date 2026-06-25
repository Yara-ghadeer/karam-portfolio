type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Handwritten signature wordmark for Karam Kabbas, set in the
 * script brand font. Inherits the parent's color.
 */
export default function Logo({ className, title = "Karam Kabbas" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={className}
      style={{
        fontFamily: "var(--font-script), cursive",
        fontSize: "2rem",
        lineHeight: 1,
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      Karam Kabbas
    </span>
  );
}
