import { useDispatch } from "react-redux";
import { addTask } from "features/todo";
import { Todo } from "components/templates";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Todo />
      <button onClick={() => dispatch(addTask({ name: "Create TODO" }))}>
        Add
      </button>
    </div>
  );
}

export default App;
