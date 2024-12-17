import Popup from "../Popup";
import { useSelector, useDispatch } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";
import styles from "./company-popup.module.scss";
import Button from "../../button/Button";
import UserSkill from "./user-skill/User-skill";

const CompanyPopup = () => {
  const dispatch = useDispatch();
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );
  const { skills } = useSelector((state) => state.auth.otherInfo);
  const { description } = useSelector((state) => state.auth.thirdStage);
  const mappedSkills = skills.map((item) => (
    <UserSkill skillName={item.skillName} skillImage={item.skillImage} />
  ));
  const closePopup = () => {
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
  };
  return (
    <>
      {isOpen && popupType === "company" && (
        <Popup>
          <div className={styles.company__popup}>
            <div className={styles.popup__wrap}>
              <p className={styles.popup__name}>{popupName} 📘</p>
              <p className={styles.popup__description}>{popupDescription}</p>
              <section className={styles.company__info}>
                <p className={styles.company__section}>1. О себе</p>
                <p className={styles.section__description}>{description}</p>
                <p className={styles.company__section}>2. Дата регистрации</p>
                <p className={styles.section__description}>01.01.2023</p>
                <p className={styles.company__section}>3. Хард скиллы</p>
                <div className={styles.skills}>{mappedSkills}</div>
                <Button
                  buttonText="Закрыть"
                  onClick={closePopup}
                  buttonClass="close__btn"
                />
              </section>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default CompanyPopup;
