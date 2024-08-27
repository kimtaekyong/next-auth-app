const jwt = require("jwt-simple");

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

// 토큰 생성 함수
function generateToken(userId) {
  return jwt.encode({ userId }, SECRET_KEY, "HS256");
}

// 토큰 검증 함수
function verifyToken(token) {
  try {
    // 토큰을 디코딩합니다.
    const decoded = jwt.decode(token, SECRET_KEY);
    return decoded.userId; // 사용자 ID 반환
  } catch (error) {
    // 디코딩 실패 시 null 반환
    console.error("Error decoding token:", error);
    return null;
  }
}

module.exports = { generateToken, verifyToken };
