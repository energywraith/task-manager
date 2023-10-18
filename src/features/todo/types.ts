import { Stage } from "./stages";

export interface TodoTask {
  id: string;
  name: string;
  date: string;
}

export interface TodoTaskDraft extends TodoTask {
  stage: Stage;
}

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

export interface RemoveTaskAction {
  id: TodoTask["id"];
  stage: Stage;
}
