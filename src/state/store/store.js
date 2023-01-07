import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { uiSlice, calendarSlice, authSlice } from "..";
import { authApi, authMiddleware } from "../query/auth";
import { recordsApi, recordsMiddleware } from "../query/records";

const customizedDefaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const middlewares = [recordsMiddleware, authMiddleware];

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    auth: authSlice.reducer,
    [recordsApi.reducerPath]: recordsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: [...customizedDefaultMiddleware, ...middlewares],
  enhancers: [],
});

setupListeners(store.dispatch);
