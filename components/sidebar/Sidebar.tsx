"use client";
import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface ButtonProps {
  children: ReactNode;
  to: string;
}

const Button = ({ children, to }: ButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <button
      className={`relative group w-full h-12 ${isActive == true ?  "bg-hover-background text-hover-foreground font-medium" : "bg-background "}  flex items-center justify-start p-4 border-b-2 border-border hover:bg-hover-background hover:text-hover-foreground active:bg-active-background `}
      onClick={() => router.push(to)}
    >
      {children}
      <motion.div
        animate={{ width: isActive ? 48 : 12 }}
        transition={{ease: "circInOut"}}
        className={`flex items-center justify-center  absolute h-full right-0  bg-accent ${isActive ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`}
      >
        <motion.div animate={{scale: isActive ? 1 : 0}} className="size-2 rounded-sm bg-hover-background absolute" ></motion.div>
      </motion.div>
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
      <Button to="/home">Home</Button>
      <Button to="/drops/1">Drop 1</Button>
    </motion.div>
  );
};

export default Sidebar;
