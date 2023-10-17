import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TodoState, TodoTask, TodoTaskDraft } from "./types";
import { stages } from "./stages";

const initialState: TodoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoTaskDraft>) => {
      state.value.push({
        id: uuidv4(),
        isFinished: false,
        date: new Date().toLocaleString(),
        stage: stages.TODO,
        ...action.payload,
      });
    },
    removeTask: (state, action: PayloadAction<TodoTask["id"]>) => {
      state.value = state.value.filter(
        (todoTask) => todoTask.id !== action.payload
      );
    },
    toggleFinishTask: (state, action: PayloadAction<TodoTask["id"]>) => {
      state.value = state.value.map((todoTask) => {
        if (todoTask.id !== action.payload) return todoTask;

        return {
          ...todoTask,
          stage: todoTask.stage === stages.DONE ? stages.TODO : stages.DONE,
        };
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTask, removeTask, toggleFinishTask } = todoSlice.actions;
