"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current Pathname:", routes[pathname.replace("/", "")]);
  }, [pathname]);
  return (
    <motion.div
      initial={{ height: "0" }}
      animate={{ height: "48px" }}
      transition={{ duration: 0.5, ease: "circInOut", type: "tween" }}
      className="overflow-hidden z-50 shrink-0 w-full flex items-center border-b border-border"
    >
      {/* <span className="!font-devanagari ">ड्रॉप्स</span> */}
      <span className="text-2xl tracking-tighter h-full flex items-center border-r border-border px-4">
        drops
      </span>
      {/* <span  ></span> */}
      <span className=" h-full flex items-center  px-4 text-foreground text-sm">
        {routes[pathname.replace("/", "")].title}
      </span>
    </motion.div>
  );
};

export default Navbar;
