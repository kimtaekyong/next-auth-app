const mysql = require("mysql2/promise");

// 데이터베이스 연결 풀 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // 연결 풀의 최대 연결 수
  queueLimit: 0, // 대기열의 최대 길이, 0은 무제한
});

// 연결 풀을 모듈로 내보내기
module.exports = pool;
