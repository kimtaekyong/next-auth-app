import React from "react";
import styles from "../style/styles.module.css";

export default function Home() {
  return (
    <div className={`${styles.layout} flex justify-center items-center flex-col`}>
      <h1 className="text-xl text-white font-bold">메인</h1>
    </div>
  );
}

// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=8523
// DB_DATABASE=nextlogin

// SECRET_KEY=your-secret-key
