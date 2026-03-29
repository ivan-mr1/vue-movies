<script setup>
import { useMovieStore } from '@/entities/movie-card';
import SearchResults from '@/widgets/search';

const movieStore = useMovieStore();
</script>

<template>
  <div class="search" v-if="movieStore.activeTab === 2">
    <SearchResults />
  </div>
</template>

<style scoped lang="scss"></style>
