import Entrepreneur from "../entrepreneur/Entrepreneur";
import NotEmployed from "../not-employed/Not-employed";
import SelfEmploymed from "../self-employmed/Self-employmed";
import Company from "../company/Company";

import styles from "./login.module.scss";

const Login = ({ loginType }) => {
  return (
    <section className={styles.registration__section}>
      {loginType === "not-employed" ? <NotEmployed isLogin={true} /> : null}
      {loginType === "self-employed" ? <SelfEmploymed isLogin={true} /> : null}
      {loginType === "entrepreneur" ? <Entrepreneur isLogin={true} /> : null}
      {loginType === "company" ? <Company isLogin={true} /> : null}
    </section> // need refactoring
  );
};
export default Login;
