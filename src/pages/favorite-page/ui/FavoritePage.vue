<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';
import SearchResults from '@/widgets/search';

const movieStore = useMovieStore();
</script>

<template>
  <div class="films">
    <div v-if="movieStore.activeTab === 1">
      <MovieList title="All movies" :movies="movieStore.movies" />
      <MovieList title="Watched movies" :movies="movieStore.watchedMovies" />
    </div>

    <div class="search" v-if="movieStore.activeTab === 2">
      <SearchResults />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
