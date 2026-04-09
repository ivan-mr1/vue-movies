<script setup>
import { LangSelect } from '@/features/lang-switcher';
import { ThemeToggle } from '@/features/theme-switcher';
</script>

<template>
  <div class="header__actions">
    <ThemeToggle />
    <LangSelect />
  </div>
</template>

<style scoped lang="scss">
.header {
  &__actions {
    display: flex;
    // flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }

  // &__action {
  //   --size: #{rem(44)};

  //   @include square(var(--size));

  //   @include hover {
  //     transform: scale(1.09);
  //   }
  // }
}
</style>
