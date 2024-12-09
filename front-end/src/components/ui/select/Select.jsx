import { memo, useRef, useState } from "react";

import styles from "./select.module.scss";
import clsx from "clsx";
import Image from "next/image";

const Select = ({ value, setValue, options, setBank }) => {
  const optionWrapperRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [bg, setBg] = useState({
    top: 0,
    color: "#000",
  });

  const onMouseEnter = (e, el) => {
    setBg({
      top:
        e.target.getBoundingClientRect().top -
        optionWrapperRef.current.getBoundingClientRect().top,
      color: el.color,
    });
  };

  return (
    <div
      className={clsx(styles.select__wrapper, isOpen && styles.open)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={styles.select__value}>{value}</div>
      <div className={styles.select__options}>
        <div ref={optionWrapperRef} className={styles.options__wrapper}>
          <span
            style={{ backgroundColor: bg.color, top: bg.top }}
            className={styles.option__bg}
          ></span>
          {options.map((el, i) => (
            <div
              className={styles.option}
              key={i}
              onClick={() => {
                setValue(el.name);
                setBank(el.name);
                debugger
              }}
              onMouseEnter={(e) => onMouseEnter(e, el)}
            >
              <Image src={el.iconUrl} width={30} height={30} />
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Select);
