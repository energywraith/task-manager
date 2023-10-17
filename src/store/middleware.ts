import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask,
  removeTask,
  changeStage,
  changeOrderInStage,
} from "features/todo";
import type { RootState } from "./index";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addTask, removeTask, changeStage, changeOrderInStage),
  effect: (_action, listenerApi) =>
    localStorage.setItem(
      "todo",
      JSON.stringify((listenerApi.getState() as RootState).todo)
    ),
});
