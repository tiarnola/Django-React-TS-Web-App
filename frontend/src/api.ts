import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://cd48c9e8-e4fc-4728-ae3d-eeb050886734-dev.e1-eu-north-azure.choreoapis.dev/djangoreacttswebapp/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
