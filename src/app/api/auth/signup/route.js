// /app/api/auth/register.js
const { NextResponse } = require("next/server");
const pool = require("@/lib/db");
const bcrypt = require("bcrypt");

async function POST(request) {
  const { username, password, confirmPassword, contact } = await request.json();

  if (!username || !password || !confirmPassword || !contact) {
    return NextResponse.json({ error: "모든 필드를 입력해야 합니다." }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ error: "비밀번호가 일치하지 않습니다." }, { status: 400 });
  }

  // 비밀번호 복잡성 체크
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
  if (!passwordRegex.test(password)) {
    return NextResponse.json({ error: "비밀번호는 대문자 하나와 특수 문자를 포함해야 합니다." }, { status: 400 });
  }

  try {
    // 사용자 이름 중복 체크
    const [existingUser] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    if (existingUser.length > 0) {
      return NextResponse.json({ error: "이미 존재하는 사용자 이름입니다." }, { status: 400 });
    }

    // 비밀번호 해시화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 정보를 데이터베이스에 삽입
    await pool.query("INSERT INTO users (username, password, contact) VALUES (?, ?, ?)", [
      username,
      hashedPassword,
      contact,
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "내부 서버 오류가 발생했습니다." }, { status: 500 });
  }
}

module.exports = { POST };
