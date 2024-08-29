"use client";
import React, { useState } from "react";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Navigation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");

  useIntersectionObserver(setActiveId);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {["about", "projects", "experience", "education"].map((id) => (
          <li className="group" key={id}>
            <Link
              className={` font-inter text-xs flex items-center py-3 font-bold uppercase tracking-widest group-hover:text-markblue transition-all ${
                activeId === id ? "text-markblue" : "text-gray-400"
              }`}
              href={`/#${id}`}
            >
              <span
                className={`group-hover:bg-markblue group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-gray-400 motion-reduce:transition-none nav-indicator mr-4 h-px transition-all ${
                  activeId === id ? "w-16 bg-markblue" : "w-8 bg-gray-400"
                }`}
              ></span>
              {id}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
