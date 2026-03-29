import axios from 'axios';

const isDev = import.meta.env.DEV;

export const apiClient = axios.create({
  baseURL: isDev ? '' : '/api',
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
