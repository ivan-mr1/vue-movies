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

const handleToggleWatched = () => {
  movieStore.toggleWatched(props.movie.id);
};
</script>

<template>
  <Button @click="handleToggleWatched">
    <span>{{ movie.isWatched ? 'Unwatched' : 'Watched' }}</span>
  </Button>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;
</style>
