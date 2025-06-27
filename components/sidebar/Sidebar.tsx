"use client";
import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="relative active:bg-active-background group w-full h-12 flex items-center justify-start p-4 border-b-2 border-border hover:bg-hover-background hover:text-hover-foreground">
      {children}
      <div className="group-hover:opacity-100 opacity-0 absolute h-full right-0 w-[12px] bg-accent"></div>
    </button>
  );
};

const Sidebar = () => {
  return (
    <motion.div
      initial={{ width: "0" }}
      animate={{ width: "250px" }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: "circInOut",
        type: "tween",
      }}
      className="shrink-0 z-50 h-full border-r-2 border-border overflow-hidden"
    >
        <Button>Home</Button>
        
    </motion.div>
  );
};

export default Sidebar;
