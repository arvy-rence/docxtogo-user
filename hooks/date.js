import moment from "moment";

export const formatDate = (date) => {
  return moment(date).subtract(8, "hours").format('MM/DD/YYYY HH:mm');
}