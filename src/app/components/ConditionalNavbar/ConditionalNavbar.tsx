"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../Navbar/Navbar";

export const ConditionalNavbar = () => {
  const pathname = usePathname();
  
  if ( pathname === "/" || pathname === "/login") {
    return null;
  }
  
  return <Navbar />;
};
