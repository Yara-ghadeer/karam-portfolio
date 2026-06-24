import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} h-full`} style={{ background: "#0a0a0a" }}>
      <body className="min-h-full antialiased" style={{ background: "#0a0a0a", color: "#f0f0f0" }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
