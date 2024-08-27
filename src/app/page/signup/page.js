"use client";

// /app/pages/register.js
import { useState } from "react";
import Button from "@/app/Component/Button";
import styles from "../../../style/styles.module.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null); // 아이디 사용 가능 여부
  const [isCheckingUsername, setIsCheckingUsername] = useState(false); // 아이디 중복 체크 중 여부

  const handleUsernameCheck = async () => {
    if (!username) {
      setError("아이디를 입력해야 합니다.");
      return;
    }

    setIsCheckingUsername(true);
    setError(""); // 이전 에러 메시지 초기화

    const res = await fetch("/api/auth/check-username", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();
    setIsUsernameAvailable(data.available);
    setIsCheckingUsername(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setError("아이디를 입력해야 합니다.");
      return;
    }

    // 클라이언트 측 유효성 검사
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, confirmPassword, contact }),
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "/page/login";
    } else {
      setError(data.error);
    }
  };

  return (
    <div className={`${styles.layout} flex justify-center items-center flex-col`}>
      <h1 className="text-2xl mb-6 font-bold text-white">회원가입</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <input
            autoComplete="off"
            className={styles.input_style}
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernameAvailable(null); // 아이디 입력 시 사용 가능 여부 초기화
            }}
            placeholder="아이디"
            required
          />
          <button
            type="button"
            className="bg-green font-sm whitespace-nowrap px-4 h-[59px] text-sm font-bold text-[white]"
            onClick={handleUsernameCheck}
            disabled={isCheckingUsername}
          >
            {isCheckingUsername ? "확인 중..." : "중복체크"}
          </button>
        </div>
        {isUsernameAvailable !== null && (
          <p style={{ color: isUsernameAvailable ? "green" : "red" }}>
            {isUsernameAvailable ? "사용 가능한 아이디입니다." : "이미 존재하는 아이디입니다."}
          </p>
        )}
        <input
          autoComplete="off"
          className={styles.input_style}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="사용 할 비밀번호"
          required
        />
        <input
          autoComplete="off"
          className={styles.input_style}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 재확인"
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          autoComplete="off"
          className={styles.input_style}
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="연락처"
          required
        />
        <Button type="submit" className="p-4" text="가입" color="#18864A"></Button>
      </form>
    </div>
  );
};

export default RegisterPage;
