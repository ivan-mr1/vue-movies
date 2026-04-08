<script setup>
import { LangSelect } from '@/features/lang-switcher';
</script>

<template>
  <div class="header__actions">
    <LangSelect />
  </div>
</template>

<style scoped lang="scss">
.header {
  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
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
