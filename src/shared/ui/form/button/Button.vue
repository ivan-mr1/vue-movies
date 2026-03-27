<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  goto: { type: String, default: null },
  inCart: { type: Boolean, default: false },
});

const isLink = computed(() => !!props.href);
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    class="button"
    :class="{ 'is-disabled': disabled, 'is-in-cart': inCart }"
    :href="isLink ? (disabled ? null : href) : null"
    :type="!isLink ? type : null"
    :disabled="!isLink ? disabled : null"
    :aria-disabled="disabled ? 'true' : null"
    :data-goto="goto"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  padding-block: rem(12);
  padding-inline: rem(25);
  font-weight: 600;
  color: var(--color-white);
  background-color: transparent;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius);
  text-decoration: none;

  &:active:not(.is-disabled) {
    scale: 0.95;
  }

  @include hover {
    &:not(.is-disabled) {
      color: var(--color-orange);
      border: 1px solid var(--color-orange);
    }
  }

  &--min {
    padding-block: rem(10);
    padding-inline: rem(20);
    color: var(--color-black);
    border: 1px solid var(--color-orange);

    @include hover {
      &:not(.is-disabled) {
        color: var(--color-black);
        background-color: var(--color-orange);
      }
    }
  }

  &--card {
    padding: fluid(12, 10);
    color: var(--color-black);
    border: 1px solid var(--color-orange);

    &.is-in-cart {
      color: var(--color-black);
      background-color: var(--color-orange);
      cursor: default;
    }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
}
</style>
