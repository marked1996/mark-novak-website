"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Education", href: "/#education" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Parent variant to control stagger and timing
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay the start of children animations by 0.5s
        staggerChildren: 0.2, // Stagger each link animation by 0.2s
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2, // Apply stagger for exiting
        staggerDirection: -1, // Reverse the order of staggering for exit
      },
    },
  };

  return (
    <motion.header
      className="z-50 fixed w-full backdrop-blur-lg lg:hidden bg-mobilenav/70 border-b border-slate-500/30 px-6 py-3"
      animate={{
        height: isOpen ? "100dvh" : "auto", // Adjust height here
      }}
      initial={false}
      transition={{ duration: 0.5, ease: [0.12, 0, 0.39, 0] }} // Smooth transition for height
    >
      <div className="w-full flex justify-between items-center text-slate-200">
        <Link className="text-lg" href="/">
          Mark Novak
        </Link>
        <button onClick={handleClick}>
          {/* hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-all duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="flex flex-col justify-between"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Trigger exit animation when closing
          >
            <div className="mt-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={mobileLinkVars} // Apply the correct variants for each link
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <MobileNavLink
                    key={index}
                    href={link.href}
                    title={link.title}
                  />
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default MobileNav;

interface MobileNavLinkProps {
  title: string;
  href: string;
}

// Moved the variants definition here so it can be used correctly
const mobileLinkVars = {
  hidden: {
    x: "-30px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "-30px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href }) => {
  return (
    <motion.div className="text-4xl font-medium tracking-tight text-slate-200 py-3">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
