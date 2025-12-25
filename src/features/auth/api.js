import apiClient from "../../services/apiClient";

export const loginApi = (data) => {
  return apiClient.post("/auth/login", data);
};
