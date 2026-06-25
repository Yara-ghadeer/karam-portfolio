import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Street Photography",
    description: "Candid moments and the unscripted rhythm of life in the city.",
    href: "/portfolio?category=street",
    accent: "#2563eb",
    image: "/street.jpg",
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
            className="leading-none mb-2 whitespace-nowrap"
            style={{
              fontWeight: 600,
              fontSize: "clamp(2.25rem, 8vw, 6rem)",
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
            I make images that tell a story — of people, places, and the
            moments in between. Every frame is a chance to capture something
            real.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border border-black/25 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-neutral-900 transition-all duration-300 hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-transparent px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-black/45 transition-all duration-300 hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black"
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
              {/* Real image, or gradient placeholder until one is added */}
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      background: `linear-gradient(140deg, ${cat.accent}cc 0%, ${cat.accent}80 100%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 12px)",
                    }}
                  />
                </>
              )}
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

      {/* Footer */}
      <footer
        className="px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(0,0,0,0.35)" }}>
          © {new Date().getFullYear()} Karam Kabbas
        </span>
        <div className="flex gap-6">
          {[
            { label: "Instagram", href: "https://www.instagram.com/karamkabbas/" },
            { label: "Behance", href: "https://www.behance.net/karamkabbas" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/karam-kabbas/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
