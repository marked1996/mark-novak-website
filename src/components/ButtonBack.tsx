import Link from "next/link";
import React from "react";

const ButtonBack = () => {
  return (
    <Link
      href="/#projects"
      className="group hover:text-markblue transition-all flex  font-semibold leading-tight items-center text-gray-100 mb-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
        className="mr-1 transition-transform group-hover:-translate-x-2"
      >
        <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
      </svg>
      Back
    </Link>
  );
};

export default ButtonBack;
