import { parseISO, format } from "date-fns";

export const normalizeRecordToDate = (records = []) => {
  return records.map((record) => {
    record.start = parseISO(record.start);
    record.end = parseISO(record.end);
    record.formatedDate = format(record.start, "dd/MM/yyyy");
    return record;
  });
};
