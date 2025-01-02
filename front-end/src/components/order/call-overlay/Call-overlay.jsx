import CallControlls from "./call-controlls/Call-controlls";

import styles from "./call-overlay.module.scss";

const CallOverlay = () => {
  return (
    <div className={styles.call__overlay}>
      <section className={styles.overlay}>

      </section>
      <CallControlls />
    </div>
  );
};
export default CallOverlay;
