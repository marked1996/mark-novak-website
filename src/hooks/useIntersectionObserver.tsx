"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useIntersectionObserver = (setActiveId: (id: string) => void) => {
  const path = usePathname();
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveId, path]);
};

export default useIntersectionObserver;
