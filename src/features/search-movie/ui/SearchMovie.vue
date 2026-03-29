<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../index';
import Field from '@/shared/ui/form/field';

const searchStore = useSearchStore();
const searchMovie = ref('');
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <Field title="Search Movie" id="search-input" type="search" v-model="searchMovie" />
  </form>
</template>

<style lang="scss" scoped></style>
