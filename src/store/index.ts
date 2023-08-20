import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";
import { LayoutSlice } from "./slices/LayoutSlice";

export const store = configureStore({
  reducer: {
    [AuthSlice.name]: AuthSlice.reducer,
    [LayoutSlice.name]: LayoutSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
