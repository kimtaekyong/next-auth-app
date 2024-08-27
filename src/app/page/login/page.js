"use client";
import styles from "../../../style/styles.module.css";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth"; // 훅 가져오기
import Button from "../../Component/Button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, authenticate } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate("/api/auth/login", username, password); // 로그인 요청
  };

  return (
    <div className={`${styles.layout} flex justify-center items-center flex-col`}>
      <div>
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-white">안녕하세요.</h1>
          <span className="text-lg font-base text-white">로그인</span>
        </div>
        <form onSubmit={handleSubmit} className="w-[300px]">
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
            {error && (
              <div className="text-sm" style={{ color: "red" }}>
                {error}
              </div>
            )}{" "}
            {/* 오류 메시지 표시 */}
            <Button type="submit" className="p-4" text="로그인" color="#18864A"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
