<script setup>
import { useSearchStore } from '@/features/search-movie';
import { useSliceI18n } from '@/shared/i18n';
import { MovieCard } from '@/entities/movie-card';
import AddMovie from '@/features/add-movie';
import { Loader2 } from '@/shared/ui/loaders';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('searchResult', { ru, ua, en });

const searchStore = useSearchStore();
</script>
<template>
  <div v-if="searchStore.loader" class="loader-container">
    <Loader2 />
    <p>{{ t('loading') }}</p>
  </div>
  <div v-else-if="searchStore.movies.length > 0">
    <MovieCard v-for="movie of searchStore.movies" :key="movie.id" :movie="movie">
      <template #actions> <AddMovie :movie="movie" /> </template>
    </MovieCard>
  </div>
  <div v-else-if="searchStore.searchMovieText && !searchStore.loader" class="empty-state">
    <p>{{ t('notFound', { query: searchStore.searchMovieText }) }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;

.loader-container {
  text-align: center;
  padding: 50px;
  color: var(--color-white);
}

.empty-state {
  text-align: center;
  color: var(--color-white);
  margin-top: 50px;
}
</style>
