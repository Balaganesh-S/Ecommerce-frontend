import apiClient from "./apiClient";

export const getProducts = async () => {
  const response = await apiClient.get("/Products");
  return response.data.data;
};

export const getProductsByCategoryId = async (categoryId) => {
  const response = await apiClient.get(`/products/${categoryId}`);
  return response.data.data;
};

export const getProductsByKeyword = async (keyword) => {
  const response = await apiClient.get(`products/search/${keyword}`);
  return response.data.data;
};
