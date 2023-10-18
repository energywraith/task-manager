import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  ChangeStageAction,
  RemoveTaskAction,
  TodoState,
  TodoTaskDraft,
} from "./types";

export const todoInitialState: TodoState = {
  value: {
    IN_PROGRESS: [
      {
        id: uuidv4(),
        name: "Do the laundry",
        date: new Date().toLocaleString(),
      },
    ],
    TODO: [
      {
        id: uuidv4(),
        name: "Cook lunch",
        date: new Date().toLocaleString(),
      },
    ],
    DONE: [],
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoTaskDraft>) => {
      const { stage, ...task } = action.payload;

      state.value[stage] = [task, ...state.value[stage]];
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
