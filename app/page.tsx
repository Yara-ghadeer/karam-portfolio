import Link from "next/link";

const categories = [
  {
    title: "Street Photography",
    description: "Candid moments and the unscripted rhythm of life in the city.",
    href: "/portfolio?category=street",
    accent: "#2563eb",
  },
  {
    title: "Automotive",
    description: "Machines in motion — the art of speed and engineering.",
    href: "/portfolio?category=automotive",
    accent: "#ea580c",
  },
  {
    title: "Portraits",
    description: "Faces and feeling — capturing character in a single frame.",
    href: "/portfolio?category=portraits",
    accent: "#9333ea",
  },
  {
    title: "Food",
    description: "Texture, color, and craft — making every dish irresistible.",
    href: "/portfolio?category=food",
    accent: "#dc2626",
  },
  {
    title: "Events",
    description: "Energy and atmosphere — the story of a moment as it unfolds.",
    href: "/portfolio?category=events",
    accent: "#0891b2",
  },
  {
    title: "Wedding",
    description: "Love, emotion, and the details that make a day unforgettable.",
    href: "/portfolio?category=wedding",
    accent: "#db2777",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "88vh",
          background: "linear-gradient(180deg, #ffffff 0%, #fafaf8 55%, #f2f1ec 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 42%, rgba(0,0,0,0.02) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col items-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] mb-10" style={{ color: "rgba(0,0,0,0.4)" }}>
            Visual Storyteller
          </p>

          <h1
            className="leading-none mb-2"
            style={{
              fontWeight: 600,
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.03em",
              color: "#1a1a1a",
            }}
          >
            Karam Kabbas
          </h1>

          <div className="w-16 h-px my-10" style={{ background: "rgba(0,0,0,0.25)" }} />

          <p
            className="max-w-xl text-base font-light leading-relaxed mb-12"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            Every frame tells a story — of creativity, of collaboration, of
            results. I make images that inspire: something big, something
            special, something real. Frozen in the space between a heartbeat
            and a breath.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-neutral-900 transition-all duration-300 hover:bg-black hover:text-white"
              style={{ borderColor: "rgba(0,0,0,0.25)" }}
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:text-black"
              style={{ color: "rgba(0,0,0,0.45)" }}
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.3, color: "#1a1a1a" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #1a1a1a, transparent)" }} />
        </div>
      </section>

      {/* Full-bleed work grid */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "4 / 5" }}
            >
              {/* Placeholder fill (swap for a real <Image> later) */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  background: `linear-gradient(140deg, ${cat.accent}cc 0%, ${cat.accent}80 100%)`,
                }}
              />
              {/* Subtle texture */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 12px)",
                }}
              />
              {/* Legibility gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 45%, transparent 70%)",
                }}
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 p-5 md:p-7">
                <h2 className="text-white text-xl md:text-3xl font-light tracking-wide">
                  {cat.title}
                </h2>
                <span className="block mt-2 text-[10px] uppercase tracking-[0.3em] text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-90 group-hover:translate-x-0">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 text-center" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <blockquote
          className="font-light italic max-w-2xl mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
            color: "rgba(0,0,0,0.35)",
          }}
        >
          &ldquo;Every frame is a decision. Every light is a choice. Every story deserves to be told.&rdquo;
        </blockquote>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(0,0,0,0.35)" }}>
          © {new Date().getFullYear()} Karam Kabbas
        </span>
        <div className="flex gap-6">
          {["Instagram", "Behance", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
