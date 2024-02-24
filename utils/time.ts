import { format } from "date-fns";

export const formatDate = (date: Date | string | number) => {
  return format(date, "dd MMMM yyyy HH:mm");
};
