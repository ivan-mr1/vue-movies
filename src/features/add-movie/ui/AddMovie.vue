<script setup>
import { computed } from 'vue';
import { useMovieStore } from '@/entities/movie-card';
import Button from '@/shared/ui/form/button';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const movieStore = useMovieStore();

const isAdded = computed(() => {
  return movieStore.movies.some((el) => el.id === props.movie.id);
});

const AddMovie = () => {
  movieStore.addMovie(props.movie);
};
</script>

<template>
  <Button :disabled="isAdded" @click="AddMovie">
    {{ isAdded ? 'Added movie' : 'Add to Watchlist' }}
  </Button>
</template>
