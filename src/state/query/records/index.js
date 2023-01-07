import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api";
import {
  deleteRecordsMutation,
  getRecordsQuery,
  postRecordsMutation,
  updateRecordsMutation,
} from "./queries";

export const recordsApi = createApi({
  reducerPath: "recordsQuery",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 10,
  tagTypes: ["Records"],
  endpoints: (builder) => ({
    getRecords: builder.query(getRecordsQuery),
    addRecords: builder.mutation(postRecordsMutation),
    updateRecords: builder.mutation(updateRecordsMutation),
    deleteRecords: builder.mutation(deleteRecordsMutation),
  }),
});

export const {
  useGetRecordsQuery,
  useAddRecordsMutation,
  useUpdateRecordsMutation,
  useDeleteRecordsMutation,
} = recordsApi;

export const {
  endpoints: { getRecords, addRecords, updateRecords, deleteRecords },
  reducerPath: recordsReducerPath,
  reducer: recordsQueryReducer,
  middleware: recordsMiddleware,
} = recordsApi;
