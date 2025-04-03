import apiClient from "./apiClient";

export const getCategories = async () => {
  const response = await apiClient.get("/Category");
  return response.data.data;
};
