import axios from "axios";
import tokensForHeaders from "./tokenForHeaders";

const API_BASE_URL = "http://localhost:5200";

export const login = async (data) => {
  return axios.post(`${API_BASE_URL}/api/auth/login`, data);
};

export const getAllProducts = async () => {
  return await axios.get(`${API_BASE_URL}/api/product/all`, {
    headers: tokensForHeaders(),
  });
};

export const addProduct = async (data) => {
  return axios.post(`${API_BASE_URL}/api/product/add`, data, {
    headers: tokensForHeaders(),
  });
};

export const getProductById = async (id) => {
  return await axios.get(`${API_BASE_URL}/api/product/single/${id}`, {
    headers: tokensForHeaders(),
  });
};

export const updateProductById = async (id, data) => {
  return await axios.put(`${API_BASE_URL}/api/product/update/${id}`, data, {
    headers: tokensForHeaders(),
  });
};

export const getFavourites = async (products) => {
  return await axios.post(
    `${API_BASE_URL}/api/product/allByIds`,
    {
      products: products,
    },
    {
      headers: tokensForHeaders(),
    }
  );
};

export const searchProduct = async (search) => {
  return await axios.get(`${API_BASE_URL}/api/product/search?query=${search}`, {
    headers: tokensForHeaders(),
  });
};

export const deleteProduct = async (id) => {
  console.log(id)
  return await axios.delete(`${API_BASE_URL}/api/product/delete/`+id, {
    headers: tokensForHeaders(),
  });
};
