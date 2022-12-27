import React from "react";

export const CalendarRecord = ({ event }) => {
  const { title, category } = event;
  return (
    <>
      <strong>{title}</strong>
      <strong> - {category}</strong>
    </>
  );
};
