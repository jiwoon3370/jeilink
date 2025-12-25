import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // 나중에 환경변수로 분리
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 요청 인터셉터
 * - 매 요청마다 토큰 자동 첨부
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * 응답 인터셉터
 * - 공통 에러 처리
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 토큰 만료 or 인증 실패
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default apiClient;
