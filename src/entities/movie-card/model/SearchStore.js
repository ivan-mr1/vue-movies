import { defineStore } from 'pinia';
import { useMovieStore } from './store';
import { BASE_URL } from '@/shared/api/config';
import { ref } from 'vue';

const url = BASE_URL;

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    movies.value = data.results;
    loader.value = false;
  };

  const addToUserMovies = (obj) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...obj, isWatched: false });
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
