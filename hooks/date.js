import moment from "moment";

export const formatDate = (date) => {
  return moment(date).subtract(8, "hours").format('MMM Do YYYY');
}