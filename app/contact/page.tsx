"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/karamkabbas@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New inquiry from ${form.name}`,
          message: form.message,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
      } else {
        setError(data.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setError("Couldn't send the message. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.15)",
    color: "#1a1a1a",
    outline: "none",
    width: "100%",
    padding: "12px 0",
    fontSize: "14px",
    fontWeight: 300,
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontSize: "10px",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: "rgba(0,0,0,0.4)",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: "rgba(0,0,0,0.35)" }}>
              Contact
            </p>
            <h1
              className="font-light mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#1a1a1a" }}
            >
              Let&apos;s work
              <br />
              together
            </h1>
            <p className="text-base font-light leading-relaxed mb-14" style={{ color: "rgba(0,0,0,0.55)" }}>
              Whether it&apos;s a commission, editorial project, or a conversation about
              photography — reach out. I&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              {[
                { label: "Email", value: "karamkabbas@gmail.com" },
                { label: "Based in", value: "Kuala Lumpur" },
                { label: "Available for", value: "Commissions · Editorial · Events" },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    className="block text-xs uppercase tracking-widest mb-1"
                    style={{ color: "rgba(0,0,0,0.35)" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm font-light" style={{ color: "rgba(0,0,0,0.7)" }}>
                    {item.value}
                  </span>
                </div>
              ))}

              <div>
                <span
                  className="block text-xs uppercase tracking-widest mb-3"
                  style={{ color: "rgba(0,0,0,0.35)" }}
                >
                  Elsewhere
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
                      style={{ color: "rgba(0,0,0,0.6)" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full min-h-64">
                <div className="w-10 h-px mb-8" style={{ background: "#059669" }} />
                <h2 className="text-2xl font-light mb-4" style={{ color: "#1a1a1a" }}>Message sent.</h2>
                <p style={{ color: "rgba(0,0,0,0.5)", fontSize: "14px" }}>
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={{ ...inputStyle, caretColor: "#1a1a1a" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, caretColor: "#1a1a1a" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Commission · Collaboration · General"
                    style={{ ...inputStyle, caretColor: "#1a1a1a" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.15)",
                    }}
                  />
                </div>
                {error && (
                  <p className="text-sm" style={{ color: "#b91c1c" }}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="border px-10 py-3.5 text-xs uppercase tracking-[0.25em] text-neutral-900 transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-neutral-900"
                  style={{ borderColor: "rgba(0,0,0,0.25)" }}
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
