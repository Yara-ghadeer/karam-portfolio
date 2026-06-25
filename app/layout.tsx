import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Karam Kabbas — Photographer",
  description: "Portfolio of Karam Kabbas — Nature, Automotive & Documentary Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable} h-full`} style={{ background: "#fafaf8" }}>
      <body className="min-h-full antialiased" style={{ background: "#fafaf8", color: "#1a1a1a" }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
