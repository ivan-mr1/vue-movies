<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';

const movieStore = useMovieStore();
</script>

<template>
  <MovieList title="Favorite movies" :movies="movieStore.favoriteMovies" />
</template>

<style scoped lang="scss"></style>
