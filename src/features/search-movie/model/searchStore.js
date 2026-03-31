import { defineStore } from 'pinia';
import { ref } from 'vue';
import { searchMovie as fetchSearchMovie } from '@/shared/api/data-api';

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false);
  const movies = ref([]);
  const searchMovieText = ref('');
  const error = ref(null); // ref для UI

  const getMovies = async (search) => {
    searchMovieText.value = search;
    error.value = null;
    if (!search || !search.trim()) {
      movies.value = [];
      return;
    }

    loader.value = true;
    try {
      const response = await fetchSearchMovie(search);
      movies.value = response.data?.results || [];
    } catch (err) {
      console.error('[SearchStore] Error fetching movies:', err);
      error.value = 'Failed to load movies';
      movies.value = [];
    } finally {
      loader.value = false;
    }
  };

  return {
    loader,
    movies,
    searchMovieText,
    error,
    getMovies,
  };
});
