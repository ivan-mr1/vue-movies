<script setup>
import { computed } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const labelText = computed(() => (props.isActive ? 'Close menu' : 'Open menu'));
</script>

<template>
  <button
    data-header-burger-btn
    v-bind="$attrs"
    type="button"
    class="burger-button"
    :class="{ 'is-active': isActive }"
    :aria-expanded="isActive"
    :aria-label="labelText"
    :title="labelText"
  >
    <span class="burger-button__inner">
      <span class="burger-button__line"></span>
      <span class="burger-button__line"></span>
      <span class="burger-button__line"></span>
    </span>
  </button>
</template>

<style scoped lang="scss">
.burger-button {
  --burger-button-color-line: var(--color-white);
  --burger-button-color-bcg: #ffa501;
  --burger-button-color-hover: #ffa501;
  --burger-button-color-open: #ffa501;

  display: none;

  @media (max-width: em(767.98)) {
    position: relative;
    z-index: 15;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 1px solid var(--burger-button-color-line);

    // background-color: var(--burger-button-color-bcg);
    border-radius: 0.5rem;
    transition: background-color 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    @include hover {
      background-color: var(--burger-button-color-hover);
    }

    &__inner {
      flex: 0 0 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      height: 1.5rem;
    }

    &__line {
      width: 100%;
      height: 0.2188rem;
      background-color: var(--burger-button-color-line);
      border-radius: 0.5rem;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform-origin: center;

      &:first-child {
        width: 60%;
      }

      &:nth-child(2) {
        width: 80%;
      }
    }

    &.is-active {
      // background-color: var(--burger-button-color-open);
      transition-duration: 0.5s;

      .burger-button__inner {
        transition-duration: 0.5s;
        transform: rotate(180deg);
      }

      .burger-button__line {
        &:nth-child(2) {
          opacity: 0;
          transition-duration: 0.3s;
          transform: scaleX(0);
        }

        &:first-child {
          width: 100%;
          transition-duration: 0.5s;
          transform: translateY(0.625rem) rotate(45deg);
        }

        &:last-child {
          width: 100%;
          transition-duration: 0.5s;
          transform: translateY(-0.6687rem) rotate(-45deg);
        }
      }
    }
  }
}
</style>
