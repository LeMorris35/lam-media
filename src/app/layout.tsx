import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Web Design in ${site.city}`,
  description: `Affordable, professional websites for small businesses in ${site.serviceArea}. ${site.tagline}.`,
  keywords: [
    "web design Clinton MO",
    "small business website Clinton Missouri",
    "Henry County web design",
    "website designer near me",
    "affordable website small business",
  ],
  openGraph: {
    title: `${site.name} | Web Design in ${site.city}`,
    description: `Affordable, professional websites for small businesses in ${site.serviceArea}.`,
    type: "website",
    images: ["/lam-banner.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
