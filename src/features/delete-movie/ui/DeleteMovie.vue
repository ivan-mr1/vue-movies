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

const removeMovie = () => {
  movieStore.deleteMovie(props.movieId);
};
</script>

<template>
  <Button class="btn--delete" @click="removeMovie">Delete</Button>
</template>
