<script setup>
import { MovieCard } from '@/entities/movie-card';
import DeleteMovie from '@/features/delete-movie';
import ToggleFavorite from '@/features/toggle-favorite';
import ToggleWatched from '@/features/toggle-watched';

defineProps({
  title: { type: String, default: '' },
  movies: { type: Array, default: () => [] },
});
</script>
<template>
  <div class="movie-list">
    <h2 class="movie-list__title">{{ title }}: {{ movies.length }} films</h2>

    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :is-search="false">
      <template #actions>
        <DeleteMovie :movie-id="movie.id" />
        <ToggleWatched :movie="movie" />
        <ToggleFavorite :movie="movie" />
      </template>
    </MovieCard>
  </div>
</template>
<style lang="scss" scoped>
@use '@helpers' as *;

.movie-list {
  &__title {
    font-size: 22px;
    font-weight: 600;
    color: var(--color-white);
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
