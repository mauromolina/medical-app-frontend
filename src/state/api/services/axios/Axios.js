import axios from "axios";
import { getAxiosMessage } from "../../../../helpers/getAxiosMessage";
import { API_ROOT } from "../../../../utils/constants";
import { HEADER } from "../utils/constants";
import { SnackbarUtilities } from "../../../../utils/snackbar";

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

AxiosInstance.interceptors.response.use(
  (response) => {
    response.data.code &&
      SnackbarUtilities.success(getAxiosMessage(response.data.code));
    return response;
  },
  (error) => {
    SnackbarUtilities.error(
      getAxiosMessage(error.response.data.code || error.code)
    );
    return Promise.reject(error);
  }
);

export default AxiosInstance;
