<script setup>
import { computed } from 'vue';
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

const { t } = useSliceI18n('movieAction', { ru, ua, en });

const isAdded = computed(() => {
  return movieStore.movies.some((el) => el.id === props.movie.id);
});

const AddMovie = () => {
  movieStore.addMovie(props.movie);
};
</script>

<template>
  <Button :disabled="isAdded" @click="AddMovie">
    {{ isAdded ? t('added') : t('add') }}
  </Button>
</template>
