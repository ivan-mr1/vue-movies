<script setup>
import { useMovieStore } from '@/entities/movie-card';
import { useSliceI18n } from '@/shared/i18n';
import Message from '@/shared/ui/message';
import MovieList from '@/widgets/movie-list';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('moviePage', { ru, ua, en });

const movieStore = useMovieStore();
</script>

<template>
  <div class="page">
    <MovieList
      v-if="movieStore.movies.length > 0"
      :title="t('title')"
      :movies="movieStore.movies"
    />
    <Message v-else :text="t('empty')" />
  </div>
</template>
