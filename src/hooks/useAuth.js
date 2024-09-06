"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [error, setError] = useState("");
  const router = useRouter();

  const authenticate = async (url, username, password) => {
    setError(""); // 이전 오류 메시지 초기화

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    const data = await res.json();

    if (data.success) {
      router.push("/page/BoradList"); // 성공 시 페이지 이동
    } else {
      setError(data.error); // 오류 메시지 상태 업데이트
    }
  };

  return { error, authenticate };
}
