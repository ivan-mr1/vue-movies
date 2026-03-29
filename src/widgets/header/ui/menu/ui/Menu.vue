<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

import { useMovieStore } from '@/entities/movie-card';

const movieStore = useMovieStore();

const handleTabChange = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<template>
  <nav class="header__menu menu" :class="{ 'is-active': isOpen }" data-header-menu>
    <ul class="menu__list">
      <li class="menu__item">
        <RouterLink :to="{ name: 'Home' }" class="menu__link hover-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu__icon"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </RouterLink>
      </li>

      <li class="menu__item">
        <RouterLink
          :to="{ name: 'Search' }"
          class="menu__link hover-link"
          @click="handleTabChange(2)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu__icon"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span>Search</span>
        </RouterLink>
      </li>

      <li class="menu__item">
        <RouterLink :to="{ name: 'Favorite' }" class="menu__link hover-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu__icon"
          >
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            />
          </svg>
          <span>Favorites</span>
        </RouterLink>
      </li>

      <li class="menu__item">
        <RouterLink
          :to="{ name: 'Watched' }"
          class="menu__link hover-link"
          @click="handleTabChange(1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu__icon"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>Watched</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

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
    transition: left 0.3s;

    &::before {
      content: '';
      position: fixed;
      z-index: 2;
      top: 0;
      left: -100%;
      width: 100%;
      background-color: var(--menu-background-before);
      transition: left 0.3s;

      @include adaptive-clamp('height', 80, 60);
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
