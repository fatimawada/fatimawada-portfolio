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
  title: "Fatima Binta Wada | Technology Entrepreneur, Founder & Innovation Leader",
  description:
    "Fatima Binta Wada is a Nigerian technology entrepreneur, founder, and product leader building technology and infrastructure for a more inclusive and sustainable future across financial infrastructure, climate finance, digital health, and AI.",
  keywords: [
    "Fatima Binta Wada",
    "Fatima Wada",
    "Technology Entrepreneur",
    "Founder",
    "Product and Technology Leader",
    "Relyvora",
    "Relyvora Foundation",
    "Social Commerce Trust Infrastructure",
    "Anchor Technologies Limited",
    "PulseClime",
    "Climate Finance Infrastructure",
    "Bite2Care",
    "SnakeHack Africa",
    "Wellcome Trust Snakebite",
    "ChaseFree",
    "Microbiology Bayero University Kano",
    "African Technology Ventures",
    "Nigeria Technology Entrepreneur",
  ],
  authors: [{ name: "Fatima Binta Wada" }],
  openGraph: {
    title: "Fatima Binta Wada | Technology Entrepreneur, Founder & Innovation Leader",
    description:
      "Building technology and infrastructure for a more inclusive and sustainable future.",
    url: "https://fatimawada.com",
    siteName: "Fatima Binta Wada",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fatima-binta-wada.jpg",
        width: 1200,
        height: 1500,
        alt: "Fatima Binta Wada - Technology Entrepreneur & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Binta Wada | Technology Entrepreneur & Founder",
    description:
      "Building technology and infrastructure for a more inclusive and sustainable future.",
    images: ["/images/fatima-binta-wada.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      <body className="min-h-full flex flex-col bg-[#0B0D13] text-[#F6F4EE] selection:bg-[#10B981]/25 selection:text-[#F6F4EE]">
        {children}
      </body>
    </html>
  );
}
