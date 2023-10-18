import { HTMLProps, SyntheticEvent } from "react";
import styles from "./styles.module.scss";

interface InputCheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, "onChange"> {
  onChange: (value: boolean) => void;
}

const InputCheckbox = ({
  className,
  onChange,
  ...props
}: InputCheckboxProps) => {
  const onChangeHandle = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }

    onChange(e.currentTarget.checked);
  };

  return (
    <input
      {...props}
      type="checkbox"
      data-testid="input-checkbox"
      className={`${styles.input} ${className || ""}`}
      onChange={onChangeHandle}
    />
  );
};

export { InputCheckbox };
