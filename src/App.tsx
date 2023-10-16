import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.scss";
import { RootState } from "./store";
import { increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.app}>
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
