import axios, { type AxiosInstance } from 'axios';

const API_BASE_URL = 'https://a810cf6a89e706b7.mokky.dev';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    throw new Error(`API Error: ${error.response?.status || 'Network Error'} - ${errorMessage}`);
  }
);

export const apiClient = {
  instance: axiosInstance,

  async get<T>(endpoint: string): Promise<T> {
    const response = await axiosInstance.get<T>(endpoint);
    return response.data;
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await axiosInstance.post<T>(endpoint, data);
    return response.data;
  },

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await axiosInstance.put<T>(endpoint, data);
    return response.data;
  },

  async patch<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await axiosInstance.patch<T>(endpoint, data);
    return response.data;
  },

  async delete<T>(endpoint: string): Promise<T> {
    const response = await axiosInstance.delete<T>(endpoint);
    return response.data;
  },
};
