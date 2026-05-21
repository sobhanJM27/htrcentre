import axios from "axios";

export const BASE_URL = "https://retrofit-nxb4.onrender.com/";
export const PUBLIC_BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
