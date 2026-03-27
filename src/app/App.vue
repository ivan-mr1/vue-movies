<script setup>
// import { RouterView } from 'vue-router';
import { useMovieStore } from './store/movieStore';
import Header from '@/widgets/header';
import './styles/main.scss';
import Movie from '@/entities/movie';
import Button from '@/shared/ui/form/button';

const movieStore = useMovieStore();
</script>

<template>
  <div class="wrapper">
    <!-- <RouterView /> -->
    <div class="container">
      <Header />
      <div class="films__wrapper">
        <div class="tabs">
          <Button :class="{ 'btn--green': movieStore.activeTab === 1 }">Favorite</Button>
          <Button :class="{ 'btn--green': movieStore.activeTab === 2 }">Search</Button>
        </div>

        <div class="movies" v-if="movieStore.activeTab === 1">
          <div>
            <h2 class="movies__title">
              Watched movies: {{ movieStore.watchedMovies.length }} films
            </h2>
            <Movie v-for="movie of movieStore.watchedMovies" :key="movie.id" :movie="movie" />
          </div>
          <div>
            <h2 class="movies__title">All movies: {{ movieStore.totalCountMovies }} films</h2>
            <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
          </div>
        </div>

        <div class="search" v-if="movieStore.activeTab === 2">Search movie</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.films__wrapper {
  max-width: 650px;
  margin: 0 auto;
}

.movies {
  &__title {
    font-size: 22px;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 30px;
}
</style>
