import React from "react";
import { useCalendarStore, useUiStore } from "../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveRecord } = useCalendarStore();

  const handleAddRecord = () => {
    setActiveRecord({
      title: "",
      notes: "",
      start: new Date(),
      end: new Date(),
      category: "",
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Mauro",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleAddRecord}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
