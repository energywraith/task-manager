import { Button, Container } from "components/common";
import styles from "./styles.module.scss";
import { GithubIcon } from "components/icons";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles["nav__container"]}>
        <h1>Todo list</h1>
        <a
          className={styles["nav__link"]}
          href="https://github.com/energywraith/todo-list"
        >
          <Button className={styles["nav__button"]} Icon={GithubIcon} />
        </a>
      </Container>
    </nav>
  );
};

export { Nav };
