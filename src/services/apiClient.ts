// src/services/apiClient.ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 1. Create Axios Instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api', // Replace with your URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Request Interceptor (Attach Token)
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Get token from localStorage or cookies
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 3. Response Interceptor (Global Error Handling)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle 401 Unauthorized globally if needed
    if (error.response?.status === 401) {
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

// --- FUNCTION 1: Simple JSON Call ---
export const apiCall = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// --- FUNCTION 2: Form Data Call (File Uploads) ---
export const apiFormDataCall = async <T>(
  method: 'POST' | 'PUT' | 'PATCH',
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data', // Explicitly set for file uploads
      },
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};