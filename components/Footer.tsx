const socials = [
  { label: "Instagram", href: "https://www.instagram.com/karamkabbas/" },
  { label: "Behance", href: "https://www.behance.net/karamkabbas" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karam-kabbas/" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(0,0,0,0.35)" }}>
          © {new Date().getFullYear()} Karam Kabbas
        </span>
        <div className="flex gap-6">
          {socials.map((s) => (
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
      </div>
    </footer>
  );
}
