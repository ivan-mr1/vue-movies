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

    <TransitionGroup name="movie-fade" tag="div" class="movie-list__container">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie">
        <template #actions>
          <DeleteMovie :movie-id="movie.id" />
          <ToggleWatched :movie="movie" />
          <ToggleFavorite :movie="movie" />
        </template>
      </MovieCard>
    </TransitionGroup>
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

  &__container {
    position: relative;
  }
}

.movie-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.movie-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.movie-fade-enter-active,
.movie-fade-leave-active {
  transition: all 0.4s ease;
}

.movie-fade-leave-active {
  position: absolute;
  width: 100%;
}

.movie-fade-move {
  transition: transform 0.4s ease;
}
</style>
