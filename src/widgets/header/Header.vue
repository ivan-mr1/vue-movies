<script setup>
import Logo from '@/shared/ui/logo';
import Menu from './ui/menu/ui/Menu.vue';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink :to="{ name: 'Home' }" class="menu__link hover-link">
        <Logo
          class="header__logo"
          image-url="/img/logo.svg"
          :width="25"
          :height="25"
          text="MOVIES"
        />
      </RouterLink>
      <Menu />
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
</style>
