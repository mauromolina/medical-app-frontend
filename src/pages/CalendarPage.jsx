import { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Navbar,
  CalendarRecord,
  CalendarModal,
  FabAddNew,
} from "../components";

import { getMessagesES, localizer } from "../helpers";
import { useAuthStore, useCalendarStore, useUiStore } from "../hooks";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { openDateModal, isDateModalOpen, openUpdateModal } = useUiStore();
  const { records, setActiveRecord, startLoadingRecords } = useCalendarStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const onViewChanged = (e) => {
    localStorage.setItem("lastView", e);
    setLastView(e);
  };

  const recordStyleGetter = (record, start, end, isSelected) => {
    const isMyRecord =
      user.uid === record.user._id || user.uid === record.user.uid;

    const style = {
      backgroundColor: isMyRecord ? "#347cf7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };

  useEffect(() => {
    startLoadingRecords();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={records}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        components={{
          event: CalendarRecord,
        }}
        onDoubleClickEvent={openUpdateModal}
        onSelectEvent={(e) => setActiveRecord(e)}
        onView={onViewChanged}
        eventPropGetter={recordStyleGetter}
      />
      <CalendarModal />
      <FabAddNew />
    </>
  );
};
