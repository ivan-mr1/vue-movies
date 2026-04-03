<script setup>
import Logo from '@/shared/ui/logo';
import Menu from './Menu.vue';
import Burger1 from './burger-button/Burger-1.vue';
</script>

<template>
  <header class="header" data-header data-right-padding>
    <div class="header__container">
      <RouterLink :to="{ name: 'Home' }">
        <Logo
          class="header__logo"
          image-url="/img/logo.svg"
          :width="25"
          :height="25"
          text="MOVIES"
        />
      </RouterLink>
      <div data-header-overlay class="header__overlay">
        <Menu />
      </div>
      <Burger1 />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  box-shadow: 0 0 1rem 0 var(--color-orange);
  opacity: 0;
  transition: opacity var(--transition-duration) ease-in-out;
}

.header.scroll::before {
  opacity: 1;
}

.header {
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;
  transition: transform var(--transition-duration) ease-in-out;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include adaptive-clamp('column-gap', 40, 20);
    @include adaptive-clamp('min-height', 100, 65);
  }

  &__overlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }
}
</style>
