<script setup>
import Button from '@/shared/ui/form/button';
import { useMovieStore } from '@/entities/movie-card';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const movieStore = useMovieStore();

const toggleStatus = () => {
  movieStore.toggleWatched(props.movie.id);
};
</script>

<template>
  <Button class="btn--watched" @click="toggleStatus">
    <span v-if="!movie.isWatched">Watched</span>
    <span v-else>Unwatched</span>
  </Button>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;
</style>
