import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ChangeStageAction,
  RemoveTaskAction,
  TodoState,
  TodoTaskDraft,
} from "./types";
import { stages } from "./consts";
import { getTodoInitialState } from "./helpers";

export const todoInitialState: TodoState = getTodoInitialState();

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoTaskDraft>) => {
      const { stage, ...task } = action.payload;

      const defaultStage = stages.TODO;

      state.value[stage || defaultStage] = [
        task,
        ...state.value[stage || defaultStage],
      ];
    },
    removeTask: (state, action: PayloadAction<RemoveTaskAction>) => {
      const { id, stage } = action.payload;

      state.value[stage] = state.value[stage].filter(
        (todoTask) => todoTask.id !== id
      );
    },
    changeOrderInStage: (state, action: PayloadAction<ChangeStageAction>) => {
      const { source, destination } = action.payload;

      const [removed] = state.value[source.droppableId].splice(source.index, 1);
      state.value[source.droppableId].splice(destination.index, 0, removed);
    },
    changeStage: (state, action: PayloadAction<ChangeStageAction>) => {
      const { source, destination } = action.payload;

      const [removed] = state.value[source.droppableId].splice(source.index, 1);

      state.value[destination.droppableId].splice(
        destination.index,
        0,
        removed
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTask, removeTask, changeStage, changeOrderInStage } =
  todoSlice.actions;
