import { v4 as uuidv4 } from "uuid";
import { TodoTaskDraft } from "./types";

export const getTodoTaskDraft = ({
  name,
  stage,
}: {
  name: TodoTaskDraft["name"];
  stage?: TodoTaskDraft["stage"];
}) => ({
  id: uuidv4(),
  date: new Date().toLocaleString(),
  name,
  stage,
});

export const getTodoInitialState = () => ({
  value: {
    IN_PROGRESS: [
      getTodoTaskDraft({
        name: "Do the laundry",
      }),
    ],
    TODO: [
      getTodoTaskDraft({
        name: "Cook lunch",
      }),
    ],
    DONE: [],
  },
});
