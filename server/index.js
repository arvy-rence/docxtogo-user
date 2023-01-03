import axios from "axios";

export default axios.create({
  baseURL: "https://dtg-api.herokuapp.com/api",
})