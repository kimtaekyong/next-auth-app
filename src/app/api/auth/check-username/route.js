// /app/api/auth/check-username.js
const { NextResponse } = require("next/server");
const pool = require("@/lib/db");

async function POST(request) {
  const { username } = await request.json();

  if (!username) {
    return NextResponse.json({ error: "아이디를 입력해야 합니다." }, { status: 400 });
  }

  try {
    // 사용자 이름 중복 체크
    const [existingUser] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    if (existingUser.length > 0) {
      return NextResponse.json({ available: false });
    }

    return NextResponse.json({ available: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "내부 서버 오류가 발생했습니다." }, { status: 500 });
  }
}

module.exports = { POST };
