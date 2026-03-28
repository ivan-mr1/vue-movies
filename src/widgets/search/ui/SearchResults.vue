<script setup>
import { useSearchStore } from '@/entities/movie-card/model/SearchStore';
import MovieCard from '@/entities/movie-card/ui/MovieCard.vue';
import AddMovie from '@/features/add-movie/ui/AddMovie.vue';
import { Loader2 } from '@/shared/ui/loaders';

const searchStore = useSearchStore();
</script>
<template>
  <Loader2 v-if="searchStore.loader" />
  <div v-else>
    <MovieCard v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true">
      <template #actions-search> <AddMovie :movie-id="movie.id" /> </template
    ></MovieCard>
  </div>
</template>
<style lang="scss" scoped>
@use '@helpers' as *;
</style>
