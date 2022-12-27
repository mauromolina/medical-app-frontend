import React from "react";
import { useCalendarStore } from "../hooks";

export const FabDelete = () => {
  const { hasRecordSelected, startDeletingRecord } = useCalendarStore();

  return (
    <button
      className="btn btn-danger fab-danger"
      style={{ display: hasRecordSelected ? "" : "none", zIndex: 1000 }}
      onClick={startDeletingRecord}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
