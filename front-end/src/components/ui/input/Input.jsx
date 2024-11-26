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
  isTextArea,
}) => {
  console.log(value);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= length) {
      onChange(event);
    }
  };

  return (
    <>
      {!isTextArea ? (
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className={clsx(
            styles.input,
            styles[inputClass],
            styles[validateClass]
          )}
          maxLength={length}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          value={value}
          id={id}
        />
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
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          value={value}
          id={id}
        ></textarea>
      )}
    </>
  );
};

export default Input;
