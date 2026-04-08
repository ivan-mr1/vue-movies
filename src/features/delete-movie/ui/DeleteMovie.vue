<script setup>
import { useMovieStore } from '@/entities/movie-card';
import { useSliceI18n } from '@/shared/i18n';
import Button from '@/shared/ui/form/button';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

const movieStore = useMovieStore();

const { t } = useSliceI18n('movieDelete', { ru, ua, en });

const handleDeleteMovie = () => {
  movieStore.deleteMovie(props.movieId);
};
</script>

<template>
  <Button @click="handleDeleteMovie">
    {{ t('delete') }}
  </Button>
</template>
