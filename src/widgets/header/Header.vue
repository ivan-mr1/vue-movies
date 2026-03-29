<script setup>
import Logo from '@/shared/ui/logo';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <Logo class="header__logo" image-url="/img/logo.svg" :width="40" :height="40" text="MOVIES" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.header {
  border-bottom: 3px solid var(--color-orange);
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    min-height: fluid(100, 70);
  }
}
</style>
