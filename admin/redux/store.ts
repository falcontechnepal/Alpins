import { configureStore } from "@reduxjs/toolkit";
import { employeesDetailReducer } from "./employeesDetailSlice";

export const store = configureStore({
  reducer: {
   employeesDetailStore: employeesDetailReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
