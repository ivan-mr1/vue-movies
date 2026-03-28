import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: 2,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched);
    },
    totalCountMovies() {
      return this.movies.length;
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const movie = this.movies.find((el) => el.id === id);
      if (movie) {
        movie.isWatched = !movie.isWatched;
      }
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
  },
});
