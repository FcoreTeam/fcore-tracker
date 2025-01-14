import { useDispatch } from "react-redux";

import Image from "next/image";
import Button from "@/components/ui/button/Button";

import styles from "./work.module.scss";
import { deleteWork } from "@/store/slices/portfolioSlice";

const Work = ({
  workImage,
  workName,
  workId,
  workDescription,
  workActivity,
  onClick,
}) => {
  const dispatch = useDispatch();
  const setWorkState = (event) => {
    event.stopPropagation();
    dispatch(
      deleteWork({
        workId: workId,
      })
    );
  };
  return (
    <div className={styles.work} onClick={onClick}>
      <Button
        isButtonImage={true}
        buttonClass="delete__btn"
        buttonImage="/icons/trash.svg"
        onClick={setWorkState}
      />
      <div className={styles.work__activity}>{workActivity}</div>
      <Image
        src={URL.createObjectURL(workImage)}
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
