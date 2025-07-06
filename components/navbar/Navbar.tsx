"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { Moon, Sun } from "lucide-react";
import { useAtom } from "jotai";
import { themeAtom } from "@/store/theme.store";

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    console.log("Current Pathname:", routes[pathname.replace("/", "")]);
  }, [pathname]);

  function handleThemeToggle() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <motion.div
      initial={{ height: "0" }}
      animate={{ height: "48px" }}
      transition={{ duration: 0.5, ease: "circInOut", type: "tween" }}
      className="overflow-hidden  z-50 shrink-0 w-full flex items-center border-b-2 border-border"
    >
      {/* <span className="!font-devanagari  text-3xl tracking-tighter  px-4 border-r-2 h-full flex items-center font-bold leading-2 border-border">ड्रॉप्स</span> */}
      <span className="text-2xl tracking-tighter h-full flex items-center border-r-2 border-border px-4">
        drops
      </span>
      {/* <span  ></span> */}
      <span className=" h-full flex items-center  px-4 text-foreground text-sm">
        {routes[pathname.split("/")[1]].title || "Page"}
      </span>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleThemeToggle}
        className="cursor-pointer relative ml-auto border-border border-2 hover:brightness-110  transition-[filter,box-shadow] duration-200 mx-4 rounded-sm h-[32px] overflow-hidden w-[64px] flex items-center justify-center "
      >
        <div className="light w-full h-full flex items-center justify-between bg-background text-foreground">
          <div className="flex items-center justify-center w-full">
            <Sun size={12} strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center w-full">
            <Moon size={12} strokeWidth={2} />
          </div>
        </div>
        <motion.div
          animate={{
            clipPath:
              theme === "dark"
                ? [
                    "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                    "polygon(0 0, 80% 0, 80% 100%, 0 100%)",
                    "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                  ]
                : [
                    "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                    "polygon(20% 0, 100% 0, 100% 100%, 20% 100%)",
                    "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                  ],
          }}
          transition={{
            duration: 0.4,
            times: [0, 0.5, 1],
            ease: [0.85, 0, 0.15, 1],
          }}
          className="dark absolute  z-[100] w-full h-full flex items-center justify-between bg-background text-foreground"
        >
          <div className="flex items-center justify-center w-full">
            <Sun fill="var(--foreground)" size={12} strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center w-full">
            <Moon fill="var(--foreground)" size={12} strokeWidth={2} />
          </div>
        </motion.div>
        {/* {theme === "dark" ? <><Sun size={20} strokeWidth={2} /></> : <><Moon size={20} strokeWidth={2} /></>} */}
      </motion.button>
      {/* <button onClick={handleThemeToggle} className="cursor-pointer ml-auto h-full hover:bg-hover-background hover:text-hover-foreground border-l-2 border-border w-[48px] flex items-center justify-center ">
        {theme === "dark" ? <><Sun size={20} strokeWidth={2} /></> : <><Moon size={20} strokeWidth={2} /></>}
      </button> */}
    </motion.div>
  );
};

export default Navbar;
