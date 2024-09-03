"use client";

import isheader from "../../../style/isheader.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/Component/Header";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // 로그인 상태 확인
    const checkAuth = async () => {
      const res = await fetch("/api/auth/check", { credentials: "include" });
      const data = await res.json();

      if (!data.authenticated) {
        router.push("/page/login"); // 인증되지 않은 경우 로그인 페이지로 리디렉션
      } else {
        setUser(data.user);
      }
    };

    checkAuth();
  }, [router]);

  // user가 null일 때 로딩 상태를 나타내기 위해 바로 return 문을 추가
  if (!user) return <p></p>;

  return (
    <>
      <Header />
      <div className={`${isheader.layout} flex justify-center items-center flex-col`}>
        <p className="text-2xl font-bold">{user.username} 님 반갑습니다!</p>
      </div>
    </>
  );
};

export default MyPage;
