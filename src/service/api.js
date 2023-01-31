import axios from "axios";

export const api = axios.create({
  baseURL: "https://portal.albertsabin.com.br:8095",
  // baseURL: "http://localhost:3500",
});
