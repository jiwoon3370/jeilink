import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 나중에 환경변수로 뺄 예정
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data.data;
};

export default axiosInstance;