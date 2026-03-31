import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { browserStorage, toggleArrayItemProperty } from '@/shared/lib';

export const useMovieStore = defineStore('entities:movie', () => {
  const initialData = browserStorage.get('movies', []);
  const movies = ref(Array.isArray(initialData) ? initialData : []);

  const watchedMovies = computed(() => movies.value.filter((el) => el.isWatched));
  const favoriteMovies = computed(() => movies.value.filter((el) => el.isFavorite));
  const totalCountMovies = computed(() => movies.value.length);

  const addMovie = (newMovie) => {
    if (!newMovie?.id) return;

    const exists = movies.value.some((el) => el.id === newMovie.id);

    if (!exists) {
      movies.value.push({
        ...newMovie,
        isWatched: false,
        isFavorite: false,
      });
    }
  };

  const toggleWatched = (id) => toggleArrayItemProperty(movies.value, id, 'isWatched');
  const toggleFavorite = (id) => toggleArrayItemProperty(movies.value, id, 'isFavorite');

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  watch(
    movies,
    (currentMovies) => {
      browserStorage.set('movies', currentMovies);
    },
    { deep: true },
  );

  return {
    movies,
    watchedMovies,
    favoriteMovies,
    totalCountMovies,
    addMovie,
    toggleWatched,
    toggleFavorite,
    deleteMovie,
  };
});
