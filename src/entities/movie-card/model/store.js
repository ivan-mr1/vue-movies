import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { browserStorage } from '@/shared/lib';

export const useMovieStore = defineStore('entities:movie', () => {
  const movies = ref(browserStorage.get('movies', []));

  const watchedMovies = computed(() => movies.value.filter((el) => el.isWatched));
  const favoriteMovies = computed(() => movies.value.filter((el) => el.isFavorite));
  const totalCountMovies = computed(() => movies.value.length);

  const addMovie = (movie) => {
    const isExist = movies.value.some((el) => el.id === movie.id);

    if (!isExist) {
      movies.value.push({
        ...movie,
        isWatched: false,
        isFavorite: false,
      });
    }
  };

  const toggleWatched = (id) => {
    const movie = movies.value.find((el) => el.id === id);
    if (movie) {
      movie.isWatched = !movie.isWatched;
    }
  };

  const toggleFavorited = (id) => {
    const movie = movies.value.find((el) => el.id === id);
    if (movie) {
      movie.isFavorite = !movie.isFavorite;
    }
  };

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  watch(
    movies,
    (state) => {
      browserStorage.set('movies', state);
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
    toggleFavorited,
    deleteMovie,
  };
});
