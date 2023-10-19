import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "components/common";
import { TodoGroup } from "./TodoGroup";
import {
  changeStage,
  changeOrderInStage,
  ChangeStageAction,
  Stage,
  stages,
} from "features/todo";
import { RootState } from "store";
import styles from "./styles.module.scss";

const Todo = () => {
  const tasks = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const dispatchProps = { source, destination } as ChangeStageAction;

    if (source.droppableId === destination.droppableId) {
      dispatch(changeOrderInStage(dispatchProps));
    } else {
      dispatch(changeStage(dispatchProps));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container className={styles.todo}>
        {Object.keys(stages).map((stage) => (
          <TodoGroup
            key={stage}
            stage={stage as Stage}
            tasks={tasks[stage as Stage]}
          />
        ))}
      </Container>
    </DragDropContext>
  );
};

export { Todo };
