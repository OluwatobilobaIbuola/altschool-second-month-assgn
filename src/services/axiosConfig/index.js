import axios from "axios";
const base = "https://randomuser.me/api";

export const publicRequest = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});
