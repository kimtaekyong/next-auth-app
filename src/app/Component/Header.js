"use client";

import { usePathname } from "next/navigation";
import DefaultHeader from "../Component/DefaultHeader"; // Hypothetical component for signup page
import SigninHeader from "../Component/SigninHeader"; // Hypothetical component for signup page

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/page/signup" || pathname === "/page/FindAccount" || pathname === "/page/CreateList") {
    return <DefaultHeader />;
  }

  if (pathname === "/page/BoradList" || pathname === "/page/mypage") {
    return <SigninHeader />;
  }

  // Default header content for other routes
  return (
    <header className="h-[58px] flex justify-center items-center" style={{ borderBottom: "1px solid #eee" }}>
      <h1 className="font-bold text-lg">Welcome</h1>
    </header>
  );
};

export default Header;
