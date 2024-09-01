"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cta from "./Cta";

const navLinks = [
  { title: "Home", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Education", href: "/#education" },
];

// Header animation variants
const headerVariants = {
  closed: {
    height: "53px",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100dvh",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

// Link container animation variants with stagger effect
const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of the children
      delayChildren: 0.3, // Delay before starting to animate the children
    },
  },
};

// Individual link animation variants
const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// CTA animation variant
const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.7 },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <motion.header
      className="z-50 fixed w-full backdrop-blur-lg lg:hidden bg-mobilenav/80 border-b border-slate-500/30 px-6 py-3"
      variants={headerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      style={{ willChange: "height" }} // Force reflow optimization
      layout
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
            className="flex h-full flex-col justify-between pb-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            transition={{ delay: 0.3 }} // Delay the animation
          >
            <motion.div className="py-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  className="overflow-hidden"
                >
                  <MobileNavLink
                    key={index}
                    toggleState={handleClick}
                    href={link.href}
                    title={link.title}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mb-4" variants={ctaVariants}>
              <Cta />
            </motion.div>
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
  toggleState: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  title,
  href,
  toggleState,
}) => {
  return (
    <div
      onClick={toggleState}
      className="text-xl font-medium tracking-tight text-slate-200 py-3 border-slate-500/30 border-b"
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};
