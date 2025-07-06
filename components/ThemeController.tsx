"use client";
import { themeAtom } from "@/store/theme.store";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function ThemeController() {
  const [theme] = useAtom(themeAtom);
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
        if(document.body){
            document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
        }
    })
  }, [theme]);
  return null;
}
