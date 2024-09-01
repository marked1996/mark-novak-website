import Link from "next/link";

import React from "react";

const Footer = () => {
  const currDate = new Date().getFullYear();

  return (
    <footer className="w-full text-sm text-gray-500 transition-all max-w-2xl m-auto">
      <div className="">
        <p>
          Loosely designed in{" "}
          <span>
            <Link
              href="https://www.figma.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Figma (opens in a new tab)"
              className="font-medium text-gray-300 hover:text-markblue focus-visible:text-blue transition-all"
            >
              Figma
            </Link>
          </span>{" "}
          and coded in{" "}
          <span>
            <Link
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual studio code (opens in a new tab)"
              className="font-medium text-gray-300 hover:text-markblue focus-visible:text-blue transition-all"
            >
              Visual Studio Code
            </Link>
          </span>{" "}
          in late July, early August 2024. I'm still adding past projects so be
          on the lookout. Built with{" "}
          <span>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (opens in a new tab)"
              className="font-medium text-gray-300 hover:text-markblue focus-visible:text-blue transition-all"
            >
              Next.js
            </Link>
          </span>{" "}
          and{" "}
          <span>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (opens in a new tab)"
              className="font-medium text-gray-300 hover:text-markblue focus-visible:text-blue transition-all"
            >
              Tailwind CSS
            </Link>
          </span>
          . All text is set in the Inter typeface.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
