import axios from "axios";
import { API_ROOT } from "../../../../utils/constants";
import { HEADER } from "../utils/constants";

const AxiosInstance = axios.create({
  baseURL: API_ROOT,
});

AxiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    [HEADER.X_TOKEN]: localStorage.getItem("token"),
  };
  return config;
});

export default AxiosInstance;
