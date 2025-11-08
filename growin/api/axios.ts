import axios from "axios";
import { BASE_URL } from "./urls";

// axios 인스턴스 (인증 x)
export const publicAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터
publicAxios.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
publicAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);

      if (error.response.status === 401) {
        // 인증 에러 처리 (로그아웃 등)
      }
    } else if (error.request) {
      console.error("Network Error:", error.message);
    } else {
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);
