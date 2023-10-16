export interface TodoTask {
  id: string;
  name: string;
  date: string;
  isFinished: boolean;
}

export type TodoTaskDraft = Omit<TodoTask, "id" | "isFinished" | "date">;

export interface TodoState {
  value: TodoTask[];
}
