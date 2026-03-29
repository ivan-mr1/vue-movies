import { apiClient } from './base';

export const fetchRemoteData = (endpoint, params = {}) => {
  return apiClient.get(endpoint, { params });
};

export const searchMovie = (query) => {
  return apiClient.get('/search', { params: { q: query } });
};

export const storageApi = {
  getList: () => apiClient.get('/mylist'),

  addItem: (data) => apiClient.post('/mylist', data),

  removeItem: (id) => apiClient.delete('/mylist', { params: { id } }),
};
