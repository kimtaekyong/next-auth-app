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

  const [usernameError, setUsernameError] = useState(""); // 아이디 오류
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 오류
  const [contactError, setContactError] = useState(""); // 연락처 오류
  const [emailError, setEmailError] = useState(""); // 이메일 오류
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null); // 아이디 사용 가능 여부
  const [isCheckingUsername, setIsCheckingUsername] = useState(false); // 아이디 중복 체크 중 여부
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 열림 상태 관리

  const [membershipLevels, setMembershipLevels] = useState(["지인"]); // 기본값은 'Basic'

  const handleUsernameCheck = async () => {
    if (!username) {
      setUsernameError("아이디를 입력해야 합니다.");
      return;
    }

    setIsCheckingUsername(true);
    setUsernameError(""); // 이전 에러 메시지 초기화

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

    let valid = true;

    if (!username) {
      setUsernameError("아이디를 입력해야 합니다.");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!emailLocalPart || !emailDomain) {
      setEmailError("이메일을 입력해야 합니다.");
      valid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const fullEmail = `${emailLocalPart}@${emailDomain}`;
      if (!emailPattern.test(fullEmail)) {
        setEmailError("유효한 이메일 주소를 입력해야 합니다.");
        valid = false;
      } else {
        setEmailError("");
      }
    }

    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!contact) {
      setContactError("연락처를 입력해야 합니다.");
      valid = false;
    } else {
      setContactError("");
    }

    if (!valid) return;

    const res = await fetch("/api/auth/signup", {
      // Corrected endpoint name
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
        contact,
        email: `${emailLocalPart}@${emailDomain}`,
        membershipLevels,
      }), // 이메일 추가
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "/page/login";
    } else {
      setUsernameError(data.error); // 실패 시 일반 오류 메시지 처리
    }
  };

  // 드롭다운 토글 핸들러
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // 이메일 옵션 리스트
  const options = [
    { label: "선택하기", value: "" },
    { label: "gmail.com", value: "gmail.com" },
    { label: "naver.com", value: "naver.com" },
    { label: "직접입력", value: "직접입력" },
  ];

  // 이메일 핸들러
  const handleOptionClick = (value) => {
    setEmailDomain(value);
    setIsCustomDomain(value === "직접입력");
    setDropdownOpen(false); // 옵션 선택 시 드롭다운 닫기
  };

  // 관계 핸들러
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setMembershipLevels([value]); // 하나의 등급만 선택 가능
  };

  return (
    <>
      <Header />
      <div className={`${isheader.layout} flex items-center flex-col`}>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
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
              {usernameError && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{usernameError}</p>}
              {isUsernameAvailable !== null && (
                <p style={{ color: isUsernameAvailable ? "green" : "red", fontSize: "14px", fontWeight: "700" }}>
                  {isUsernameAvailable ? "사용 가능한 아이디입니다." : "이미 존재하는 아이디입니다."}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium block">비밀번호</label>
            <div className="flex flex-col gap-y-2">
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
            </div>
            <div className="mt-2 pl-2">
              {passwordError && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{passwordError}</p>}
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
            <div className="mt-2 pl-2">
              {contactError && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{contactError}</p>}
            </div>
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
                placeholder="이메일"
                required
              />
              <span className="mx-1">@</span>
              <div className="option flex w-full relative">
                {!isCustomDomain && (
                  <input
                    type="text"
                    placeholder="선택하기"
                    className={styles.input_style}
                    value={emailDomain}
                    disabled
                  />
                )}

                {/* hidden input 요소는 select에서 선택한 값을 저장 */}
                <input type="hidden" value={emailDomain} />

                {/* '직접입력'을 선택했을 때만 보이는 text input 필드 */}
                {isCustomDomain && (
                  <input
                    autoComplete="off"
                    className={styles.input_style}
                    type="text"
                    value={emailDomain}
                    onChange={(e) => setEmailDomain(e.target.value)}
                    placeholder="직접입력"
                  />
                )}

                {/* 선택 가능한 옵션을 포함한 select 요소 */}
                <div
                  className="bg-[#1f1f1f] font-sm whitespace-nowrap px-4 h-[58px] text-sm font-bold text-[white] flex justify-center items-center"
                  onClick={toggleDropdown}
                >
                  {dropdownOpen ? "닫기" : "보기"}
                </div>

                {/* 드롭다운 메뉴 */}
                {dropdownOpen && (
                  <div className={styles.dropMenu}>
                    <ul className={styles.dropdown_menu}>
                      {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option.value)} className="py-2">
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 pl-2">
              {emailError && <p style={{ color: "red", fontSize: "14px", fontWeight: "700" }}>{emailError}</p>}
            </div>
          </div>
          <div>
            <label className="mb-2 pl-2 block">관계</label>
            <div className={`${styles.checkboxWrap} w-full flex`}>
              <div className="w-full">
                <label className={styles.checkboxButton}>
                  <input
                    type="checkbox"
                    value="지인"
                    checked={membershipLevels.includes("지인")}
                    onChange={handleCheckboxChange}
                  />
                  <span>지인</span>
                </label>
              </div>
              <div className="w-full">
                <label className={styles.checkboxButton}>
                  <input
                    type="checkbox"
                    value="상주"
                    checked={membershipLevels.includes("상주")}
                    onChange={handleCheckboxChange}
                  />
                  <span>상주</span>
                </label>
              </div>
            </div>
          </div>
          <Button type="submit" className="p-4" text="가입" color="#1f1f1f"></Button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
