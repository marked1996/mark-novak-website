import React from "react";
import Beacon from "./Beacon";
import Link from "next/link";

const Cta = () => {
  return (
    <div className=" inline-flex flex-col items-start">
      <Beacon />
      <p className="text-sm pt-2 lg:block">
        I'm always up for a new challenge. Contact me if you think we would be a
        good fit.
      </p>
      <div className="flex flex-wrap gap-4 pt-2 lg:pt-4">
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
  );
};

export default Cta;
