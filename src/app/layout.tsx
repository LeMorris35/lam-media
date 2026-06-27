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
  title: `${site.name} — Independent App Studio`,
  description: `${site.name} is an independent app studio. ${site.tagline} — practical tools, maps, and web apps like LifeMetricOS.`,
  keywords: [
    "LAM Media",
    "app studio",
    "indie app developer",
    "LifeMetricOS",
    "All Fifty travel map app",
  ],
  openGraph: {
    title: `${site.name} — Independent App Studio`,
    description: `${site.tagline}. Practical tools, maps, and web apps from an independent studio.`,
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
