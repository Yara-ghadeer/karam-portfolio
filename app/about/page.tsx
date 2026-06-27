import Image from "next/image";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen pt-28 px-6 flex flex-col">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: "rgba(0,0,0,0.35)" }}>
              About
            </p>
            <h1
              className="leading-tight mb-10"
              style={{ fontWeight: 600, fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", color: "#1a1a1a" }}
            >
              Karam
              <br />
              Kabbas
            </h1>

            <div className="space-y-6 text-base font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.6)" }}>
              <p>
                I&rsquo;m Karam Kabbas, a photographer and visual storyteller specializing in
                high-quality visual content across photography and videography. Based in
                Kuala Lumpur, Malaysia, I bring over a decade of experience leading teams and
                collaborating with creative professionals to craft engaging visuals across
                platforms and industries. I&rsquo;m available for projects worldwide — on
                location or remotely.
              </p>
              <p>
                As Senior Photographer at Sardar Group, I direct visual content for leading
                automotive brands — Toyota, Lexus, Jaguar, Land Rover and more — producing
                imagery for marketing campaigns, social media, and live events.
              </p>
              <p>
                Earlier, as a photographer with the UNDP in Syria, I led principal photography
                and videography for humanitarian projects including Women For Peace and Cinema
                of Life, producing short documentaries and success stories. My freelance
                practice, spanning 2013 to 2022, carried each assignment from concept to final
                delivery.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">
              {[
                { value: "10+", label: "Years experience" },
                { value: "6", label: "Disciplines" },
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
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/about-karam.jpg"
                alt="Karam Kabbas — black and white portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Decorative corner */}
              <div
                className="absolute top-6 right-6 w-12 h-12"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.4)",
                  borderRight: "1px solid rgba(255,255,255,0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
