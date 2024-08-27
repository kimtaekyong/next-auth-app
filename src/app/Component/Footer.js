import React from "react";
import Link from "next/link";
import styles from "../../style/styles.module.css";

const Footer = () => {
  return (
    <>
      <div className="max-w-screen-md m-auto">
        <ul className="flex h-[100px] justify-center items-center px-2 pb-12 bg-white gap-x-3">
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/">
              홈
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/login">
              로그인
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/signup">
              가입
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/">
              리로드
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/mypage">
              프로필
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
