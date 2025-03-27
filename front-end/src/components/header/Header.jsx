import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./header.module.scss";

const Header = ({ mainPage }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <header className={clsx(styles.header, !mainPage ? styles.header__bg : "")}>
      {/* {!mainPage ? (
        <Image
          src="/icons/logo.png"
          height={100}
          width={100}
          alt="logo"
          className={styles.header__logo}
        />
      ) : (
        <></>
      )} */}

      <div className={styles.header__list}>
        <Link href="/" className={styles.header__link}>
          Faq
        </Link>
        <Link href="/" className={styles.header__link}>
          Инвесторам
        </Link>
        {/* <Link
          href={isAuth ? "/account" : "/auth"}
          className={styles.header__link}
        >
          {isAuth ? "Личный кабинет" : "Исполнителям"}
        </Link> */}
      </div>
    </header>
  );
};
export default Header;
