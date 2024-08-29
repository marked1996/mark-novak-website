import React from "react";
import ButtonBack from "@/components/ButtonBack";

const Page = () => {
  return (
    <>
      <ButtonBack />
      <h2 className=" text-2xl font-medium tracking-tight text-gray-100 mb-4">
        Outfit of the day AI assistant
      </h2>
      <p className="mb-12">
        I find myself always not knowing what to wear daily. What if I could ask
        an AI to make an outfit for me based on the vibe I'm going for with
        various input modalities that I'd typically use to determine my decision
        like the weather, cultural norms, text, visuals, voice or some
        inspiration I've taken from the web?
      </p>
      <video autoPlay muted loop className="w-full h-auto">
        <source src={"/images/ootd/ootdVideo.mp4"} type="video/mp4" />
      </video>
    </>
  );
};

export default Page;
