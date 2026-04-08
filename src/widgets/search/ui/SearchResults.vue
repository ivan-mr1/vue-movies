<script setup>
import { useSearchStore } from '@/features/search-movie';
import { MovieCard } from '@/entities/movie-card';
import AddMovie from '@/features/add-movie';
import { Loader2 } from '@/shared/ui/loaders';

const searchStore = useSearchStore();
</script>
<template>
  <div v-if="searchStore.loader" class="loader-container">
    <Loader2 />
    <p>We are looking for the best movies for you...</p>
  </div>
  <div v-else-if="searchStore.movies.length > 0">
    <MovieCard v-for="movie of searchStore.movies" :key="movie.id" :movie="movie">
      <template #actions> <AddMovie :movie="movie" /> </template>
    </MovieCard>
  </div>
  <div v-else-if="searchStore.searchMovieText && !searchStore.loader" class="empty-state">
    <p>Nothing found for the search query "{{ searchStore.searchMovieText }}"</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;

.loader-container {
  text-align: center;
  padding: 50px;
  color: var(--color-white);
}

.empty-state {
  text-align: center;
  color: var(--color-white);
  margin-top: 50px;
}
</style>
