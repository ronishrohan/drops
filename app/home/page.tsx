"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface GridItemProps {}

const GridItem = ({}: GridItemProps) => {
  return (
    <div className="outline outline-border w-full text-foreground/70 hover:text-foreground h-[200px] hover:bg-card-background flex flex-col">
      <div className="h-full"></div>
      <div className="shrink-0 h-[48px]  w-full flex items-center border-t border-border">
        <span className="text-sm px-4">25th July, 2025</span>
        <button className="size-[48px] flex items-center justify-center cursor-pointer hover:bg-hover-background hover:text-hover-foreground ml-auto border-l border-border"><Github strokeWidth={"1px"} size={20} /></button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="size-full overflow-y-scroll grid grid-cols-3 "
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <GridItem key={index} />
      ))}
    </motion.div>
  );
};

export default page;
