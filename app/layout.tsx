import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
