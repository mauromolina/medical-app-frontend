import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    error: undefined,
  },
  reducers: {
    checking: (state) => {
      state.status = "checking";
      state.user = {};
      state.error = undefined;
    },
    login: (state, { payload }) => {
      state.status = "auth";
      state.user = payload;
      state.error = undefined;
    },
    logout: (state, { payload }) => {
      state.status = "not-auth";
      state.user = {};
      state.error = payload;
    },
    cleanErrors: (state) => {
      state.error = undefined;
    },
  },
});

export const { checking, login, logout, cleanErrors } = authSlice.actions;
