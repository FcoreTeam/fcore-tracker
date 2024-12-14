import Image from "next/image";
import styles from "./user-skill.module.scss";

const UserSkill = () => {
  return (
    <div className={styles.user__skill}>
      <Image
        src=""
        alt="skill"
        width={25}
        height={25}
        className={styles.skill__image}
      />
      <p className={styles.skill__name}></p>
    </div>
  );
};
export default UserSkill;
