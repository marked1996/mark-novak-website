import React from "react";
import ButtonBack from "@/components/ButtonBack";
import Image from "next/image";

import coverPhoto2 from "@/images/soundwave/cover2.jpg";
import chooseOrg from "@/images/soundwave/choose organization.jpg";
import userflows from "@/images/soundwave/userflows.jpg";
import homeMockup from "@/images/soundwave/home mockup.jpg";
import presentationOne from "@/images/soundwave/presentation 1.jpg";
import presentationTwo from "@/images/soundwave/presentation 2.jpg";
import presentationThree from "@/images/soundwave/presentation 3.jpg";
import wireframes from "@/images/soundwave/wireframes.jpg";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Image
        priority={true}
        className="w-full max-h-cover mb-4"
        src={coverPhoto2}
        alt="Soundwave cover photo"
        style={{ objectFit: "cover" }}
      />
      {/* page content */}
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <ButtonBack />
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-100 mb-2">
            Soundwave
          </h1>
          <p className=" text-lg tracking-tight ">
            Designing an immersive app by slowing the users down and helping
            them reconnect with nature.
          </p>
        </div>
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 col-span-1">
            <h6 className="text-slate-200 font-medium">Industry</h6>
            <p className="mb-2">Lifestyle</p>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h6 className="text-slate-200 font-medium">Date</h6>
            <p className="mb-2">August 2024</p>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h6 className="text-slate-200 font-medium">Deliverables</h6>
            <p className="mb-2">UX Design, UI Design</p>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h6 className="text-slate-200 font-medium">Duration</h6>
            <p className="mb-2">1 week</p>
          </div>
        </div>
        <div className="lg:lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-6 lg:pb-8">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            The idea
          </h3>
          <p className="mb-4">
            The modern world has distanced us from nature, particularly the
            life-giving soundscapes of rivers and rainforests. Soundwave offers
            authentic soundscapes from named and geolocated rivers and
            rainforests with custom abstract relaxing animations while providing
            the means for users to participate in real-world conservation
            efforts.
          </p>
          <Suspense fallback={<Skeleton />}>
            <Image
              className="w-full h-auto mb-2 rounded-md bg-black/40"
              src={chooseOrg}
              alt="Choose organization screen mockup"
              style={{ objectFit: "cover" }}
            />
          </Suspense>
        </div>
        <div className=" mb-2 lg:mb-4">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            Userflows
          </h3>
          <p className="mb-2">
            This step allowed me to dig deep into the app structure, including
            all the needed features and possibilities for the user. It is an
            important part of design as it gave me a perspective on the
            product’s complexity.
          </p>
        </div>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Image
          className="w-full h-auto mb-2 "
          src={userflows}
          alt="Userflows for the project"
          style={{ objectFit: "cover" }}
        />
      </Suspense>
      <div className="p-6 lg:px-10 max-w-content w-full mx-auto">
        <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
          Wireframing
        </h3>
        <p className="mb-4">
          Wireframes are early-stage representations of a product's layout and
          functionality. Here I designed the first ideas to roughly visualise
          how the app would work in order to achieve the best user experience
          poossible.
        </p>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Image
          className="w-full h-auto mb-2 "
          src={wireframes}
          alt="Wireframes"
          style={{ objectFit: "cover" }}
        />
      </Suspense>
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
          UI Design
        </h3>
        <p className="mb-4">
          With approval on the wireframes, I moved to developing the final
          design. This stage involved refining the layout, selecting the
          appropriate colors, typography and incorporating interactive elements.
        </p>
        <Suspense fallback={<Skeleton />}>
          <Image
            className="w-full h-auto mb-2 rounded-md "
            src={homeMockup}
            alt="Home screen mockup"
            style={{ objectFit: "cover" }}
          />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Image
            className="w-full h-auto mb-2 rounded-md "
            src={presentationOne}
            alt="Presentation mockups"
            style={{ objectFit: "cover" }}
          />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Image
            className="w-full h-auto mb-2 rounded-md "
            src={presentationTwo}
            alt="Presentation mockups"
            style={{ objectFit: "cover" }}
          />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Image
            className="w-full h-auto mb-2 rounded-md "
            src={presentationThree}
            alt="Presentation mockups"
            style={{ objectFit: "cover" }}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
