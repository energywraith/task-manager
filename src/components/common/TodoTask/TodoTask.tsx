import { useDispatch } from "react-redux";
import {
  TodoTask as TodoTaskInterface,
  removeTask,
  toggleFinishTask,
} from "features/todo";
import { InputCheckbox } from "components/form";
import styles from "./styles.module.scss";
import { Button } from "components/common";
import { RemoveIcon } from "components/icons";
import { stages } from "features/todo/stages";

const TodoTask = ({ id, name, date, stage }: TodoTaskInterface) => {
  const dispatch = useDispatch();

  const isFinished = stage === stages.DONE;
  const finishedClassname = isFinished ? styles["todo-task--finished"] : "";

  return (
    <li className={`${styles["todo-task"]} ${finishedClassname}`}>
      <InputCheckbox
        className={styles["todo-task__checkbox"]}
        checked={isFinished}
        onChange={() => {
          dispatch(toggleFinishTask(id));
        }}
      />
      <h3 className={styles["todo-task__name"]}>{name}</h3>
      <h4 className={styles["todo-task__date"]}>Added {date}</h4>
      <ul className={styles["todo-task__actions"]}>
        <li>
          <Button
            onClick={() => dispatch(removeTask(id))}
            Icon={RemoveIcon}
            className={styles["todo-task__action"]}
          />
        </li>
      </ul>
    </li>
  );
};

export { TodoTask };

export type { TodoTaskInterface };
