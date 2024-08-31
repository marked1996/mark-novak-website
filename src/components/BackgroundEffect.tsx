"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isSmallScreen) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSmallScreen]);

  const getDimensions = () => {
    if (elementRef.current) {
      const { offsetWidth, offsetHeight } = elementRef.current;
      return { width: offsetWidth, height: offsetHeight };
    }
    return { width: 0, height: 0 };
  };

  const { width, height } = getDimensions();
  const bgStyle = isSmallScreen
    ? {}
    : {
        transform: `translate(${mousePosition.x - width / 2}px, ${
          mousePosition.y - height / 2
        }px)`,
      };

  return (
    <div
      ref={elementRef}
      className={`-z-10 fixed w-16 h-72 md:w-96 md:h-96] lg:w-[800px] lg:h-[800px] rounded-[50%] blur-3xl md:blur-[64px] lg:blur-[88px] bg-blob opacity-30 md:opacity-10 ${
        isSmallScreen
          ? "top-24 right-36 md:top-36 md:right-52 lg:top-28 lg:right-96"
          : ""
      }`}
      aria-label="background effect"
      style={bgStyle}
    ></div>
  );
};

export default BackgroundEffect;
