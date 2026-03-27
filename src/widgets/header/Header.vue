<script setup>
import Logo from '@/shared/ui/logo';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <Logo class="header__logo" image-url="/img/logo5.gif" :width="100" :height="60" />
      <h2 class="header__title">Movies</h2>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  &__title {
    font-family: var(--second-family);
    font-size: 25px;
    font-weight: 600;
  }
}
</style>
