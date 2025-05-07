"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";
import "../style/index.css";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "../context/LanguageContext";
import FaviconLoader from "../components/FaviconLoader";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderPaths = ["/success"];
  const shouldShowHeader = !hideHeaderPaths.includes(pathname);

  return (
    <html lang="en">
      <head></head>
      <body>
        <FaviconLoader />
        <LanguageProvider>
          {shouldShowHeader && <Header />}
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
