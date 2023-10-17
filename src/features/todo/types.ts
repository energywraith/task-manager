import { Stage } from "./stages";

export interface TodoTask {
  id: string;
  name: string;
  date: string;
  isFinished: boolean;
  stage: Stage;
}

export type TodoTaskDraft = Omit<
  TodoTask,
  "id" | "isFinished" | "date" | "stage"
>;

export interface TodoState {
  value: TodoTask[];
}
