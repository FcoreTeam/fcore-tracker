import Image from "next/image";
import styles from "./user-skill.module.scss";

const UserSkill = ({ skillImage, skillName }) => {
  return (
    <div className={styles.user__skill}>
      <Image
        src={skillImage}
        alt="skill"
        width={35}
        height={35}
        className={styles.skill__image}
      />
      <p className={styles.skill__name}>{skillName}</p>
    </div>
  );
};
export default UserSkill;
