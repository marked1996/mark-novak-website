import React from "react";
import ButtonBack from "@/components/ButtonBack";

import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

const Page = () => {
  return (
    <>
      <div className=" p-6 lg:px-10 max-w-content w-full mx-auto">
        <ButtonBack />
        <div className="lg:border-b-[1px] lg:border-slate-500/30 mb-6 lg:mb-8 pb-4 lg:pb-6">
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-100 mb-2">
            Outfit planner with AI
          </h1>
          <p className=" ">
            I find myself always not knowing what to wear daily. What if I could
            ask an AI to make an outfit for me based on the vibe I'm going for
            with various options that I'd typically use to determine my decision
            like the weather, cultural norms, text, visuals, voice or some
            inspiration from the web?
          </p>
        </div>
        <Suspense fallback={<Skeleton />}>
          <video autoPlay muted loop className="w-full h-auto rounded-md">
            <source src={"/images/ootd/ootdVideo.mp4"} type="video/mp4" />
          </video>
        </Suspense>
      </div>
    </>
  );
};

export default Page;
