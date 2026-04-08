<script setup>
import { useMovieStore } from '@/entities/movie-card';
import { useSliceI18n } from '@/shared/i18n';
import Button from '@/shared/ui/form/button';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const movieStore = useMovieStore();

const { t } = useSliceI18n('movieFavorite', { ru, ua, en });

const handleToggleFavorite = () => {
  movieStore.toggleFavorite(props.movie.id);
};
</script>

<template>
  <Button @click="handleToggleFavorite">
    <span>
      {{ movie.isFavorite ? t('inFavorite') : t('toFavorite') }}
    </span>
  </Button>
</template>
