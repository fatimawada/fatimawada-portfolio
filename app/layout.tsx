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
  title: "Fatima Binta Wada | Technology Entrepreneur & Product Builder",
  description:
    "Fatima Binta Wada is a Nigerian technology entrepreneur building ventures and technology-driven solutions across financial infrastructure, climate finance and digital health.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Technology Entrepreneur",
    "Product Builder",
    "Founder",
    "Relyvora",
    "PulseClime",
    "Bite2Care",
    "Nigeria",
  ],
  authors: [{ name: "Fatima Binta Wada" }],
  openGraph: {
    title: "Fatima Binta Wada | Technology Entrepreneur & Product Builder",
    description:
      "I am a Nigerian technology entrepreneur building ventures and technology-driven solutions across financial infrastructure, climate finance and digital health.",
    url: "https://fatimawada.com",
    siteName: "Fatima Binta Wada",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fatima_pink_blazer.jpg",
        width: 1200,
        height: 1500,
        alt: "Fatima Binta Wada - Technology Entrepreneur & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Binta Wada | Technology Entrepreneur & Product Builder",
    description:
      "I am a Nigerian technology entrepreneur building ventures and technology-driven solutions across financial infrastructure, climate finance and digital health.",
    images: ["/images/fatima_pink_blazer.jpg"],
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
