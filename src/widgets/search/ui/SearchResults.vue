<script setup>
import { useSearchStore } from '@/entities/movie-card';
import MovieCard from '@/entities/movie-card';
import AddMovie from '@/features/add-movie';
import { Loader2 } from '@/shared/ui/loaders';

const searchStore = useSearchStore();
</script>
<template>
  <Loader2 v-if="searchStore.loader" />
  <div v-else>
    <MovieCard v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true">
      <template #actions-search> <AddMovie :movie="movie" /> </template
    ></MovieCard>
  </div>
</template>
<style lang="scss" scoped>
@use '@helpers' as *;
</style>
