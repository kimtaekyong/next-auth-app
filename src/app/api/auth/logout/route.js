const { NextResponse } = require("next/server");

export async function POST(request) {
  const response = NextResponse.json({ success: true });

  // 쿠키에서 토큰 제거
  response.cookies.delete("authToken", {
    path: "/",
  });

  return response;
}
