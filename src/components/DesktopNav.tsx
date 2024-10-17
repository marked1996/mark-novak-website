import React from "react";
import Image from "next/image";
import Link from "next/link";
import portretMark from "@/../../public/portret-mark.jpg";
import Navigation from "@/components/Navigation";
import Cta from "./Cta";
import SkeletonPortrait from "@/components/SkeletonPortrait";
import { Suspense } from "react";

const DesktopNav = () => {
  return (
    <div className="hidden lg:block">
      <header className="lg:sticky lg:top-0  lg:flex-col lg:justify-between px-10 py-10 flex flex-col lg:border-r-[1px] lg:border-slate-500/30 justify-between lg:h-screen md:min-w-56 lg:min-w-60">
        <div>
          {/* <div> */}

          <Link href="/">
            <Suspense fallback={<SkeletonPortrait />}>
              <Image
                width={100}
                className="h-20 w-20 mb-2 rounded-full"
                src={portretMark}
                alt="Mark Novak portrait"
                style={{ objectFit: "cover" }}
              />
            </Suspense>
            <h1 className=" text-gray-100 text-4xl sm:text-4xl tracking-tight font-semibold ">
              Mark Novak
            </h1>
          </Link>
          {/* </div> */}
          <h2 className="mt-3 text-lg tracking-tight text-gray-100 sm:text-xl font-medium">
            UI UX Designer & Front end developer
          </h2>
          <p className="mt-4">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <p className="mt-2">
            Building{" "}
            <Link
              target="_blank"
              className="text-inter text-gray-100 hover:text-markblue transition-all"
              href="https://marked.lemonsqueezy.com/"
            >
              Framer templates.
            </Link>{" "}
            No code. No drama.
          </p>
          <Navigation />
        </div>
        <Cta />
      </header>
    </div>
  );
};

export default DesktopNav;
