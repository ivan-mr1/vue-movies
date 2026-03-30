<script setup>
import { useMovieStore } from '@/entities/movie-card';
import Button from '@/shared/ui/form/button';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const movieStore = useMovieStore();

const AddMovie = () => {
  movieStore.addMovie(props.movie);
};
</script>

<template>
  <Button @click="AddMovie">Add to Watchlist</Button>
</template>
