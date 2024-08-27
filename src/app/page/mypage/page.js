"use client";

import styles from "../../../style/styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`${styles.layout} flex justify-center items-center flex-col`}>
      <h1>My Page</h1>
      <p>Welcome, {user.username}!</p>
      {/* 로그아웃 버튼 추가 */}
      <button
        onClick={async () => {
          await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
          router.push("/page/login");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;
