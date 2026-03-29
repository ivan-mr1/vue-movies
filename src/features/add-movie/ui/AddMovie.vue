<script setup>
import { useSearchStore } from '@/features/search-movie';
import { useMovieStore } from '@/entities/movie-card';
import Button from '@/shared/ui/form/button';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const searchStore = useSearchStore();
const movieStore = useMovieStore();

const AddMovie = () => {
  searchStore.addToUserMovies(props.movie);
  movieStore.setActiveTab(1);
};
</script>

<template>
  <Button class="btn--green" @click="AddMovie">Add</Button>
</template>
