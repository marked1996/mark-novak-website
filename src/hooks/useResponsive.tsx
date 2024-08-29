import { useState, useEffect } from "react";

interface ResponsiveState {
  isMobile: boolean;
}

const useResponsive = (): ResponsiveState => {
  // Set initial state based on window width
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576); // Example breakpoint at 576px
    };

    // Set initial state on client-side load/hydration
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

export default useResponsive;
