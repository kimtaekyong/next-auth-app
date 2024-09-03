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
    // 사용자 정보를 데이터베이스에서 조회합니다.
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    const user = rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      // 로그인 성공 시 토큰을 발행합니다.
      const token = generateToken(user.id);
      const response = NextResponse.json({ success: true });
      response.cookies.set("authToken", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      // 회원 등급에 따른 추가 처리
      if (user.membership_level === "지인") {
        // '지인' 등급이면 회원 가입 페이지로 리다이렉트
        response.headers.set("Location", "/page/BoradList");
        return response;
      } else if (user.membership_level === "상주") {
        response.headers.set("Location", "/page/BoradList");
        // '상주' 등급이면 성공 응답을 반환
        return response;
      } else {
        // 그 외의 경우에는 서버 오류를 반환
        return NextResponse.json({ error: "서버 오류" }, { status: 500 });
      }
    }

    // 비밀번호가 틀리면 401 오류를 반환
    return NextResponse.json({ error: "비밀번호를 다시 확인해주세요." }, { status: 401 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "서버오류" }, { status: 500 });
  }
}

module.exports = { POST };
