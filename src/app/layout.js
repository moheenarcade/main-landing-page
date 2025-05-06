"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";
import "../style/index.css";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderPaths = ["/success"];
  const shouldShowHeader = !hideHeaderPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
      <LanguageProvider>
        {shouldShowHeader && <Header />}
        {children}
        <Footer />
      </LanguageProvider>
      </body>
    </html>
  );
}
