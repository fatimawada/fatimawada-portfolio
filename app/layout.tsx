import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fatimawada.com"),
  title: "Fatima Binta Wada | Technology Entrepreneur & Full-Stack Developer",
  description:
    "Fatima Binta Wada is a Technology Entrepreneur & Full-Stack Developer building fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Technology Entrepreneur",
    "Full-Stack Developer",
    "Founder",
    "Relyvora",
    "PulseClime",
    "Bite2Care",
    "Nigeria",
  ],
  authors: [{ name: "Fatima Binta Wada" }],
  openGraph: {
    title: "Fatima Binta Wada | Technology Entrepreneur & Full-Stack Developer",
    description:
      "I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
    url: "https://fatimawada.com",
    siteName: "Fatima Binta Wada",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fatima_headset.jpg",
        width: 1200,
        height: 1500,
        alt: "Fatima Binta Wada - Technology Entrepreneur & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Binta Wada | Technology Entrepreneur & Full-Stack Developer",
    description:
      "I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
    images: ["/images/fatima_headset.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-[#111827]`}>
        {children}
      </body>
    </html>
  );
}
