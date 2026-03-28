import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: 'Mission: Impossible – The Final Reckoning',
        overview:
          'Ethan Hunt faces his most dangerous mission yet, attempting to stop a devastating AI-driven weapon from falling into the wrong hands.',
        poster_path: '/img/1.webp',
        release_date: '2025-05-23',
        isWatched: false,
      },
      {
        id: 2,
        original_title: 'From the World of John Wick: Ballerina',
        overview:
          'A skilled assassin and ballerina, Eve Macarro, seeks revenge against those who destroyed her family.',
        poster_path: '/img/2.jpg',
        release_date: '2025-06-06',
        isWatched: false,
      },
      {
        id: 3,
        original_title: 'Thunderbolts*',
        overview:
          'A group of anti-heroes and former villains are forced to team up for a high-stakes government mission.',
        poster_path: '/img/3.jpg',
        release_date: '2025-05-02',
        isWatched: true,
      },
      {
        id: 4,
        original_title: 'The Running Man',
        overview:
          'In a dystopian future, Ben Richards enters a deadly reality show to save his family. Directed by Edgar Wright.',
        poster_path: '/img/4.jpg',
        release_date: '2025-11-14',
        isWatched: true,
      },
      {
        id: 5,
        original_title: 'Sisu: Road to Revenge',
        overview:
          'The legendary Finnish gold miner returns to engage in a brutal confrontation with a new set of enemies.',
        poster_path: '/img/5.jpg',
        release_date: '2025-08-15',
        isWatched: false,
      },
    ],
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
