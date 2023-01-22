import { normalizeRecordToDate } from "../../../helpers";
import { ENDPOINTS } from "../../api";
import { onLoadRecords } from "../../store/calendar/calendarSlice";

const endpoint = ENDPOINTS.RECORDS;

export const getRecordsQuery = {
  query: () => ({ url: endpoint }),
  providesTags: ["Records"],
  transformResponse: (response) => {
    const records = normalizeRecordToDate(response.data.records);
    return records;
  },
  async onQueryStarted(_args, { dispatch, queryFulfilled }) {
    const { data: response } = await queryFulfilled;
    dispatch(onLoadRecords(response));
  },
};

export const postRecordsMutation = {
  query: (record) => ({ url: endpoint, method: "post", body: record }),
  invalidatesTags: ["Records"],
};

export const updateRecordsMutation = {
  query: (record) => ({
    url: `${endpoint}/${record.id}`,
    method: "put",
    body: record,
  }),
  invalidatesTags: ["Records"],
};

export const deleteRecordsMutation = {
  query: (record) => ({ url: `${endpoint}/${record.id}`, method: "del" }),
  invalidatesTags: ["Records"],
};
