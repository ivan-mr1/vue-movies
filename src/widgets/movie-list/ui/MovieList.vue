<script setup>
import MovieCard from '@/entities/movie-card';
import DeleteMovie from '@/features/delete-movie';
import ToggleWatched from '@/features/toggle-watched';

defineProps({
  title: String,
  movies: Array,
});
</script>
<template>
  <div class="movie-list">
    <h2 class="movies-list__title">{{ title }}: {{ movies.length }} films</h2>

    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie">
      <template #actions>
        <DeleteMovie :movie-id="movie.id" />
        <ToggleWatched :movie="movie" />
      </template>
    </MovieCard>
  </div>
</template>
<style lang="scss" scoped>
@use '@helpers' as *;

.movies-list {
  &__title {
    font-size: 22px;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
