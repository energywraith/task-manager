import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addTask, removeTask } from "features/todo";

function App() {
  const todoTasks = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todoTasks.map((todoTask) => (
          <li key={todoTask.id}>{todoTask.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(addTask({ name: "Create TODO" }))}>
        Add
      </button>
      <button onClick={() => dispatch(removeTask(todoTasks[0]?.id))}>
        Remove
      </button>
    </div>
  );
}

export default App;
