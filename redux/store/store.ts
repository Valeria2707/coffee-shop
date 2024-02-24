import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import backetReducer from "../slice/backetSlice";
import cappuccinoReducer from "../slice/coffeeSlice";
import notificationReducer from "../slice/notificationSlice";

export const store = configureStore({
  reducer: {
    cappuccino: cappuccinoReducer,
    backet: backetReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
