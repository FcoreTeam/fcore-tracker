import Link from "next/link";
import Image from "next/image";

import styles from "./agreement.module.scss";

const Agreement = ({ agreementLink, agreementName }) => {
  return (
    <Link href={agreementLink} className={styles.agreement} download>
      <Image src="/icons/document.svg" width={40} height={40} />
      <p className={styles.agreement__name}>{agreementName}</p>
    </Link>
  );
};
export default Agreement;
