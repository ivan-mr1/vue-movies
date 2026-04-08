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

const { t } = useSliceI18n('movieWatched', { ru, ua, en });

const handleToggleWatched = () => {
  movieStore.toggleWatched(props.movie.id);
};
</script>

<template>
  <Button @click="handleToggleWatched">
    <span>
      {{ movie.isWatched ? t('notWatched') : t('isWatched') }}
    </span>
  </Button>
</template>
