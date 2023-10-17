import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => (
  <section className={`${styles.container} ${className || ""}`}>
    {children}
  </section>
);

export { Container };
