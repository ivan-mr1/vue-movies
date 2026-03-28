<script setup>
import { useMovieStore } from '@/entities/movie-card/model/store';
import SearchMovie from '@/features/search-movie/ui/SearchMovie.vue';
import Button from '@/shared/ui/form/button';
import MovieList from '@/widgets/movie-list';
import SearchResults from '@/widgets/search/ui/SearchResults.vue';

const movieStore = useMovieStore();

const handleTabChange = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<template>
  <div class="films">
    <div class="films__tabs">
      <Button :class="{ 'btn--green': movieStore.activeTab === 1 }" @click="handleTabChange(1)"
        >Favorite</Button
      >
      <Button :class="{ 'btn--green': movieStore.activeTab === 2 }" @click="handleTabChange(2)"
        >Search</Button
      >
    </div>

    <div v-if="movieStore.activeTab === 1">
      <MovieList title="Watched movies" :movies="movieStore.watchedMovies" />
      <MovieList title="All movies" :movies="movieStore.movies" />
    </div>

    <div class="search" v-if="movieStore.activeTab === 2">
      <SearchMovie />
      <SearchResults />
    </div>
  </div>
</template>

<style scoped lang="scss">
.films {
  max-width: 650px;
  margin: 0 auto;
  &__tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 30px;
  }
}
</style>
