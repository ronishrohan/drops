import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import ThemeController from "@/components/ThemeController";

const instrumentSans = Instrument_Sans({
  variable: "--instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "drops",
  description: "A modern drops platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${instrumentSans.className} ${inter.variable} overflow-hidden h-dvh flex flex-col font-inter antialiased`}
      >
        <Navbar />
        <ThemeController />
        <div className="h-full flex overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
