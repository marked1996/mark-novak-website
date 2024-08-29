import React from "react";
import ButtonBack from "@/components/ButtonBack";
import Image from "next/image";
import nowaLogo from "@/images/nowa/nowa logo.jpg";
import vizitka from "@/images/nowa/vizitke.jpg";
import invoice from "@/images/nowa/invoice.jpg";
import brosura from "@/images/nowa/brosura.jpg";
import instaMockup from "@/images/nowa/instamockup.jpg";
import iPhone1 from "@/images/nowa/iPhone1.jpg";
import phoneScreens from "@/images/nowa/mobileScreens.jpg";
import desktopScreens from "@/images/nowa/desktopScreens.jpg";

const Page = () => {
  return (
    <>
      <ButtonBack />
      <h2 className=" text-2xl font-medium tracking-tight text-gray-100 mb-4">
        Nowa agency
      </h2>
      <p className="mb-12">
        The focus was on rebranding Nowa while respecting the company's origins
        as a sport event organizing and transportation firm. The new logo
        embodies this, and the overall brand identity reflects Nowa's unique and
        aesthetic approach to work, effectively communicating their core values.
      </p>
      <div className="mb-12">
        <Image
          className="w-full h-auto mb-4"
          src={nowaLogo}
          alt="Nowa logotype"
          style={{ objectFit: "cover" }}
        />
        <div className="grid lg:grid-cols-4">
          <p className="col-span-3 lg:col-span-3 lg:col-start-2">
            We initiated the logo design with the brand name 'Nowa' to ensure
            better communication of the company's identity and name. Given the
            company’s strong roots in the sports sector, and our desire to honor
            their legacy in the new identity, we aimed to symbolize speed,
            motion, and movement through the creation of a dynamic typographic
            mark.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <div className="grid mb-4 lg:grid-cols-2 gap-2">
          <Image
            className="w-full h-96 col-span-2 lg:col-span-1"
            src={vizitka}
            alt="Nowa business cards"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="w-full h-96 col-span-2 lg:col-span-1"
            src={invoice}
            alt="Nowa invoice design"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="w-full h-auto col-span-2"
            src={brosura}
            alt="Nowa invoice design"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="grid lg:grid-cols-4">
          <p className="col-span-3 lg:col-span-3">
            We opted for a predominantly grayscale color palette to maintain
            focus on the projects and work, while aligning with the company's
            core values of power and elegance, which represent professionalism.
            The varying shades of gray enhance the visual hierarchy and ensure
            the brand remains refined rather than overly aggressive.
          </p>
        </div>
      </div>
      <video autoPlay muted loop className="w-full h-auto  mb-12  ">
        <source src={"/images/nowa/nowaMackbookTurn.mp4"} type="video/mp4" />
      </video>
      <video autoPlay muted loop className="w-full h-auto  mb-12 ">
        <source src={"/images/nowa/nowaNavVideo.mp4"} type="video/mp4" />
      </video>

      <Image
        src={desktopScreens}
        alt="Iphone homepage mockup"
        className="w-full h-auto object-cover mb-12"
      />
      <Image
        src={iPhone1}
        alt="Desktop screens"
        className="w-full h-auto object-cover mb-12"
      />
      <Image
        src={phoneScreens}
        alt="Phone screens"
        className="w-full h-auto object-cover mb-12"
      />
      <Image
        src={instaMockup}
        alt="Instagram mockups"
        className="w-full h-auto object-cover mb-12"
      />
    </>
  );
};

export default Page;
