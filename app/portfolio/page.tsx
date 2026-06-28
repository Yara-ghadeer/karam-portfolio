"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Street Photography",
  "Automotive",
  "Portraits",
  "Food",
  "Events",
  "Wedding",
];

type Photo = {
  id: number;
  category: string;
  title: string;
  aspect: "tall" | "wide";
  image?: string;
};

const photos: Photo[] = [
  { id: 1, category: "Street Photography", title: "Crosswalk", aspect: "tall" },
  { id: 2, category: "Automotive", title: "Carbon Detail", aspect: "wide", image: "/automotive-karam-1.jpg" },
  { id: 3, category: "Portraits", title: "Quiet Gaze", aspect: "tall" },
  { id: 4, category: "Food", title: "Plated", aspect: "wide" },
  { id: 5, category: "Events", title: "Stage Lights", aspect: "tall" },
  { id: 6, category: "Wedding", title: "First Dance", aspect: "wide" },
  { id: 7, category: "Street Photography", title: "Rainy Avenue", aspect: "wide" },
  { id: 8, category: "Automotive", title: "Midnight Run", aspect: "tall" },
  { id: 9, category: "Portraits", title: "Window Light", aspect: "tall" },
  { id: 10, category: "Food", title: "Fresh Catch", aspect: "wide" },
  { id: 11, category: "Events", title: "The Crowd", aspect: "tall" },
  { id: 12, category: "Wedding", title: "Vows", aspect: "wide" },
  { id: 13, category: "Street Photography", title: "Market Lane", aspect: "tall" },
  { id: 14, category: "Automotive", title: "Velocity", aspect: "wide" },
  { id: 15, category: "Portraits", title: "Studio Mono", aspect: "tall" },
  { id: 16, category: "Food", title: "Morning Brew", aspect: "wide" },
  { id: 17, category: "Events", title: "Confetti", aspect: "wide" },
  { id: 18, category: "Wedding", title: "Golden Toast", aspect: "tall" },
];

const gradients: Record<string, string[]> = {
  "Street Photography": [
    "linear-gradient(135deg, #d4e0f0 0%, #b0c8e6 100%)",
    "linear-gradient(135deg, #cdddf0 0%, #a8c5e8 100%)",
    "linear-gradient(135deg, #dae4f2 0%, #bcd0ed 100%)",
    "linear-gradient(135deg, #d0dcf0 0%, #aec8e6 100%)",
  ],
  Automotive: [
    "linear-gradient(135deg, #f0ddc8 0%, #e0c2a0 100%)",
    "linear-gradient(135deg, #f3e0cc 0%, #e3c8a8 100%)",
    "linear-gradient(135deg, #ecd6bf 0%, #d9bd96 100%)",
    "linear-gradient(135deg, #f1dcc2 0%, #e0c09a 100%)",
  ],
  Portraits: [
    "linear-gradient(135deg, #e8dcf0 0%, #d2bce6 100%)",
    "linear-gradient(135deg, #ecdef2 0%, #d8c2ed 100%)",
    "linear-gradient(135deg, #e2d4ec 0%, #c9aede 100%)",
    "linear-gradient(135deg, #ebddf0 0%, #d4bce6 100%)",
  ],
  Food: [
    "linear-gradient(135deg, #f0d4d4 0%, #e6b0b0 100%)",
    "linear-gradient(135deg, #f2cdcd 0%, #e8a8a8 100%)",
    "linear-gradient(135deg, #f0dad4 0%, #e6bcae 100%)",
    "linear-gradient(135deg, #f0d0cc 0%, #e6aea3 100%)",
  ],
  Events: [
    "linear-gradient(135deg, #cfeaf0 0%, #a3d8e6 100%)",
    "linear-gradient(135deg, #cce8f2 0%, #a8d2ed 100%)",
    "linear-gradient(135deg, #d4eef0 0%, #aedee6 100%)",
    "linear-gradient(135deg, #c8e6f0 0%, #9ed2e6 100%)",
  ],
  Wedding: [
    "linear-gradient(135deg, #f0d4e4 0%, #e6b0cf 100%)",
    "linear-gradient(135deg, #f2cddd 0%, #e8a8c8 100%)",
    "linear-gradient(135deg, #f0dae8 0%, #e6bcd6 100%)",
    "linear-gradient(135deg, #f0d0e0 0%, #e6aecb 100%)",
  ],
};

function getGradient(category: string, id: number) {
  const list = gradients[category] ?? gradients["Street Photography"];
  return list[id % list.length];
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <main className="min-h-screen pt-28 px-6 flex flex-col">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: "rgba(0,0,0,0.35)" }}>
            Portfolio
          </p>
          <h1 className="text-4xl font-light mb-10" style={{ letterSpacing: "-0.01em", color: "#1a1a1a" }}>
            Selected Work
          </h1>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-all duration-200 ${
                  active === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black/40 border-black/10 hover:bg-black hover:text-white hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              style={{
                background: getGradient(photo.category, photo.id),
                height: photo.aspect === "tall" ? "420px" : "280px",
              }}
            >
              {photo.image ? (
                /* Real photo — clickable: subtle zoom + expand icon on hover */
                <>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.25)" }}
                  >
                    <span
                      className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.5)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Empty placeholder — no text, clickable: expand icon on hover */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.15)" }}
                  >
                    <span
                      className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.6)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox popup */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          style={{ background: "rgba(0,0,0,0.9)" }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl font-light leading-none"
          >
            &times;
          </button>
          {lightbox.image ? (
            <img
              src={lightbox.image}
              alt={lightbox.title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] object-contain cursor-default"
            />
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="cursor-default"
              style={{
                width: "min(90vw, 1100px)",
                height: "min(80vh, 720px)",
                background: getGradient(lightbox.category, lightbox.id),
              }}
            />
          )}
        </div>
      )}

      <Footer />
    </main>
  );
}
