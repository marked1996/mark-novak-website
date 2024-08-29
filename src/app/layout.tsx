import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import BackgroundEffect from "@/components/BackgroundEffect";
import portretMark from "@/../../public/portret mark.jpg";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Beacon from "@/components/Beacon";
import ScrollToTop from "@/components/ScrollToTop";

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
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-12">
            <header className="lg:sticky lg:top-0 lg:self-start lg:w-1/3 lg:flex-col lg:justify-between lg:py-24 flex flex-col justify-between lg:h-screen">
              <div>
                <div className="flex gap-4 items-center">
                  <h1 className=" text-gray-100 text-4xl sm:text-5xl tracking-tighter font-semibold flex gap-4 items-center justify-center">
                    Mark{" "}
                    <span>
                      <Image
                        width={100}
                        className="h-auto"
                        src={portretMark}
                        alt="Mark Novak portrait"
                        style={{ objectFit: "cover" }}
                      />
                    </span>{" "}
                    Novak
                  </h1>
                </div>
                <h2 className="mt-3 text-lg tracking-tight text-gray-100 sm:text-xl font-medium">
                  UI UX Designer & Frontend developer
                </h2>
                <p className="mt-4 max-w-xs">
                  I build pixel-perfect, engaging, and accessible digital
                  experiences.
                </p>
                <Navigation />
              </div>
              <div className="mt-8 lg:mt-4 inline-flex flex-col items-start">
                <Beacon />
                <p className="text-sm mt-2 text-balance lg:block">
                  I'm always up for a new challenge. Contact me if you think we
                  would be a good fit.
                </p>
                <div className="flex flex-wrap gap-4 mt-2 lg:mt-4">
                  <Link
                    className="text-sm text-gray-100 hover:text-markblue transition-all"
                    href="mailto:novakmark9@gmail.com"
                  >
                    novakmark9@gmail.com
                  </Link>
                  <Link
                    className="text-sm text-gray-100 hover:text-markblue transition-all"
                    href="https://www.linkedin.com/in/mark-novak-102223278/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </header>
            <main className="pt-24 lg:w-2/3 lg:py-24">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
