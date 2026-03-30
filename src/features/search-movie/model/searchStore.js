import { defineStore } from 'pinia';
import { ref } from 'vue';
import { searchMovie as fetchSearchMovie } from '@/shared/api/data-api';

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false);
  const movies = ref([]);
  const searchMovieText = ref('');

  const getMovies = async (search) => {
    searchMovieText.value = search;

    if (!search || !search.trim()) {
      movies.value = [];
      return;
    }

    loader.value = true;
    try {
      const response = await fetchSearchMovie(search);
      movies.value = response.data?.results || [];
    } catch (error) {
      console.error('[SearchStore] Error fetching movies:', error);
      movies.value = [];
    } finally {
      loader.value = false;
    }
  };

  return {
    loader,
    movies,
    searchMovieText,
    getMovies,
  };
});
