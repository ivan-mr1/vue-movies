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

<!-- <script setup>
import { ref, watch } from 'vue';
import { useSearchStore } from '@/entities/movie-card'; // Путь к вашему стору поиска
import Field from '@/shared/ui/form/field';
import MovieCard from '@/entities/movie-card';

const searchStore = useSearchStore();
const searchMovie = ref('');
let debounceTimeout = null;

// Автоматический поиск с задержкой (Debounce)
watch(searchMovie, (newValue) => {
  clearTimeout(debounceTimeout);

  if (!newValue.trim()) {
    searchStore.movies = [];
    return;
  }

  debounceTimeout = setTimeout(() => {
    searchStore.getMovies(newValue);
  }, 600);
});
</script> -->

<!-- <template>
  <div class="search-page">
    <section class="search-page__header">
      <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <Field
          title="Поиск фильмов"
          id="search-input"
          type="search"
          v-model="searchMovie"
          placeholder="Например: Интерстеллар"
        />
      </form>
    </section>

    <section class="search-page__content">
      <div v-if="searchStore.loader" class="loader-container">
        <div class="spinner"></div>
        <p>Ищем лучшие фильмы для вас...</p>
      </div>

      <div v-else-if="searchStore.movies.length > 0" class="movie-grid">
        <div v-for="movie in searchStore.movies" :key="movie.id" class="movie-grid__item">
          <MovieCard :movie="movie" is-search-result />

          <button class="btn-add" @click="searchStore.addToUserMovies(movie)">
            Добавить в мой список
          </button>
        </div>
      </div>

      <div v-else-if="searchMovie && !searchStore.loader" class="empty-state">
        <p>По запросу "{{ searchMovie }}" ничего не найдено.</p>
      </div>
    </section>
  </div>
</template> -->

<!-- <style scoped lang="scss">
.search-page {
  padding-top: 20px;

  &__header {
    margin-bottom: 40px;
    max-width: 600px;
    margin-inline: auto;
  }

  .loader-container {
    text-align: center;
    padding: 50px;
    color: #ffffff;
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .btn-add {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border-radius: 8px;
    font-weight: 600;
    transition: background 0.3s;

    &:hover {
      background-color: #3aa876;
    }
  }

  .empty-state {
    text-align: center;
    color: #999;
    font-size: 1.2rem;
    margin-top: 50px;
  }
}

// Простой спиннер
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: #42b983;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> -->
