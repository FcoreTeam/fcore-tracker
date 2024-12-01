
import Auth from "@/components/auth/Auth";

import styles from './auth-page.module.scss'

const AuthPage = () => {
  return (
    <section className={styles.auth__page}>
      <Auth />
    </section>
  );
};
export default AuthPage;
