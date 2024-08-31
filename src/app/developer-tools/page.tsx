import React from "react";
import ButtonBack from "@/components/ButtonBack";
import Image from "next/image";
import itToolsMockup from "@/images/it-tools/home mockup.jpg";
import docs from "@/images/it-tools/docsNoBg.png";
import wireframes from "@/images/it-tools/wireframes.png";
import homeScreen from "@/images/it-tools/Home.jpg";
import searchScreen from "@/images/it-tools/search.jpg";
import tokenGenerator from "@/images/it-tools/token generator.jpg";
import dateConverter from "@/images/it-tools/date converter.jpg";
import phoneOne from "@/images/it-tools/phone1.jpg";
import phoneTwo from "@/images/it-tools/phone2.jpg";

import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Page = () => {
  return (
    <>
      <Image
        className="w-full max-h-cover mb-4"
        src={itToolsMockup}
        alt="Noxity developer tools mockup cover photo"
        style={{ objectFit: "cover" }}
      />
      {/* page content */}
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <ButtonBack />
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-100 mb-2">
            Noxity developer tools
          </h1>
          <p className=" text-lg tracking-tight ">
            Designing an open source developer tools from Noxity.
          </p>
        </div>
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <p className="mb-2">
            Over the spring of 2024, I teamed up with Noxity (former
            SimpliSevers) on an open source project to bring developers a
            unified platform for dealing with mundane and boring tasks.
          </p>
          <p className="mb-2">
            As a sole designer on this project, I owned the whole design process
            for the application using marketing materials given by the Noxity
            team, which were few - "use color blue and gray as on our website".
          </p>
        </div>
        <div className="lg:lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-6 lg:pb-8">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            The process
          </h3>
          <p className="mb-4">
            I didn't want to reinvent the wheel, so I approached this project
            with a holistic view in mind to strive towards the best possible and
            easy to use experience for developers. That in mind, I started
            gathering information on documentation websites for various
            different technologies (React, Vue, Nextjs,...), as developers visit
            them daily and are used to using them.
          </p>
          <Image
            className="w-full h-auto mb-2 rounded-md bg-black/40"
            src={docs}
            alt="React and Vue developer documentation screenshots"
            style={{ objectFit: "cover" }}
          />
          <p className="text-xs lg:text-sm text-center mb-8">
            React and Vue documentation screenshots
          </p>
          <p className="mb-8 lg:mb-10">
            After researching various documentation sites, I focused on three
            main points:
          </p>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="">
              <SwapCallsIcon className="text-slate-200 size-6" />
              <h4 className="text-slate-200 mb-2">Streamlined navigation</h4>
              <p className="text-sm">
                Use of breadcrumbs, a fixed menu, and clear sections for quick
                access to information.
              </p>
            </div>
            <div className="">
              <VisibilityIcon className="text-slate-200 size-5" />
              <h4 className="text-slate-200 mb-2">Search functionality</h4>
              <p className="text-sm">
                Implementing a search bar to help users quickly find tools as
                the project grows, beyond the navigation menu.
              </p>
            </div>
            <div className="">
              <ViewComfyIcon className="text-slate-200 size-5" />
              <h4 className="text-slate-200 mb-2">Familiar UX</h4>
              <p className="text-sm">
                Designing the app to match established developer standards,
                ensuring ease of use and familiarity.
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-6 lg:mb-8 pb-6 lg:pb-8">
          <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
            Wireframing for approval
          </h3>
          <p className="mb-4">
            After establishing the key design elements, I created low-fidelity
            wireframes to visually convey the proposed layout and functionality.
            These wireframes were presented to the Noxity team to ensure
            alignment with the project’s vision before proceeding to the
            detailed design phase.
          </p>
        </div>
      </div>
      <Image
        className="w-full h-auto mb-2 rounded-md "
        src={wireframes}
        alt="Desktop and mobile wireframes"
        style={{ objectFit: "cover" }}
      />
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <h3 className="mb-2 text-slate-200 font-medium text-xl tracking-tight">
          From concept to reality
        </h3>
        <p className="mb-4">
          With approval on the wireframes, I moved to developing the final
          design. This stage involved refining the layout, selecting the
          appropriate colors, typography and incorporating interactive elements.
        </p>
        <Image
          className="w-full h-auto mb-2 rounded-md "
          src={homeScreen}
          alt="Home screen"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-auto mb-2 rounded-md "
          src={searchScreen}
          alt="Search screen"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-auto mb-2 rounded-md "
          src={tokenGenerator}
          alt="Token generator tool mockup"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-auto mb-2 rounded-md "
          src={dateConverter}
          alt="Date converter tool mockup"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-auto mb-2 rounded-md "
          src={phoneOne}
          alt="Noxity dev tools second phone mockup"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-auto mb-2 rounded-md mb-2"
          src={phoneTwo}
          alt="Noxity dev tools second phone mockup"
          style={{ objectFit: "cover" }}
        />
        <video autoPlay muted loop className="w-full h-auto rounded-md">
          <source
            src={"/images/it-tools/it-tools-video.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Page;
