export default function About() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: "rgba(0,0,0,0.35)" }}>
              About
            </p>
            <h1
              className="font-light leading-tight mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
            >
              Karam
              <br />
              Kabbas
            </h1>

            <div className="space-y-6 text-base font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.6)" }}>
              <p>
                Based between mountains and cities, Karam Kabbas is a photographer whose work
                spans the natural world, the mechanical, and the deeply human. His images chase
                what most people overlook — the texture of silence, the geometry of motion, the
                weight of a single moment.
              </p>
              <p>
                Starting with a film camera at age fourteen, Karam spent years learning to see
                before learning to shoot. That philosophy still drives his practice: presence
                first, craft second, gear never.
              </p>
              <p>
                His documentary work has taken him across the Middle East and Europe. His
                automotive photography has been featured in regional press. His landscape series
                continues to grow with each season.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">
              {[
                { value: "8+", label: "Years shooting" },
                { value: "3", label: "Disciplines" },
                { value: "∞", label: "Stories left" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-light mb-1" style={{ color: "#1a1a1a" }}>{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.4)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait placeholder */}
          <div className="lg:sticky lg:top-28">
            <div
              className="relative w-full aspect-[3/4]"
              style={{
                background: "linear-gradient(160deg, #ebeae5 0%, #dcdbd4 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{ background: "linear-gradient(to top, rgba(220,219,212,0.95) 0%, transparent 100%)" }}
              />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.4)" }}>
                  Photographer
                </p>
                <p className="font-light text-lg" style={{ color: "#1a1a1a" }}>Karam Kabbas</p>
              </div>

              {/* Decorative corner */}
              <div
                className="absolute top-6 right-6 w-12 h-12"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                  borderRight: "1px solid rgba(0,0,0,0.15)",
                }}
              />
            </div>

            <div className="mt-6 space-y-2">
              {["Available for commissions", "Open to editorial work", "Based in — Middle East / Europe"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  <div className="w-1 h-1 rounded-full opacity-40" style={{ background: "#1a1a1a" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
