import { ButtonHTMLAttributes, FC, SVGProps } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const Button = ({ children, Icon, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {Icon && <Icon className={styles["button__icon"]} />}
      {children}
    </button>
  );
};

export { Button };
