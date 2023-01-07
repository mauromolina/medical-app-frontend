import * as httpMethods from "../index";

export const axiosBaseQuery =
  () =>
  async ({ url, method = "get", body = {} }) => {
    try {
      const result = await httpMethods[method](url, body);
      return { data: result };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
