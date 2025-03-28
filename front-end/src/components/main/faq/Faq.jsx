import { useState } from "react";
import styles from "./faq.module.scss";

const Faq = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`${styles.question} ${
            openIndex === index ? styles.open : ""
          }`}
          onClick={() => toggleQuestion(index)}
        >
          <div className={styles.body}>
            <div className={styles.body__info}>
              <p className={styles.number}>{"0" + (index + 1)}</p>
              <p className={styles.question__text}>{item.question}</p>
            </div>

            <div className={styles.is__open}>
              <span className={styles.plus}></span>
            </div>
          </div>

          <div className={styles.answer__wrapper}>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
