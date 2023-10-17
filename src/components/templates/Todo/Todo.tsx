import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Container, TodoGroup } from "components/common";
import {
  TodoState,
  changeStage,
  changeOrderInStage,
  ChangeStageAction,
} from "features/todo";
import { Stage, stages } from "features/todo/stages";

interface TodoProps {
  tasks: TodoState;
}

const Todo = ({ tasks }: TodoProps) => {
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      dispatch(
        changeOrderInStage({ source, destination } as ChangeStageAction)
      );
    } else {
      dispatch(changeStage({ source, destination } as ChangeStageAction));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {Object.keys(stages).map((stage) => (
          <TodoGroup
            key={stage}
            stage={stage as Stage}
            tasks={tasks.value[stage as Stage]}
          />
        ))}
      </Container>
    </DragDropContext>
  );
};

export { Todo };
