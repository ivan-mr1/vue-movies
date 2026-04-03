<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';

const movieStore = useMovieStore();
</script>

<template>
  <div class="page">
    <MovieList v-if="movieStore.movies.length > 0" title="All movies" :movies="movieStore.movies" />
    <div v-else class="empty-message">
      <p>Your movies list is empty.</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
