"use client";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResponsive from "@/hooks/useResponsive";

const Navbar = () => {
  const { isMobile } = useResponsive();
  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
