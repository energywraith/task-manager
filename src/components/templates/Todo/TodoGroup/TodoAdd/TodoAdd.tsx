import { SyntheticEvent, useState } from "react";
import { Button } from "components/common";
import { PlusIcon, RemoveIcon } from "components/icons";
import { Input } from "components/form";
import { UseFormProps, useForm } from "./useForm";
import styles from "./styles.module.scss";

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

  const onAddButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (!showInput) {
      e.preventDefault();
      setShowInput(true);
      return;
    }
  };

  const onCloseButtonClick = () => {
    setShowInput(false);
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className={`${styles["todo-new"]} ${
        showInput ? styles["with-input"] : ""
      }`}
    >
      {showInput && (
        <Input
          type="text"
          name="name"
          placeholder="What do you need to do?"
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
        onClick={onAddButtonClick}
      />
      {showInput && (
        <Button
          className={`${styles["todo-new__button"]} ${styles["todo-new__button--close"]}`}
          Icon={RemoveIcon}
          onClick={onCloseButtonClick}
        />
      )}
    </form>
  );
};

export { TodoAdd };
