import { useDispatch, useSelector } from "react-redux";
import { onRemoveActiveRecord, onSetActiveRecord } from "../state";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { records, activeRecord } = useSelector((state) => state.calendar);
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const setActiveRecord = (calendarRecord) => {
    dispatch(onSetActiveRecord(calendarRecord));
    setTimeout(() => {
      if (isDateModalOpen) dispatch(onRemoveActiveRecord());
    }, 10000);
  };

  return {
    records,
    activeRecord,
    hasRecordSelected: !!activeRecord,
    setActiveRecord,
  };
};
