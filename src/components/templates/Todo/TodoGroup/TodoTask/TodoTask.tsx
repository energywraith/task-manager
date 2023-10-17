import { useDispatch } from "react-redux";
import {
  TodoTask as TodoTaskInterface,
  changeStage,
  removeTask,
} from "features/todo";
import { InputCheckbox } from "components/form";
import styles from "./styles.module.scss";
import { Button } from "components/common";
import { RemoveIcon } from "components/icons";
import { stages } from "features/todo/stages";
import { Draggable } from "react-beautiful-dnd";
import { Stage } from "features/todo/stages";
import { DragIcon } from "components/icons/DragIcon";

interface TodoTaskProps extends TodoTaskInterface {
  index: number;
  stage: Stage;
}

const TodoTask = ({ id, name, date, stage, index }: TodoTaskProps) => {
  const dispatch = useDispatch();

  const isFinished = stage === stages.DONE;
  const finishedClassname = isFinished ? styles["todo-task--finished"] : "";

  const toggleTaskFinished = () => {
    dispatch(
      changeStage({
        source: {
          index,
          droppableId: stage,
        },
        destination: {
          index: 0,
          droppableId: stage === stages.DONE ? stages.TODO : stages.DONE,
        },
      })
    );
  };

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <li className={`${styles["todo-task"]} ${finishedClassname}`}>
            <DragIcon className={styles["todo-task__drag-icon"]} />
            <InputCheckbox
              className={styles["todo-task__checkbox"]}
              checked={isFinished}
              onChange={toggleTaskFinished}
            />
            <h3 className={styles["todo-task__name"]}>{name}</h3>
            <h4 className={styles["todo-task__date"]}>Added {date}</h4>
            <ul className={styles["todo-task__actions"]}>
              <li>
                <Button
                  onClick={() => dispatch(removeTask({ id, stage }))}
                  Icon={RemoveIcon}
                  className={styles["todo-task__action"]}
                />
              </li>
            </ul>
          </li>
        </div>
      )}
    </Draggable>
  );
};

export { TodoTask };

export type { TodoTaskInterface };
