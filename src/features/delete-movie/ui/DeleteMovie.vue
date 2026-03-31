<script setup>
import { useMovieStore } from '@/entities/movie-card';
import Button from '@/shared/ui/form/button';

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

const movieStore = useMovieStore();

const handleDeleteMovie = () => {
  movieStore.deleteMovie(props.movieId);
};
</script>

<template>
  <Button @click="handleDeleteMovie">Delete</Button>
</template>
