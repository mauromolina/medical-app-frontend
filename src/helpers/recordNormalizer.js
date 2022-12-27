import { parseISO } from "date-fns";

export const normalizeRecordToDate = (records = []) => {
  return records.map((record) => {
    record.start = parseISO(record.start);
    record.end = parseISO(record.end);
    return record;
  });
};
