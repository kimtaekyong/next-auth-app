"use client";

import "../style/globals.css";
import Navigation from "./Component/Navigation";
import Footer from "./Component/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isFooterPage = pathname === "/page/login" || pathname === "/page/signup" || pathname === "/page/FindAccount";
  const isInitialPage = pathname === "/page/initial";

  return (
    <html lang="en">
      <body className="max-w-screen-md m-auto">
        {children}
        {/* 현재 경로가 '/login'이 아닌 경우에만 Footer를 렌더링 */}
        {isInitialPage ? null : isFooterPage ? <Footer /> : <Navigation />}
      </body>
    </html>
  );
}
