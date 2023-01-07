import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api";
import {
  postLoginMutation,
  postRegisterMutation,
  refreshTokenQuery,
} from "./queries";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 10,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation(postLoginMutation),
    register: builder.mutation(postRegisterMutation),
    refreshToken: builder.query(refreshTokenQuery),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyRefreshTokenQuery,
} = authApi;

export const {
  endpoints: { login, register },
  reducerPath: authReducerPath,
  reducer: authQueryReducer,
  middleware: authMiddleware,
} = authApi;
