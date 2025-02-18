"use client";
import { useState, useRef, useEffect } from "react";

export default function CollapsibleText() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState("0px");

  // Typing the ref correctly
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      // Set height based on content size
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <div>
      <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-200">
        I'm a designer crafting interfaces and interactions that are useful and
        feel natural. I'm passionate about enhancing the web experience, one
        interaction at a time.
      </h2>
      <div className="max-w-content">
        <p className="mb-4">
          For a long time, I’ve always wanted to learn to design spaces that
          people can enjoy strolling around, always seeking and striving to
          curate an engaging human experience as they navigate the environment.
          Throughout this journey, I’ve become more curious about understanding
          human interaction to build more intuitive things.
        </p>

        {/* MOBILE VIEW */}
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <p className="mb-4">
            During my 4th year at University for architecture, after a year long
            thinking and “what if’s” I decided to shift my career towards
            building for people in computing spaces because of a desire to work
            at larger and faster scales. While computing and architecture slowly
            evolve, still, at the heart of these disciplines are what makes
            design valuable - it improves people’s lives holistically through
            emotion, functionality and aesthetics. I believe that the core of
            any great design lies in its ability to enhance lives. That's why,
            when I'm designing, I focus on stripping away the noise and
            prioritizing simplicity and functionality.
          </p>
          <p className="mb-4">
            When I'm not working, I enjoy learning more about web technologies,
            playing tennis, basketball, hiking in nature and grabbing an
            occasional beer or two with friends and family.
          </p>
        </div>

        <div className="text-gray-100 hover:text-markblue focus:outline-none transition-all">
          {isExpanded ? (
            <button
              className="text-gray-100 hover:text-markblue focus:outline-none transition-all"
              onClick={toggleExpand}
            >
              Show less
            </button>
          ) : (
            <button
              className="text-gray-100 hover:text-markblue focus:outline-none transition-all"
              onClick={toggleExpand}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
