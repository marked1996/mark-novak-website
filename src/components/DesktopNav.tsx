import React from "react";
import Image from "next/image";
import Link from "next/link";
import portretMark from "@/../../public/portret mark.jpg";
import Navigation from "@/components/Navigation";
import Cta from "./Cta";

const DesktopNav = () => {
  return (
    <div className="hidden lg:block">
      <header className="lg:sticky lg:top-0  lg:flex-col lg:justify-between px-10 py-10 flex flex-col lg:border-r-[1px] lg:border-slate-500/30 justify-between lg:h-screen md:min-w-56 lg:min-w-60">
        <div>
          <div>
            <Image
              width={100}
              className="h-auto mb-2 rounded-sm"
              src={portretMark}
              alt="Mark Novak portrait"
              style={{ objectFit: "cover" }}
            />
            <Link href="/">
              <h1 className=" text-gray-100 text-4xl sm:text-4xl tracking-tight font-semibold ">
                Mark Novak
              </h1>
            </Link>
          </div>
          <h2 className="mt-3 text-lg tracking-tight text-gray-100 sm:text-xl font-medium">
            UI UX Designer & Frontend developer
          </h2>
          <p className="mt-4">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <Navigation />
        </div>
        <Cta />
      </header>
    </div>
  );
};

export default DesktopNav;
