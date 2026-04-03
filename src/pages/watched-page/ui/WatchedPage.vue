<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';
const movieStore = useMovieStore();
</script>

<template>
  <div class="page">
    <MovieList
      v-if="movieStore.watchedMovies.length > 0"
      title="Watched movies"
      :movies="movieStore.watchedMovies"
    />
    <div v-else class="empty-message">
      <p>Your watched list is empty.</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
