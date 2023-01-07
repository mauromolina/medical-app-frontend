import { AxiosRequest } from "./axios";
import { HTTP_REQUEST } from "./utils/constants";

const METHODS = ["get", "put", "post", "patch", "delete"];

const request = {
  [HTTP_REQUEST.AXIOS]: AxiosRequest,
};

const httpMethods = METHODS.map(
  (method) =>
    (url, data = {}, requestConfig = {}) =>
      request[HTTP_REQUEST.AXIOS](url, method, data, requestConfig)
);

export const [get, put, post, patch, del] = httpMethods;
