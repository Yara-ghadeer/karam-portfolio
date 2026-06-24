"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-light tracking-[0.25em] uppercase text-sm"
        >
          Karam Kabbas
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.2em] transition-colors duration-200"
              style={{
                color: pathname === href ? "#fff" : "rgba(255,255,255,0.45)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-8 flex flex-col gap-6" style={{ background: "rgba(10,10,10,0.96)" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ color: pathname === href ? "#fff" : "rgba(255,255,255,0.45)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
