<script setup>
import { ref } from 'vue';
import { useSearchStore } from '@/entities/movie-card/model/SearchStore';

const searchStore = useSearchStore();
const searchMovie = ref('');
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="Input movie" v-model="searchMovie" />
  </form>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;

.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
