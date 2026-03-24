import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ethan Tan — Maker. Builder. Creator.",
  description:
    "16-year-old maker from Singapore. I build things with CNC, 3D printing, and code — from fingerboard accessories to full-stack web apps.",
  openGraph: {
    title: "Ethan Tan — Maker. Builder. Creator.",
    description:
      "16-year-old maker from Singapore. I build things with CNC, 3D printing, and code.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
