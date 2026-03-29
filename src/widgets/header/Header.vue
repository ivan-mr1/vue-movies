<script setup>
import Logo from '@/shared/ui/logo';
import { useMovieStore } from '@/entities/movie-card';
import Button from '@/shared/ui/form/button';
import SearchMovie from '@/features/search-movie';

const movieStore = useMovieStore();

const handleTabChange = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <Logo class="header__logo" image-url="/img/logo.svg" :width="40" :height="40" text="MOVIES" />
      <div class="films__tabs">
        <SearchMovie v-if="movieStore.activeTab === 2" />
        <Button :class="{ 'btn--green': movieStore.activeTab === 1 }" @click="handleTabChange(1)"
          >Watchlist</Button
        >
        <Button :class="{ 'btn--green': movieStore.activeTab === 2 }" @click="handleTabChange(2)"
          >Search movie</Button
        >
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 3px solid var(--color-orange);
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    min-height: fluid(100, 70);
  }
}

.films {
  &__tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
