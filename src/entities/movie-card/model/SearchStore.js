import { defineStore } from 'pinia';
import { BASE_URL } from '@/shared/api/config';

const url = BASE_URL;

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
      console.log(data);
    },
  },
});
