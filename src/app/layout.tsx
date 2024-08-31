import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundEffect from "@/components/BackgroundEffect";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Novak portfolio",
  description:
    "Mark Novak is a designer and developer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className=" relative min-h-screen bg-body text-gray-400">
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
