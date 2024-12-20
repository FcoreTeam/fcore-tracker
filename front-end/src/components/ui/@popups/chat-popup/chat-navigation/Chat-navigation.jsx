import { useDispatch } from "react-redux";

import { setPopupData } from "@/store/slices/popupsSlice";
import Image from "next/image";
import Button from "@/components/ui/button/Button";

import styles from "./chat-navigation.module.scss";

const ChatNavigation = ({ chatName }) => {
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
  };

  return (
    <div className={styles.chat__navigation}>
      <div className={styles.left__nav}>
        <Image
          src="/icons/chatsettings.svg"
          width={30}
          height={30}
          alt="settings"
          className={styles.settings__btn}
        />

        <p className={styles.chat__name}>{chatName}</p>
      </div>

      <div className={styles.right__nav}>
        <Button buttonClass="close__btn__popup" onClick={closePopup} />
      </div>
    </div>
  );
};
export default ChatNavigation;
