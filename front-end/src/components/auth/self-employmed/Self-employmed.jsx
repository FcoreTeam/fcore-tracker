import styles from "./self-employmed.module.scss";

const SelfEmploymed = ({ isLogin }) => {
  return (
    <div className={styles.auth__type}>
      {isLogin ? (
        <section className={styles.type__login}>a</section>
      ) : (
        <section className={styles.type__registration}>1</section>
      )}
    </div>
  );
};
export default SelfEmploymed;
