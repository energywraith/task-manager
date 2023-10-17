import { Stage } from "./stages";

export interface TodoTask {
  id: string;
  name: string;
  date: string;
}

export type TodoTaskDraft = Omit<TodoTask, "id" | "date">;

export interface TodoTaskStage {
  id: string;
  data: TodoTask[];
}

export interface TodoState {
  value: {
    [K in Stage]: TodoTask[];
  };
}

export interface ChangeStageAction {
  source: { index: number; droppableId: Stage };
  destination: { index: number; droppableId: Stage };
}
