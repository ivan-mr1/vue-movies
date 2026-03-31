<script setup>
import { useSearchStore } from '../index';
import Field from '@/shared/ui/form/field';

const searchStore = useSearchStore();
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchStore.searchMovieText)">
    <Field
      title="Search Movie"
      id="search-input"
      type="search"
      v-model="searchStore.searchMovieText"
    />
  </form>
</template>

<style lang="scss" scoped></style>
