import Entrepreneur from "../entrepreneur/Entrepreneur";
import NotEmployed from "../not-employed/Not-employed";
import SelfEmploymed from "../self-employmed/Self-employmed";
import Company from "../company/Company";

import styles from "./registration.module.scss";

const Registration = ({ registartionType, isLogin, isNext }) => {
  
  return (
    <section className={styles.registration__section}>
      {registartionType === "not-employed" ? (
        <NotEmployed isLogin={false} isNext={isNext} />
      ) : null}
      {registartionType === "self-employed" ? (
        <SelfEmploymed isLogin={false} />
      ) : null}
      {registartionType === "entrepreneur" ? (
        <Entrepreneur isLogin={false} />
      ) : null}
      {registartionType === "company" ? <Company isLogin={false} /> : null}
    </section>
  );
};
export default Registration;
