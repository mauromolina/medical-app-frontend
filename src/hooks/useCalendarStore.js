import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { normalizeRecordToDate } from "../helpers/recordNormalizer";
import {
  onAddNewRecord,
  onDeleteRecord,
  onLoadRecords,
  onRemoveActiveRecord,
  onSetActiveRecord,
  onUpdateRecord,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { records, activeRecord } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveRecord = (calendarRecord) => {
    dispatch(onSetActiveRecord(calendarRecord));
    setTimeout(() => {
      dispatch(onRemoveActiveRecord());
    }, 10000);
  };

  const startSavingRecord = async (calendarRecord) => {
    try {
      console.log({ calendarRecord, user });
      if (calendarRecord.id) {
        await calendarApi.put(`/record/${calendarRecord.id}`, calendarRecord);
        dispatch(onUpdateRecord({ ...calendarRecord, user }));
        return;
      }
      const { data } = await calendarApi.post("/record", calendarRecord);
      dispatch(onAddNewRecord({ ...calendarRecord, id: data.record.id, user }));
    } catch (err) {
      console.log(err);
      Swal.fire("Error al guardar registro", err.response.data.msg, "error");
    }
  };

  const startDeletingRecord = async () => {
    try {
      await calendarApi.delete(`/record/${activeRecord.id}`);
      dispatch(onDeleteRecord());
    } catch (err) {
      console.log(err);
      Swal.fire("Error al eliminar registro", err.response.data.msg, "error");
    }
  };

  const startLoadingRecords = async () => {
    try {
      const { data } = await calendarApi.get("/record");
      console.log({ records: data.records });
      const records = normalizeRecordToDate(data.records);
      console.log(records);
      dispatch(onLoadRecords(records));
    } catch (err) {
      console.log("Error cargando registros");
      console.log(err);
    }
  };

  return {
    records,
    activeRecord,
    hasRecordSelected: !!activeRecord,
    setActiveRecord,
    startSavingRecord,
    startDeletingRecord,
    startLoadingRecords,
  };
};