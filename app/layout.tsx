"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { themeAtom } from "@/store/theme.store";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";


const instrumentSans = Instrument_Sans({
  variable: "--instrument-sans",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useAtom(themeAtom);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "dark");
  })
  return (
    <html lang="en">
      <body
        className={`${theme} ${instrumentSans.className} ${inter.variable} overflow-hidden h-dvh flex flex-col font-inter antialiased`}
      >
        <Navbar />
        <div className="h-full flex overflow-hidden" >
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
