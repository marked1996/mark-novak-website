import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-16 text-sm text-gray-500 sm:pb-0 grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="col-span-8 sm:col-span-5 sm:col-start-3">
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
          by yours truly. Built with{" "}
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
