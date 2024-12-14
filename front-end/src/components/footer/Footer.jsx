import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.company__info}>
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={150}
          height={150}
          className={styles.comapny__logo}
        />
        <div className={styles.text__info}>
          <p className={styles.company__name}>Fcore Tracker © 2025</p>
          <p className={styles.company__description}>Развиваем будущее</p>
        </div>
      </div>
      <div className={styles.other__data}>
        <Link
          href="termsofusefcoretracker.odt"
          className={styles.footer__link}
          download
        >
          Пользовательское соглашение
        </Link>
        <Link href="" className={styles.footer__link} download>
          Политика конфиденциальности
        </Link>
        <Link
          href="fcoretrackeroferta.odt"
          className={styles.footer__link}
          download
        >
          Договор оферты
        </Link>
        <Link href="contactsfcoretracker.odt" className={styles.footer__link}>
          Контакты
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
