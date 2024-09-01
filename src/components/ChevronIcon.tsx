import { useState } from "react";
import { motion } from "framer-motion";

interface ChevronIconProps {
  isOpen: boolean;
}
export default function ChevronIcon({ isOpen }: ChevronIconProps) {
  const variants = {
    closed: {
      d: "M4.5 8.25L12 15.75L19.5 8.25", // Downward-facing "V"
    },
    open: {
      d: "M4.5 15.75L12 8.25L19.5 15.75", // Upward-facing "V"
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.5,
          ease: [0.75, 0, 0.91, 0.62],
        }}
      />
    </svg>
  );
}
