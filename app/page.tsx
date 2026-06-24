import Link from "next/link";

const categories = [
  {
    title: "Nature",
    description: "Landscapes, wilderness, and the raw beauty of the natural world.",
    href: "/portfolio?category=nature",
    accent: "#6ee7b7",
  },
  {
    title: "Automotive",
    description: "Machines in motion — the art of speed and engineering.",
    href: "/portfolio?category=automotive",
    accent: "#fdba74",
  },
  {
    title: "Documentary",
    description: "Real moments, real stories — humanity in its truest form.",
    href: "/portfolio?category=documentary",
    accent: "#93c5fd",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-end min-h-screen pb-24 px-6"
        style={{
          background: "linear-gradient(160deg, #111 0%, #0a0a0a 50%, #050505 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-px h-64 opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, #fff, transparent)" }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
            Visual Storyteller
          </p>
          <h1
            className="font-light leading-none mb-8"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            Karam
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>Kabbas</span>
          </h1>
          <p
            className="max-w-sm text-base font-light leading-relaxed mb-12"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Capturing the extraordinary in nature, the precision of machines,
            and the depth of human stories.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.2 }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #fff, transparent)" }} />
        </div>
      </section>

      {/* Category showcase */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-xs uppercase tracking-[0.4em] mb-14" style={{ color: "rgba(255,255,255,0.25)" }}>
          Disciplines
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative p-10 flex flex-col justify-end min-h-72 transition-all duration-500 hover:bg-white/[0.02]"
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                className="w-8 h-px mb-6 transition-all duration-500 group-hover:w-16"
                style={{ background: cat.accent }}
              />
              <h2 className="text-2xl font-light tracking-wide mb-3 text-white">
                {cat.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                {cat.description}
              </p>
              <span
                className="inline-block mt-6 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: cat.accent }}
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <blockquote
          className="font-light italic max-w-2xl mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          &ldquo;Every frame is a decision. Every light is a choice. Every story deserves to be told.&rdquo;
        </blockquote>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Karam Kabbas
        </span>
        <div className="flex gap-6">
          {["Instagram", "Behance", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
