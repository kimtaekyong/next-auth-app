// /app/api/auth/check.js
const { NextResponse } = require("next/server");
const pool = require("@/lib/db"); // 데이터베이스 연결을 위한 pool 객체를 가져옵니다.
const { verifyToken } = require("@/lib/auth"); // JWT 토큰을 검증하는 함수 verifyToken을 가져옵니다.

export async function GET(request) {
  // GET 요청을 처리하는 비동기 함수입니다.
  const cookie = request.cookies.get("authToken"); // 요청에서 'authToken' 쿠키를 가져옵니다.
  const token = cookie ? cookie.value : null; // 쿠키가 있으면 쿠키의 값을, 없으면 null을 할당합니다.
  console.log("Received token:", token); // 디버깅을 위해 받은 토큰을 콘솔에 출력합니다.

  const userId = verifyToken(token); // 토큰을 검증하여 사용자 ID를 추출합니다.
  console.log("User ID from token:", userId); // 디버깅을 위해 추출한 사용자 ID를 콘솔에 출력합니다.

  if (!userId) {
    // 사용자 ID가 없으면 (즉, 토큰 검증이 실패하면)
    return NextResponse.json({ authenticated: false }, { status: 401 }); // 인증 실패 응답을 반환합니다.
  }

  try {
    // 데이터베이스에서 사용자 정보와 membership_level을 조회합니다.
    const [rows] = await pool.query("SELECT username, membership_level FROM users WHERE id = ?", [userId]); // 사용자 ID로 데이터베이스에서 username과 membership_level을 조회합니다.
    console.log("User from database:", rows); // 디버깅을 위해 데이터베이스에서 조회된 사용자 정보를 콘솔에 출력합니다.
    const user = rows[0]; // 결과에서 첫 번째 사용자 정보를 가져옵니다.

    if (!user) {
      // 만약 사용자가 데이터베이스에서 조회되지 않으면
      return NextResponse.json({ authenticated: false }, { status: 401 }); // 인증 실패 응답을 반환합니다.
    }

    // membership_level에 따라 처리
    if (user.membership_level === "지인") {
      // 'member' 등급인 경우
      return NextResponse.json({ authenticated: true, user, message: "Please complete your registration." }); // 인증 성공 응답을 반환하고 사용자 정보를 포함시킵니다.
    } else if (user.membership_level === "상주") {
      // 'guest' 등급인 경우
      return NextResponse.json({ authenticated: true, user, message: "Please complete your registration." }); // 인증 성공 응답을 반환하되, 등록 완료 요청 메시지를 포함합니다.
    } else {
      // 기타 등급의 경우
      return NextResponse.json({ authenticated: false }, { status: 403 }); // 접근 권한이 없음을 알리는 응답을 반환합니다.
    }
  } catch (error) {
    // 데이터베이스 쿼리나 기타 오류가 발생하면
    console.error("Error:", error); // 오류를 콘솔에 출력합니다.
    return NextResponse.json({ authenticated: false }, { status: 500 }); // 서버 오류 응답을 반환합니다.
  }
}
