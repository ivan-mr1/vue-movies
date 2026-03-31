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
  <Button class="btn--favorite" @click="toggleStatusFav">
    <span>{{ movie.isFavorite ? 'In Favorites' : 'Add to Favorite' }}</span>
  </Button>
</template>
