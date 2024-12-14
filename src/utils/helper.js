import { format } from "date-fns";
export function formatDate(date) {
  const newDate = format(date, "MMM dd yyyy");
  return newDate;
}
