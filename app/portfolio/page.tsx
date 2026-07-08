"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Street Photography",
  "Automotive",
  "Portraits and Candid",
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
  /** CSS object-position for the grid thumbnail, so a cropped preview still centers on the car */
  focus?: string;
};

const photos: Photo[] = [
  { id: 5, category: "Events", title: "Stage Lights", aspect: "tall" },
  { id: 6, category: "Wedding", title: "First Dance", aspect: "wide" },
  { id: 11, category: "Events", title: "The Crowd", aspect: "tall" },
  { id: 12, category: "Wedding", title: "Vows", aspect: "wide" },
  { id: 17, category: "Events", title: "Confetti", aspect: "wide" },
  { id: 18, category: "Wedding", title: "Golden Toast", aspect: "tall" },
  { id: 19, category: "Automotive", title: "Dust Trail", aspect: "wide", image: "/automotive-karam-15-untitled-9-of-23.jpg" },
  { id: 20, category: "Automotive", title: "Mountain Pass", aspect: "tall", image: "/automotive-karam-19-untitled-5.jpg" },
  { id: 21, category: "Automotive", title: "Colosseum Drive", aspect: "wide", image: "/automotive-karam-03-exterior-1.jpg", focus: "70% center" },
  { id: 22, category: "Automotive", title: "Night Runner", aspect: "wide", image: "/automotive-karam-08-untitled-2-of-32.jpg" },
  { id: 23, category: "Automotive", title: "Homecoming", aspect: "wide", image: "/automotive-karam-17-untitled-2.jpg" },
  { id: 24, category: "Automotive", title: "Estate Arrival", aspect: "wide", image: "/automotive-karam-16-untitled-12.jpg", focus: "68% center" },
  { id: 25, category: "Automotive", title: "Studio Reflection", aspect: "tall", image: "/automotive-karam-04-exterior-2.jpg" },
  { id: 26, category: "Automotive", title: "Black Edition", aspect: "wide", image: "/automotive-karam-07-untitled-2-of-25.jpg", focus: "30% center" },
  { id: 27, category: "Automotive", title: "Rear Profile", aspect: "wide", image: "/automotive-karam-10-untitled-4-of-32.jpg", focus: "30% center" },
  { id: 28, category: "Automotive", title: "After the Rain", aspect: "wide", image: "/automotive-karam-18-untitled-3.jpg", focus: "75% center" },
  { id: 29, category: "Automotive", title: "Copper Glow", aspect: "tall", image: "/automotive-karam-14-untitled-8-of-12.jpg" },
  { id: 30, category: "Automotive", title: "Golden Hour Arrival", aspect: "wide", image: "/automotive-karam-01-exterior-details-1-of-12.jpg", focus: "30% center" },
  { id: 31, category: "Automotive", title: "Underground", aspect: "tall", image: "/automotive-karam-11-untitled-5-of-14.jpg" },
  { id: 32, category: "Automotive", title: "Sunset Boulevard", aspect: "wide", image: "/automotive-karam-05-sv-lwb-5-of-7.jpg", focus: "42% center" },
  { id: 33, category: "Automotive", title: "Desert Palms", aspect: "wide", image: "/automotive-karam-09-untitled-37-of-38.jpg" },
  { id: 34, category: "Automotive", title: "Modern Facade", aspect: "wide", image: "/automotive-karam-12-untitled-5-of-23.jpg", focus: "70% center" },
  { id: 35, category: "Automotive", title: "Twilight Convoy", aspect: "wide", image: "/automotive-karam-02-exterior-details-6-of-12.jpg" },
  { id: 36, category: "Automotive", title: "Face Forward", aspect: "tall", image: "/automotive-karam-13-untitled-7-of-19.jpg" },
  { id: 37, category: "Automotive", title: "Snowbound", aspect: "wide", image: "/automotive-karam-06-untitled-1-of-41.jpg" },
  { id: 38, category: "Food", title: "Stacked & Ready", aspect: "tall", image: "/food-karam-15-untitled-8-of-12.jpg" },
  { id: 39, category: "Food", title: "Double Stack", aspect: "tall", image: "/food-karam-07-untitled-11-of-12.jpg", focus: "50% 45%" },
  { id: 40, category: "Food", title: "Rolled Fresh", aspect: "wide", image: "/food-karam-14-untitled-6-of-27.jpg" },
  { id: 41, category: "Food", title: "Spice Wrap", aspect: "wide", image: "/food-karam-16-untitled-8-of-27.jpg" },
  { id: 42, category: "Food", title: "Neon Nights", aspect: "tall", image: "/food-karam-13-untitled-6-of-12.jpg", focus: "50% 40%" },
  { id: 43, category: "Food", title: "Tropical Pour", aspect: "tall", image: "/food-karam-02-b2b-12.jpg" },
  { id: 44, category: "Food", title: "Garnish & Glow", aspect: "tall", image: "/food-karam-03-b2b-13.jpg", focus: "50% 42%" },
  { id: 45, category: "Food", title: "Golden Fries", aspect: "wide", image: "/food-karam-08-untitled-18-of-27.jpg" },
  { id: 46, category: "Food", title: "Malaysian Bowl", aspect: "wide", image: "/food-karam-11-untitled-4-of-27.jpg" },
  { id: 47, category: "Food", title: "Greek Bowl", aspect: "wide", image: "/food-karam-12-untitled-5-of-27.jpg" },
  { id: 48, category: "Food", title: "The Pour", aspect: "wide", image: "/food-karam-01-b2b-11.jpg" },
  { id: 49, category: "Food", title: "Classic Combo", aspect: "wide", image: "/food-karam-09-untitled-2-of-15.jpg" },
  { id: 50, category: "Food", title: "Fresh Off the Grill", aspect: "tall", image: "/food-karam-10-untitled-3-of-15.jpg" },
  { id: 51, category: "Food", title: "Game Day", aspect: "wide", image: "/food-karam-06-fuze-day-5.jpg", focus: "58% 40%" },
  { id: 52, category: "Food", title: "Halftime Sip", aspect: "tall", image: "/food-karam-05-fuze-day-4.jpg" },
  { id: 53, category: "Food", title: "Bleacher Break", aspect: "wide", image: "/food-karam-04-fuze-day-2.jpg", focus: "70% 40%" },
  { id: 54, category: "Street Photography", title: "Dragon Gate Rush", aspect: "wide", image: "/street-karam-01-342442343-1.jpg" },
  { id: 55, category: "Street Photography", title: "The Dumpling Stand", aspect: "tall", image: "/street-karam-11-untitled-20-of-34.jpg" },
  { id: 56, category: "Street Photography", title: "Offerings", aspect: "tall", image: "/street-karam-15-untitled-30-of-34.jpg" },
  { id: 57, category: "Street Photography", title: "Temple Passage", aspect: "wide", image: "/street-karam-16-untitled-31-of-34.jpg" },
  { id: 58, category: "Street Photography", title: "Night Grill", aspect: "tall", image: "/street-karam-12-untitled-21-of-34.jpg" },
  { id: 59, category: "Street Photography", title: "Central Market", aspect: "wide", image: "/street-karam-13-untitled-25-of-34.jpg" },
  { id: 60, category: "Street Photography", title: "Old Meets New", aspect: "wide", image: "/street-karam-07-untitled-16-of-34.jpg" },
  { id: 61, category: "Street Photography", title: "Lantern Lane", aspect: "wide", image: "/street-karam-04-untitled-12-of-34.jpg" },
  { id: 62, category: "Street Photography", title: "Shopkeeper", aspect: "wide", image: "/street-karam-03-untitled-10-of-34.jpg" },
  { id: 63, category: "Street Photography", title: "Mural Walk", aspect: "wide", image: "/street-karam-09-untitled-18-of-34.jpg" },
  { id: 64, category: "Street Photography", title: "Street Rhythm", aspect: "tall", image: "/street-karam-17-untitled-33-of-34.jpg" },
  { id: 65, category: "Street Photography", title: "Evening Stroll", aspect: "wide", image: "/street-karam-18-untitled-34-of-34.jpg" },
  { id: 66, category: "Street Photography", title: "Quiet Prayer", aspect: "tall", image: "/street-karam-14-untitled-27-of-34.jpg" },
  { id: 67, category: "Street Photography", title: "Night Market Blur", aspect: "wide", image: "/street-karam-02-42414-1-2.jpg" },
  { id: 68, category: "Street Photography", title: "Hanging Lanterns", aspect: "wide", image: "/street-karam-06-untitled-14-of-34.jpg" },
  { id: 69, category: "Street Photography", title: "Watchmaker", aspect: "tall", image: "/street-karam-19-untitled-6-of-34.jpg" },
  { id: 70, category: "Street Photography", title: "Faded Facade", aspect: "wide", image: "/street-karam-05-untitled-13-of-34.jpg" },
  { id: 71, category: "Street Photography", title: "Utility Art", aspect: "wide", image: "/street-karam-08-untitled-17-of-34.jpg" },
  { id: 72, category: "Street Photography", title: "Back Alley", aspect: "wide", image: "/street-karam-10-untitled-19-of-34.jpg" },
  { id: 78, category: "Street Photography", title: "Street Scene", aspect: "wide", image: "/street-karam-20-untitled-4-of-6.jpg" },
  { id: 73, category: "Portraits and Candid", title: "Golden Profile", aspect: "tall", image: "/portraits-karam-02-untitled-2-of-3.jpg" },
  { id: 74, category: "Portraits and Candid", title: "Smoke & Lace", aspect: "wide", image: "/portraits-karam-04-untitled-20-of-41.jpg" },
  { id: 75, category: "Portraits and Candid", title: "Coffee Break", aspect: "tall", image: "/portraits-karam-01-yarrousha-1-of-1.jpg" },
  { id: 76, category: "Portraits and Candid", title: "Forehead Kiss", aspect: "wide", image: "/portraits-karam-03-untitled-2-of-41.jpg" },
  { id: 77, category: "Portraits and Candid", title: "Garden Walk", aspect: "wide", image: "/portraits-karam-05-untitled-29-of-41.jpg" },
  { id: 79, category: "Portraits and Candid", title: "Green Gaze", aspect: "wide", image: "/portraits-karam-06-untitled-1-of-6.jpg" },
  { id: 80, category: "Portraits and Candid", title: "Autumn Crouch", aspect: "tall", image: "/portraits-karam-07-untitled-2-of-6.jpg" },
  { id: 81, category: "Portraits and Candid", title: "Red Hoodie", aspect: "wide", image: "/portraits-karam-08-untitled-3-of-6.jpg" },
  { id: 82, category: "Portraits and Candid", title: "Golden Curtain", aspect: "tall", image: "/portraits-karam-09-untitled-5-of-6.jpg" },
  { id: 83, category: "Portraits and Candid", title: "Coastal Walk", aspect: "wide", image: "/portraits-karam-10-untitled-6-of-6.jpg" },
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
  "Portraits and Candid": [
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
                    style={{ objectPosition: photo.focus ?? "center" }}
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
