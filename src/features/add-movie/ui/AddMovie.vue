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

const AddMovie = () => {
  movieStore.deleteMovie(props.movieId);
  console.log('add');
};
</script>

<template>
  <Button class="btn--green" @click="AddMovie">Add</Button>
</template>
