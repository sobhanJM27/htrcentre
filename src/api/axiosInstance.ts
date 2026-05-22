import axios from "axios";

export const BASE_URL = "https://retrofit-nxb4.onrender.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
