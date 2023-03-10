import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    loadingRecords: true,
    records: [],
    activeRecord: null,
  },
  reducers: {
    onSetActiveRecord: (state, { payload }) => {
      state.activeRecord = payload;
    },
    onRemoveActiveRecord: (state) => {
      state.activeRecord = null;
    },
    onAddNewRecord: (state, { payload }) => {
      state.records.push(payload);
      state.records = state.records.sort((a, b) => a.start - b.start);
      state.activeRecord = null;
    },
    onUpdateRecord: (state, { payload }) => {
      state.records = state.records.map((record) =>
        record.id === payload.id ? payload : record
      );
    },
    onDeleteRecord: (state) => {
      if (state.activeRecord) {
        state.records = state.records.filter(
          (record) => record.id !== state.activeRecord.id
        );
        state.activeRecord = null;
      }
    },
    onLoadRecords: (state, { payload = [] }) => {
      state.loadingRecords = false;
      payload.forEach((record) => {
        const exists = state.records.some(
          (dbRecord) => dbRecord.id === record.id
        );
        if (!exists) state.records.push(record);
      });
    },
    onLogout: (state) => {
      state.loadingRecords = true;
      state.records = [];
      state.activeRecord;
    },
  },
});

export const {
  onSetActiveRecord,
  onAddNewRecord,
  onUpdateRecord,
  onDeleteRecord,
  onLoadRecords,
  onLogout,
  onRemoveActiveRecord,
} = calendarSlice.actions;
