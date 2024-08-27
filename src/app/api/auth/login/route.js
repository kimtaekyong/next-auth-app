// /app/api/auth/login.js
const { NextResponse } = require("next/server");
const pool = require("@/lib/db");
const bcrypt = require("bcrypt");
const { generateToken } = require("@/lib/auth");

async function POST(request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ error: "아이디 또는 비밀번호를 작성해주세요" }, { status: 400 });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    const user = rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user.id);
      const response = NextResponse.json({ success: true });
      response.cookies.set("authToken", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    return NextResponse.json({ error: "비밀번호를 다시 확인해주세요." }, { status: 401 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "서버오류" }, { status: 500 });
  }
}

module.exports = { POST };
