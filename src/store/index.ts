import { configureStore } from "@reduxjs/toolkit";
import { todoInitialState, todoReducer } from "features/todo";
import { listenerMiddleware } from "./middleware";

const todoPersistedState = JSON.parse(localStorage.getItem("todo") || "null");

export const store = configureStore({
  preloadedState: {
    todo: todoPersistedState !== null ? todoPersistedState : todoInitialState,
  },
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
