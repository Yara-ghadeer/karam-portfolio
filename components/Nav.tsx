"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

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

  // Light text/logo over the dark home hero (only while at the top, before
  // the nav gains its light blurred background on scroll).
  const lightText = pathname === "/" && !scrolled;
  const baseColor = lightText ? "#f5f5f0" : "#1a1a1a";
  const activeColor = lightText ? "#ffffff" : "#1a1a1a";
  const dimColor = lightText ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.4)";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,250,248,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" aria-label="Karam Kabbas — home" style={{ color: baseColor, transition: "color 0.3s" }}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.2em] transition-colors duration-200"
              style={{
                color: pathname === href ? activeColor : dimColor,
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
            className="block w-5 h-px transition-all duration-300"
            style={{ background: menuOpen ? "#1a1a1a" : baseColor, transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{ background: menuOpen ? "#1a1a1a" : baseColor, opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{ background: menuOpen ? "#1a1a1a" : baseColor, transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-8 flex flex-col gap-6" style={{ background: "rgba(250,250,248,0.97)" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ color: pathname === href ? "#1a1a1a" : "rgba(0,0,0,0.4)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
