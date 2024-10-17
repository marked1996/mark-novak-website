import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundEffect from "@/components/BackgroundEffect";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mark Novak portfolio website",
  description:
    "Mark Novak is a designer and developer who builds accessible, inclusive products and digital experiences for the web.",
  openGraph: {
    title: "Mark Novak portfolio website, showcasing his latest work",
    description:
      "Mark Novak is a designer and developer who builds accessible, inclusive products and digital experiences for the web.",
    url: "https://novakmark.com/",
    type: "website",
    images: [
      {
        url: "https://novakmark.com/portret-mark.jpg",
        alt: "portrait image of Mark Novak",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="relative min-h-screen bg-body text-slate-400">
        <SpeedInsights />
        <Analytics />
        <ScrollToTop />
        <BackgroundEffect />
        <div className="mx-auto min-h-screen  lg:py-0">
          <div className="lg:flex">
            <Navbar />
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
