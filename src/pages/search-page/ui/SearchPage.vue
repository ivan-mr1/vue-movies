<script setup>
import SearchMovie from '@/features/search-movie';
import SearchResults from '@/widgets/search';
</script>

<template>
  <div class="search-page">
    <SearchMovie />
    <SearchResults />
  </div>
</template>

<style scoped lang="scss">
.search-page {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
}
</style>
