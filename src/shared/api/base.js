import axios from 'axios';
import { BASE_URL } from './config';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || 'Произошла ошибка при запросе';
    console.error(`[API Error]: ${message}`);
    return Promise.reject(error);
  },
);
