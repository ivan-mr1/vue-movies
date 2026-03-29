import { defineStore } from 'pinia';
import { useMovieStore } from './store';
import { searchMovie } from '@/shared/api/data-api';
import { ref } from 'vue';

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
    movieStore.activeTab = 1;
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});

// option api
// export const useSearchStore = defineStore('searchStore', {
//   state: () => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search) {
//       this.loader = true;
//       const res = await fetch(`${url}${search}`);
//       const data = await res.json();
//       this.movies = data.results;
//       this.loader = false;
//     },
//     addToUserMovies(obj) {
//       const movieStore = useMovieStore();
//       movieStore.movies.push({ ...obj, isWatched: false });
//       movieStore.activeTab = 1;
//     },
//   },
// });
