<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';

const movieStore = useMovieStore();
</script>

<template>
  <div class="page">
    <MovieList
      v-if="movieStore.favoriteMovies.length > 0"
      title="Favorite movies"
      :movies="movieStore.favoriteMovies"
    />
    <div v-else class="empty-message">
      <p>Your favorite list is empty. Go to search and add some gems!</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
