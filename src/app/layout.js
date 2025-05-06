"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";
import "../style/index.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderPaths = ["/success"];
  const shouldShowHeader = !hideHeaderPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        {shouldShowHeader && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
