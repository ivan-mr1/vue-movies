<script setup>
import { useMovieStore } from '@/entities/movie-card';
import MovieList from '@/widgets/movie-list';

const movieStore = useMovieStore();
</script>

<template>
  <MovieList title="All movies" :movies="movieStore.movies" />
</template>

<style scoped lang="scss"></style>
