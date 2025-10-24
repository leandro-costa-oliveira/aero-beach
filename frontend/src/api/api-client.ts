import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:3000" : "/api",
});
