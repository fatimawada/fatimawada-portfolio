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
  title: "Fatima Binta Wada | Technology Innovator, Full-Stack Developer & Product Lead",
  description:
    "Portfolio of Fatima Binta Wada — Nigerian technology innovator, full-stack developer, and technical lead working across digital health, emergency innovation, SaaS, youth AI literacy, and climate resilience.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Technology Innovator",
    "Full-Stack Developer",
    "Product & Technical Lead",
    "Digital Health",
    "Emergency Innovation",
    "Bite2Care",
    "ChaseFree",
    "PulseClime",
    "Wellcome Snakebite Innovation Prize",
    "SnakeHack Africa",
    "Microbiology",
    "Nigeria",
    "African Technology Innovation"
  ],
  authors: [{ name: "Fatima Binta Wada" }],
  openGraph: {
    title: "Fatima Binta Wada | Technology Innovator, Full-Stack Developer & Product Lead",
    description:
      "Building practical technology for problems that matter — across digital health, SaaS automation, AI literacy, and climate resilience.",
    url: "https://fatimawada.com",
    siteName: "Fatima Binta Wada Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Binta Wada | Technology Innovator & Technical Lead",
    description:
      "Building practical technology for problems that matter — digital health, SaaS, youth AI literacy, and climate resilience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#171729] text-[#F2EBDD]">{children}</body>
    </html>
  );
}
