import { HTMLProps } from "react";
import styles from "./styles.module.scss";

const InputCheckbox = ({
  className,
  ...props
}: HTMLProps<HTMLInputElement>) => (
  <input
    {...props}
    type="checkbox"
    className={`${styles.input} ${className || ""}`}
  />
);

export { InputCheckbox };
