"use client";

import { usePathname } from "next/navigation";

const DefaultHeader = () => {
  const pathname = usePathname();

  // 기본 헤더 텍스트
  let headerText = "Welcome";

  // 경로에 따라 헤더 텍스트 변경
  if (pathname === "/page/signup") {
    headerText = "회원가입";
  } else if (pathname === "/page/FindAccount") {
    headerText = "계정찾기";
  } else if (pathname === "/page/CreateList") {
    headerText = "추모관생성";
  }

  return (
    <header className="h-[58px] flex justify-center items-center" style={{ borderBottom: "1px solid #eee" }}>
      <h1 className="font-bold text-lg">{headerText}</h1>
    </header>
  );
};

export default DefaultHeader;
