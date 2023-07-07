import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

import {
  FAILED_RESPONSE_API,
  SFACE_JWT_COOKIE,
  SUCCESSFUL_RESPONSE_API,
} from "./constant";

const request = axios.create({
  baseURL: `${import.meta.env.VITE_API_ROOT}/v1`,
  timeout: 20000,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (config) => {
  if (!config.url.toLowerCase().includes("auth")) {
    if (Cookies.get(SFACE_JWT_COOKIE)) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${Cookies.get(SFACE_JWT_COOKIE)}`,
      };
    }
  }
  if (config.url.toLowerCase().includes("upload")) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  }
  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  if (response.config.method === "get") return response;
  if (response.status === 200 || response.status === 201) {
    enqueueSnackbar(SUCCESSFUL_RESPONSE_API, { variant: "success" });
  }
  return response;
};

const onResponseError = (error) => {
  // enqueueSnackbar(error?.response?.data?.message || FAILED_RESPONSE_API, {
  //   variant: "error",
  // });
  return Promise.reject(error);
};

request.interceptors.request.use(onRequest, onRequestError);
request.interceptors.response.use(onResponse, onResponseError);

export default request;
