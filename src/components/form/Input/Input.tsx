import { HTMLProps, SyntheticEvent } from "react";
import styles from "./styles.module.scss";

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
}

const Input = ({ className, onChange, ...props }: InputProps) => {
  const onChangeHandle = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }

    onChange(e.currentTarget.value);
  };

  return (
    <input
      {...props}
      data-testid="input"
      className={`${styles.input} ${className || ""}`}
      onChange={onChangeHandle}
    />
  );
};

export { Input };
