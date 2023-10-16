import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TodoState, TodoTask, TodoTaskDraft } from "./types";

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
        date: new Date().toISOString(),
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
          isFinished: !todoTask.isFinished,
        };
      });
    },
  },
});

export const { addTask, removeTask, toggleFinishTask } = todoSlice.actions;

export default todoSlice.reducer;
