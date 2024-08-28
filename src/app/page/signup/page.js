"use client";

// /app/pages/register.js
import { useState } from "react";
import Button from "@/app/Component/Button";
import Header from "@/app/Component/Header";
import isheader from "../../../style/isheader.module.css";
import styles from "../../../style/styles.module.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [emailLocalPart, setEmailLocalPart] = useState(""); // Local part of the email
  const [emailDomain, setEmailDomain] = useState(""); // Domain part of the email
  const [error, setError] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null); // 아이디 사용 가능 여부
  const [isCheckingUsername, setIsCheckingUsername] = useState(false); // 아이디 중복 체크 중 여부

  const emailDomains = [
    "@gmail.com",
    "@yahoo.com",
    "@hotmail.com",
    "@example.com", // Default domain
    "custom", // Allow user to input a custom domain
  ];

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

    if (!emailLocalPart || !emailDomain) {
      setError("이메일을 입력해야 합니다.");
      return;
    }

    // 클라이언트 측 유효성 검사
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 이메일 유효성 검사 (간단한 예제)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullEmail = `${emailLocalPart}${emailDomain}`;
    if (!emailPattern.test(fullEmail)) {
      setError("유효한 이메일 주소를 입력해야 합니다.");
      return;
    }

    const res = await fetch("/api/auth/register", {
      // Corrected endpoint name
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, confirmPassword, contact, email: fullEmail }), // 이메일 추가
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "/page/login";
    } else {
      setError(data.error);
    }
  };

  const handleDomainChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      // If "custom" is selected, keep the input field enabled
      setEmailDomain("");
    } else {
      setEmailDomain(value);
    }
  };

  return (
    <>
      <Header />
      <div className={`${isheader.layout} flex items-center flex-col`}>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5">
          <div>
            <label className="mb-2 font-medium block">아이디</label>
            <div className="flex items-center gap-x-1">
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
                className="bg-[#1f1f1f] font-sm whitespace-nowrap px-4 h-[58px] text-sm font-bold text-[white]"
                onClick={handleUsernameCheck}
                disabled={isCheckingUsername}
                style={{ borderRadius: "4px" }}
              >
                {isCheckingUsername ? "확인 중..." : "중복체크"}
              </button>
            </div>
            <div className="mt-2 pl-2">
              {isUsernameAvailable !== null && (
                <p style={{ color: isUsernameAvailable ? "green" : "red", fontSize: "14px", fontWeight: "700" }}>
                  {isUsernameAvailable ? "사용 가능한 아이디입니다." : "이미 존재하는 아이디입니다."}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-medium block">비밀번호</label>
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
            <div className="mt-2 pl-2">
              {error && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{error}</p>}
            </div>
          </div>
          <div>
            <label className="mb-2 font-medium block">연락처</label>
            <input
              autoComplete="off"
              className={styles.input_style}
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="연락처"
              required
            />
          </div>
          <div>
            <label className="mb-2 font-medium block">이메일</label>
            <div className="flex items-center gap-x-1">
              <input
                autoComplete="off"
                className={styles.input_style}
                type="text"
                value={emailLocalPart}
                onChange={(e) => setEmailLocalPart(e.target.value)}
                placeholder="이메일 사용자 이름"
                required
              />
              <span className="mx-2">@</span>
              <select className={styles.input_style} value={emailDomain} onChange={handleDomainChange} required>
                {emailDomains.map((domain, index) => (
                  <option key={index} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
              {emailDomain === "custom" && (
                <input
                  autoComplete="off"
                  className={styles.input_style}
                  type="text"
                  value={emailDomain}
                  onChange={(e) => setEmailDomain(e.target.value)}
                  placeholder="직접 입력"
                />
              )}
            </div>
            <div className="mt-2 pl-2">
              {error && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{error}</p>}
            </div>
          </div>
          <Button type="submit" className="p-4" text="가입" color="#1f1f1f"></Button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
