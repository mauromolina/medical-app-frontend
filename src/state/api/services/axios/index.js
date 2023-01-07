import AxiosInstance from "./Axios";

export const AxiosRequest = (url, method, data, requestConfig) =>
  AxiosInstance.request({
    url,
    method,
    data,
    ...requestConfig,
  });
