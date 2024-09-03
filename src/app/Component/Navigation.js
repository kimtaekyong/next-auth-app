import React from "react";
import Link from "next/link";
import styles from "../../style/styles.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navigation = () => {
  return (
    <>
      <div className="max-w-screen-md m-auto">
        <ul
          className={`${styles.border_top} flex h-[80px] justify-center items-center px-2 pb-12 pt-6 bg-white gap-x-7`}
        >
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/BoradList">
              <HomeOutlinedIcon color="#1f1f1f" sx={{ fontSize: 32 }} />
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/signup">
              가입
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/page/CreateList">
              <AddBoxOutlinedIcon color="#1f1f1f" sx={{ fontSize: 32 }} />
            </Link>
          </li>
          <li className={styles.bottom_navbar}>
            <Link className={styles.link} href="/">
              <NotificationsNoneOutlinedIcon color="#1f1f1f" sx={{ fontSize: 32 }} />
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

export default Navigation;
