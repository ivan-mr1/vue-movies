<script setup>
import { computed } from 'vue';
import { useMovieStore } from '@/entities/movie-card';
import { HomeIcon, SearchIcon, FavoriteIcon, EyeIcon } from '@/shared/ui/icons';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const movieStore = useMovieStore();

const navigation = computed(() => [
  { to: 'Home', label: 'All Movies', count: movieStore.totalCountMovies, icon: HomeIcon },
  { to: 'Search', label: 'Search', count: null, icon: SearchIcon },
  {
    to: 'Favorite',
    label: 'Favorites',
    count: movieStore.favoriteMovies.length,
    icon: FavoriteIcon,
  },
  { to: 'Watched', label: 'Watched', count: movieStore.watchedMovies.length, icon: EyeIcon },
]);
</script>

<template>
  <nav class="header__menu menu" :class="{ 'is-active': isOpen }" data-header-menu>
    <ul class="menu__list">
      <li v-for="item in navigation" :key="item.to" class="menu__item">
        <RouterLink :to="{ name: item.to }" class="menu__link">
          <component :is="item.icon" class="menu__icon" />
          <span>
            {{ item.label }}
            <template v-if="item.count !== null">({{ item.count }})</template>
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  --menu-link: var(--color-light);
  --menu-background: #1f2a32;
  --menu-background-before: #1f2a32;

  @media (max-width: em(767.98)) {
    position: fixed;
    top: 0;
    left: -100%;
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr auto;
    justify-content: center;
    gap: rem(25);
    width: 100%;
    height: 100%;
    padding: rem(100) rem(15) rem(30);
    background-color: var(--menu-background);
    transition: left var(--transition-duration);

    &::before {
      content: '';
      position: fixed;
      z-index: 2;
      top: 0;
      left: -100%;
      width: 100%;
      height: var(--header-height);
      background-color: var(--menu-background-before);
      transition: left var(--transition-duration);
    }

    &.is-active {
      left: 0;

      &::before {
        left: 0;
      }
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: rem(10);

    @include adaptive-clamp('column-gap', 30, 15);

    @media (max-width: em(767.98)) {
      flex-direction: column;
      justify-content: center;
      column-gap: rem(8);
    }
  }

  &__item {
    text-align: right;
  }

  &__link {
    color: var(--menu-link);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    @media (max-width: em(767.98)) {
      height: 44px;
      font-size: rem(26);
    }
  }

  &__icon {
    flex-shrink: 0;
  }
}

.exact-active-link {
  color: var(--accent-color);
  font-weight: 600;
}

.exact-active-link .menu__icon {
  stroke: var(--accent-color);
}
</style>
