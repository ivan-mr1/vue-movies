import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useMovieStore } from '@/entities/movie-card';
import { searchMovie } from '@/shared/api/data-api';

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    if (!search || !search.trim()) return;

    loader.value = true;
    try {
      const response = await searchMovie(search);
      movies.value = response.data.results || [];
    } catch (error) {
      console.error('[SearchStore] Error fetching movies:', error);
      movies.value = [];
    } finally {
      loader.value = false;
    }
  };

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    // Логика вкладок вынесена в UI для соблюдения принципов FSD
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});
