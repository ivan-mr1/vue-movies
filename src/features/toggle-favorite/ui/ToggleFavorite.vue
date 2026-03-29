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

const toggleStatusFav = () => {
  movieStore.toggleFavorited(props.movie.id);
};
</script>

<template>
  <Button class="btn--watched" @click="toggleStatusFav">
    <span v-if="!movie.isWatched">Favorite</span>
    <span v-else>Unfavorite</span>
  </Button>
</template>
