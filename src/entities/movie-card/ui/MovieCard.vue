<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
  isSearch: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="movie">
    <div class="movie__inner">
      <div class="movie__name">{{ movie.original_title }}</div>
      <time class="movie__date" :datetime="movie.release_date">
        Release: {{ movie.release_date }}
      </time>
      <span class="movie__overview">{{ movie.overview }}</span>
      <div class="movie__buttons" v-if="!isSearch">
        <slot name="actions" />
      </div>
      <div class="movie__buttons" v-else>
        <slot name="actions-search" />
      </div>
    </div>
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      loading="lazy"
      width="150"
      height="212"
      class="movie__img"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@helpers' as *;

.movie {
  --size-image: 150px;
  display: grid;
  grid-template-columns: 1fr var(--size-image);
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;

  &__img {
    width: var(--size-image);
    height: auto;
    object-fit: cover;
    border-radius: var(--border);
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  &__date {
    font-size: 0.9rem;
  }

  &__overview {
    display: block;
    margin-bottom: 20px;
  }

  &__buttons {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  &__accept {
    margin-right: 10px;
  }
}
</style>
