"use client";

import { useState } from "react";

const categories = ["All", "Nature", "Automotive", "Documentary"];

const photos = [
  { id: 1, category: "Nature", title: "Golden Hour Ridge", aspect: "tall" },
  { id: 2, category: "Automotive", title: "Carbon Detail", aspect: "wide" },
  { id: 3, category: "Documentary", title: "Market at Dawn", aspect: "tall" },
  { id: 4, category: "Nature", title: "Storm Break", aspect: "wide" },
  { id: 5, category: "Automotive", title: "Velocity", aspect: "tall" },
  { id: 6, category: "Documentary", title: "The Wait", aspect: "wide" },
  { id: 7, category: "Nature", title: "Fog Valley", aspect: "wide" },
  { id: 8, category: "Automotive", title: "Engine Breath", aspect: "tall" },
  { id: 9, category: "Documentary", title: "Hands at Work", aspect: "tall" },
  { id: 10, category: "Nature", title: "Tide Lines", aspect: "wide" },
  { id: 11, category: "Automotive", title: "Midnight Run", aspect: "tall" },
  { id: 12, category: "Documentary", title: "City Silence", aspect: "wide" },
];

const gradients: Record<string, string[]> = {
  Nature: [
    "linear-gradient(135deg, #1a2e1a 0%, #0d1a0d 100%)",
    "linear-gradient(135deg, #2d4a2d 0%, #1a2e1a 100%)",
    "linear-gradient(135deg, #0d2010 0%, #071208 100%)",
    "linear-gradient(135deg, #1e3a1e 0%, #0f1f0f 100%)",
  ],
  Automotive: [
    "linear-gradient(135deg, #2e1a0d 0%, #1a0d07 100%)",
    "linear-gradient(135deg, #3d2510 0%, #200f05 100%)",
    "linear-gradient(135deg, #1a1008 0%, #0d0804 100%)",
    "linear-gradient(135deg, #2a1a08 0%, #150d04 100%)",
  ],
  Documentary: [
    "linear-gradient(135deg, #0d1a2e 0%, #070d1a 100%)",
    "linear-gradient(135deg, #0f1e35 0%, #08111f 100%)",
    "linear-gradient(135deg, #111828 0%, #090d15 100%)",
    "linear-gradient(135deg, #0a1520 0%, #05090e 100%)",
  ],
};

function getGradient(category: string, id: number) {
  const list = gradients[category] ?? gradients.Nature;
  return list[id % list.length];
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
            Portfolio
          </p>
          <h1 className="text-4xl font-light text-white mb-10" style={{ letterSpacing: "-0.01em" }}>
            Selected Work
          </h1>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-200"
                style={{
                  background: active === cat ? "rgba(255,255,255,0.08)" : "transparent",
                  color: active === cat ? "#fff" : "rgba(255,255,255,0.35)",
                  border: "1px solid",
                  borderColor: active === cat ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                }}
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
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              style={{
                background: getGradient(photo.category, photo.id),
                height: photo.aspect === "tall" ? "420px" : "280px",
              }}
            >
              {/* Placeholder visual noise */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
              >
                <span
                  className="text-xs uppercase tracking-[0.2em] mb-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {photo.category}
                </span>
                <span className="text-base font-light text-white">{photo.title}</span>
              </div>

              {/* Category badge */}
              <div
                className="absolute top-4 left-4 text-xs uppercase tracking-widest opacity-30 group-hover:opacity-0 transition-opacity duration-300"
                style={{ fontSize: "10px", color: "#fff" }}
              >
                {photo.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
