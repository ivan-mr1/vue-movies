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

const handleToggleFavorite = () => {
  movieStore.toggleFavorite(props.movie.id);
};
</script>

<template>
  <Button @click="handleToggleFavorite">
    <span>{{ movie.isFavorite ? 'In Favorites' : 'Add to Favorite' }}</span>
  </Button>
</template>
