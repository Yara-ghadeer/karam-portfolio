import Link from "next/link";

const categories = [
  {
    title: "Nature",
    description: "Landscapes, wilderness, and the raw beauty of the natural world.",
    href: "/portfolio?category=nature",
    accent: "#059669",
  },
  {
    title: "Automotive",
    description: "Machines in motion — the art of speed and engineering.",
    href: "/portfolio?category=automotive",
    accent: "#ea580c",
  },
  {
    title: "Documentary",
    description: "Real moments, real stories — humanity in its truest form.",
    href: "/portfolio?category=documentary",
    accent: "#2563eb",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-6"
        style={{
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
            className="font-light leading-none mb-2"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
            }}
          >
            Karam Kabbas
          </h1>

          <div className="w-16 h-px my-10" style={{ background: "rgba(0,0,0,0.25)" }} />

          <p
            className="max-w-md text-base font-light leading-relaxed mb-12"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            Every frame tells a story of creativity, collaboration, and results.
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

      {/* Category showcase */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-xs uppercase tracking-[0.4em] mb-14" style={{ color: "rgba(0,0,0,0.35)" }}>
          Disciplines
        </p>
        <div className="flex flex-col gap-16 md:gap-8">
          {categories.map((cat, i) => {
            const alignEnd = i % 2 === 1;
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group relative block w-full md:w-3/4 ${
                  alignEnd ? "md:ml-auto md:text-right" : "md:mr-auto"
                }`}
              >
                <div
                  className={`flex items-baseline gap-6 ${
                    alignEnd ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className="font-light leading-none select-none transition-colors duration-500"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 6rem)",
                      color: "rgba(0,0,0,0.08)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div className={alignEnd ? "md:text-right" : ""}>
                    <div
                      className={`h-px mb-5 transition-all duration-500 w-10 group-hover:w-20 ${
                        alignEnd ? "md:ml-auto" : ""
                      }`}
                      style={{ background: cat.accent }}
                    />
                    <h2
                      className="text-3xl md:text-4xl font-light tracking-wide mb-3 transition-transform duration-500 group-hover:translate-x-0"
                      style={{ color: "#1a1a1a" }}
                    >
                      {cat.title}
                    </h2>
                    <p
                      className="text-sm leading-relaxed max-w-md"
                      style={{ color: "rgba(0,0,0,0.5)" }}
                    >
                      {cat.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.2em] opacity-50 transition-all duration-300 group-hover:opacity-100 ${
                        alignEnd ? "md:flex-row-reverse" : ""
                      }`}
                      style={{ color: cat.accent }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
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
