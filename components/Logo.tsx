type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * "KK" monogram for Karam Kabbas — two handwritten K's nested into
 * each other using the script brand font. Inherits the parent's color.
 */
export default function Logo({ className, title = "Karam Kabbas" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={className}
      style={{
        fontFamily: "var(--font-script), cursive",
        fontSize: "2.6rem",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
        userSelect: "none",
      }}
    >
      <span aria-hidden="true">K</span>
      <span aria-hidden="true" style={{ marginLeft: "-0.42em" }}>
        K
      </span>
    </span>
  );
}
