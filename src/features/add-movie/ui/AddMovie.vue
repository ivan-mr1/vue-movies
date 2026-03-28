<script setup>
import { useSearchStore } from '@/entities/movie-card/model/SearchStore';
import Button from '@/shared/ui/form/button';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const searchStore = useSearchStore();

const AddMovie = () => {
  searchStore.addToUserMovies(props.movie);
};
</script>

<template>
  <Button class="btn--green" @click="AddMovie">Add</Button>
</template>
