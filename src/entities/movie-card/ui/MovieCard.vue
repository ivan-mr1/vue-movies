<script setup>
import { computed } from 'vue';
import { ImdbIcon } from '@/shared/ui/icons';
import { formatDate } from '@/shared/lib';
import { useSliceI18n } from '@/shared/i18n';
import { TMDB_IMAGE_BASE, POSTER_SIZE } from '../config';
import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const { t } = useSliceI18n('movieCard', { ru, ua, en });

const posterUrl = computed(() => {
  if (!props.movie.poster_path) return null;
  return `${TMDB_IMAGE_BASE}${POSTER_SIZE}${props.movie.poster_path}`;
});

const rating = computed(() => {
  return props.movie.vote_average ? props.movie.vote_average.toFixed(1) : t('noRating');
});
</script>

<template>
  <article class="movie">
    <img
      v-if="posterUrl"
      :src="posterUrl"
      :alt="movie.original_title"
      loading="lazy"
      width="150"
      height="225"
      class="movie__img"
    />
    <div v-else class="movie__img-placeholder">{{ t('noPoster') }}</div>

    <div class="movie__inner">
      <h3 class="movie__title">{{ movie.original_title || t('unknownTitle') }}</h3>

      <div class="movie__rating">
        <ImdbIcon />
        {{ rating }} ⭐
      </div>

      <time v-if="movie.release_date" class="movie__date" :datetime="movie.release_date">
        {{ t('release') }}: {{ formatDate(movie.release_date) }}
      </time>

      <div v-if="movie.overview" class="movie__overview">
        {{ movie.overview }}
      </div>

      <div v-if="$slots.actions" class="movie__buttons">
        <slot name="actions" />
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.movie {
  --size-image: 150px;
  display: grid;
  grid-template-columns: var(--size-image) 1fr;
  column-gap: 20px;
  margin-bottom: 20px;
  border: 1px solid var(--color-card-border);

  border-radius: 5px;

  &__img {
    width: var(--size-image);
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  &__img-placeholder {
    width: var(--size-image);
    height: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    border-radius: 5px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 10px;
  }

  &__title {
    font-size: 23px;
    font-weight: 600;
    color: var(--color-white);
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__date {
    font-size: 0.9rem;
  }

  &__overview {
    @include line-clamp(3);
  }

  &__buttons {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .movie {
    grid-template-columns: 1fr;
    &__img {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
