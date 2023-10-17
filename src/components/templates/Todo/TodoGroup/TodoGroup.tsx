import { Stage, stagesLabels } from "features/todo/stages";
import { TodoTask, TodoTaskInterface } from "./TodoTask";
import { StrictModeDroppable } from "./StrictDropabble";
import styles from "./styles.module.scss";

interface TodoGroupProps {
  stage: Stage;
  tasks: TodoTaskInterface[];
}

const TodoGroup = ({ stage, tasks }: TodoGroupProps) => {
  return (
    <section className={styles["todo-group"]}>
      <h2>{stagesLabels[stage]}</h2>
      <StrictModeDroppable key={stage} droppableId={stage}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles["todo-group__droppable"]}
          >
            <ul className={styles["todo-group__list"]}>
              {tasks.map((task, index) => {
                return (
                  <TodoTask
                    key={task.id}
                    index={index}
                    stage={stage}
                    {...task}
                  />
                );
              })}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </section>
  );
};

export { TodoGroup };
