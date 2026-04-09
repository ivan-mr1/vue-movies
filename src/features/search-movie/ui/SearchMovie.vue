<script setup>
import { useSearchStore } from '../index';
import { useSliceI18n } from '@/shared/i18n';
import Field from '@/shared/ui/form/field';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('titleField', { ru, ua, en });

const searchStore = useSearchStore();
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchStore.searchMovieText)">
    <Field
      :title="t('titleField')"
      id="search-input"
      type="search"
      v-model="searchStore.searchMovieText"
    />
  </form>
</template>

<style lang="scss" scoped></style>
