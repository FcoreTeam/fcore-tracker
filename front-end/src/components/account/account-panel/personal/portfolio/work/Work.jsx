import Image from "next/image";

import styles from "./work.module.scss";

const Work = ({ workImage, workName, workDescription, workActivity }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__activity}>{workActivity}</div>
      <Image
        src={workImage}
        alt="work__banner"
        height={162}
        width={315}
        className={styles.work__image}
      />
      <p className={styles.work__name}>{workName}</p>
      <p className={styles.work__description}>{workDescription}</p>
    </div>
  );
};
export default Work;
