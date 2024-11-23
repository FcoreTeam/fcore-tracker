import clsx from "clsx";

import styles from "./input.module.scss";

const Input = ({
  inputType,
  inputPlaceholder,
  inputClass,
  validateClass,
  onChange,
  value,
}) => {
  console.log(value);
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className={clsx(styles.input, styles[inputClass], styles[validateClass])}
      maxLength={14}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
