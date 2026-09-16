import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima Binta Wada — Full-Stack Developer & Technical Lead",
  description:
    "Full-Stack Developer and Technical Lead building digital tools and systems for sustainability, climate resilience, healthcare access, and emergency response.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Full-Stack Developer",
    "Technical Lead",
    "HealthTech",
    "ClimateTech",
    "Emergency Innovation",
    "Next.js",
    "TypeScript",
    "Bite2Care",
    "ChaseFree",
    "PulseClime"
  ],
  authors: [{ name: "Fatima Binta Wada" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAF9] text-[#0B1220]">{children}</body>
    </html>
  );
}
