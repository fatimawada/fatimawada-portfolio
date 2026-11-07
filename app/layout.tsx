import type { Metadata } from "next";
import { Inter, Archivo, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fatimawada.com"),
  title: "Fatima Binta Wada | Technology Entrepreneur",
  description:
    "Fatima Binta Wada is a Technology Entrepreneur building fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Technology Entrepreneur",
    "Founder",
    "Relyvora",
    "Pulseclime",
    "Bite2Care",
    "Nigeria",
  ],
  authors: [{ name: "Fatima Binta Wada" }],
  openGraph: {
    title: "Fatima Binta Wada | Technology Entrepreneur",
    description:
      "I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
    url: "https://fatimawada.com",
    siteName: "Fatima Binta Wada",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fatima_headset_portrait.jpg",
        width: 1200,
        height: 1500,
        alt: "Fatima Binta Wada - Technology Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Binta Wada | Technology Entrepreneur",
    description:
      "I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.",
    images: ["/images/fatima_headset_portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${archivo.variable} ${playfair.variable} antialiased bg-white text-[#111111]`}
      >
        {children}
      </body>
    </html>
  );
}
