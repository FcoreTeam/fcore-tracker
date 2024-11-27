import clsx from "clsx";

import styles from "./input.module.scss";

const Input = ({
  inputType,
  inputPlaceholder,
  inputClass,
  validateClass,
  onChange,
  value,
  length,
  onKeyDown,
  id,
  inputRef,
  isTextArea,
}) => {


  return (
    <>
      {!isTextArea ? (
        <>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className={clsx(
            styles.input,
            styles[inputClass],
            styles[validateClass]
          )}
          maxLength={length}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          id={id}
          ref={inputRef}
        />
        {inputType === "checkbox" ? (
          
          <label htmlFor={id} className={styles.checkbox__label}></label>
        ) : null}
        </>
      ) : (
        <textarea
          type={inputType}
          placeholder={inputPlaceholder}
          className={clsx(
            styles.input,
            styles[inputClass],
            styles[validateClass]
          )}
          maxLength={length}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          id={id}
          ref={inputRef}
        ></textarea>
      )}
    </>
  );
};

export default Input;
