"use client";
import styles from "../../../style/styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter 훅을 사용하여 페이지 이동
import { useAuth } from "@/hooks/useAuth"; // 훅 가져오기
import Button from "../../Component/Button";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, authenticate } = useAuth();
  const router = useRouter(); // 페이지 이동을 위해 useRouter 훅 사용

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate("/api/auth/login", username, password); // 로그인 요청
      if (response.redirect) {
        // 서버 응답에서 redirect URL을 확인하여 페이지 이동
        router.push(response.redirect);
      } else if (response.error) {
        // 오류가 있을 경우 오류 메시지를 표시
        console.error(response.error);
      }
    } catch (err) {
      console.error("로그인 처리 중 오류 발생:", err);
    }
  };

  return (
    <div className={`${styles.layout} flex flex-col gap-y-4`}>
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-3xl font-extrabold mb-2 text-gray font-Pretendard leading-snug">
            안녕하세요.
            <br />
            부고알람서비스
            <br />
            <p className="font-light">조등입니다.</p>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="flex items-center flex-col gap-y-2">
            <input
              type="text"
              className={styles.input_style}
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디"
            />
            <input
              type="password"
              autoComplete="off"
              className={styles.input_style}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
            <Button type="submit" className="p-4" text="로그인" color="#1f1f1f"></Button>
            {error && (
              <div className="text-sm" style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>
                {error}
              </div>
            )}
            <Link href="/page/FindAccount" className="pt-3 pb-2 text-nomal text-grey">
              비밀번호찾기
            </Link>
          </div>
        </form>
      </div>
      <div className={`${styles.example} flex justify-center items-center gap-x-7`}>
        <p className="flex flex-none text-base font-bold py-1 text-[#000] text-opacity-40">또는</p>
      </div>
      <span className="pt-7 font-bold flex justify-center items-center text-base gap-x-1 text-[#000] text-opacity-30">
        지금 바로 조등
        <Link href="/page/signup" className="text-[#1f1f1f]" style={{ borderBottom: "1px solid #1f1f1f" }}>
          가입
        </Link>
        하세요.
      </span>
    </div>
  );
};

export default LoginPage;
