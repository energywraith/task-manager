import { Button } from "components/common";
import { PlusIcon } from "components/icons";
import styles from "./styles.module.scss";
import { SyntheticEvent, useState } from "react";
import { UseFormProps, useForm } from "./useForm";

const TodoAdd = ({ stage }: UseFormProps) => {
  const { name, onNameChange, onSubmit } = useForm({ stage });

  const [showInput, setShowInput] = useState(false);

  const onSubmitHandle = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!showInput) {
      return;
    }

    onSubmit(e);
    setShowInput(false);
  };

  const onButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (!showInput) {
      e.preventDefault();
      setShowInput(true);
      return;
    }
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className={`${styles["todo-new"]} ${
        showInput ? styles["with-input"] : ""
      }`}
    >
      {showInput && (
        <input
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
          minLength={0}
          maxLength={125}
          required
          className={styles["todo-new__input"]}
        />
      )}
      <Button
        className={styles["todo-new__button"]}
        Icon={PlusIcon}
        onClick={onButtonClick}
      />
    </form>
  );
};

export { TodoAdd };
