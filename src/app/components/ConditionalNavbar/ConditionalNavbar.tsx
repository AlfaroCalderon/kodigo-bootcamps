"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../Navbar/Navbar";

export const ConditionalNavbar = () => {
  const pathname = usePathname();
  
  if ( pathname === "/" || pathname === "/login"  || pathname === "/signup" || pathname === "/error" || pathname === "/check-email" || pathname === "/auth/confirm") {
    return null;
  }
  
  return <Navbar />;
};
