import React from "react";
import ButtonBack from "@/components/ButtonBack";
import Image from "next/image";
import nowaLogo from "@/images/nowa/nowa logo.jpg";
import vizitka from "@/images/nowa/vizitke.jpg";
import invoice from "@/images/nowa/invoice.jpg";
import desktopScreenOne from "@/images/nowa/desktop screen home.jpg";
import desktopScreenTwo from "@/images/nowa/desktop screen home 2.jpg";
import desktopScreenThree from "@/images/nowa/desktop screen 3.jpg";
import laptopMockup from "@/images/nowa/laptop3.jpg";
import phoneScreensOne from "@/images/nowa/phone screens1.jpg";
import phoneScreensTwo from "@/images/nowa/phone screens2.jpg";

import coverPhotoNowa from "@/images/nowa/cover mockup.jpg";
import skice from "@/images/nowa/skice.jpg";

const Page = () => {
  return (
    <>
      <Image
        className="w-full max-h-cover mb-4"
        src={coverPhotoNowa}
        alt="Noxity developer tools mockup cover photo"
        style={{ objectFit: "cover" }}
      />
      {/* page content */}
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <ButtonBack />
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-100 mb-2">
            Nowa
          </h1>
          <p className=" text-lg tracking-tight ">
            From a sport and logistics company to a full fledged agency building
            experiences.
          </p>
        </div>
        {/* <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <p className="mb-2">
            Create a new brand identity for Nowa that reflects their values,
            aesthetic and their approach to work.
          </p>
        </div> */}
        <div className="lg:lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-6 lg:pb-8">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            The challenge
          </h3>
          <p className="mb-4">
            The focus was on rebranding Nowa while respecting the company's
            origins as a sport event organizing and transportation firm. The new
            logo embodies this, and the overall brand identity reflects Nowa's
            unique and aesthetic approach to work, effectively communicating
            their core values.
          </p>
          <Image
            className="w-full h-auto mb-2 rounded-md bg-black/40"
            src={skice}
            alt="Nowa logotype sketches"
            style={{ objectFit: "cover" }}
          />
          <p className="text-xs lg:text-sm  mb-8">
            Early stages of sketching the logotype.
          </p>
          <Image
            className="w-full h-auto mb-2 rounded-md bg-black/40"
            src={nowaLogo}
            alt="Nowa logotype"
            style={{ objectFit: "cover" }}
          />
          <p className="text-xs lg:text-sm  mb-8">
            Final result of the logotype on a grid.
          </p>
          <p className="mb-8 lg:mb-10">
            The identity revolves around a monochromatic color palette to give
            it a raw and professional look, with high quality imagery bringing
            in the colors. In a way, I didn't want to design something that
            takes the attention away from the projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Image
              className=" mb-2 h-96 rounded-md bg-black/40"
              src={vizitka}
              alt="Nowa business card mockup"
              style={{ objectFit: "cover" }}
            />
            <Image
              className=" mb-2 h-96 rounded-md bg-black/40"
              src={invoice}
              alt="Nowa invoice mockup"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" mb-6 lg:mb-8 pb-6 lg:pb-8">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            Website design
          </h3>
          <p className="mb-4">
            After creating a small design system, I designed an accessible
            website that breathes with clear messaging and quick and easy access
            to navigation.
          </p>
          <Image
            className=" mb-2 h-auto rounded-md bg-black/40"
            src={desktopScreenOne}
            alt="Website home screen"
            style={{ objectFit: "cover" }}
          />
          <Image
            className=" mb-2 h-auto rounded-md bg-black/40"
            src={desktopScreenTwo}
            alt="Website home screen"
            style={{ objectFit: "cover" }}
          />
          <Image
            className=" mb-2 h-auto rounded-md bg-black/40"
            src={desktopScreenThree}
            alt="Website home screen"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <Image
        className="  h-auto mb-6 lg:mb-8 bg-black/40"
        src={laptopMockup}
        alt="Laptop website mockup"
        style={{ objectFit: "cover" }}
      />
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <Image
          className=" mb-2 rounded-md h-auto bg-black/40"
          src={phoneScreensOne}
          alt="Laptop website mockup"
          style={{ objectFit: "cover" }}
        />
        <Image
          className=" mb-2 rounded-md h-auto bg-black/40"
          src={phoneScreensTwo}
          alt="Laptop website mockup"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Page;
