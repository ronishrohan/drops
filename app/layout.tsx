import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { Suspense } from "react";

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
      <Suspense><ClientLayout>{children}</ClientLayout></Suspense>
    </html>
  );
}
