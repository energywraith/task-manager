import { TodoTask, TodoTaskInterface } from "components/common/TodoTask";
import { Stage, stagesLabels } from "features/todo/stages";
import { StrictModeDroppable } from "./StrictDropabble";
import styles from "./styles.module.scss";

interface TodoGroupProps {
  stage: Stage;
  tasks: TodoTaskInterface[];
}

const TodoGroup = ({ stage, tasks }: TodoGroupProps) => {
  return (
    <>
      <h2>{stagesLabels[stage]}</h2>
      <StrictModeDroppable key={stage} droppableId={stage}>
        {(provided) => (
          <section
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles["todo-group"]}
          >
            <ul>
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
          </section>
        )}
      </StrictModeDroppable>
    </>
  );
};

export { TodoGroup };
