<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: { type: Array, required: true },
  speed: { type: String, default: 'slow' },
  direction: { type: String, default: 'left' },
});

const isAnimated = computed(() => props.items.length > 0);
</script>

<template>
  <div class="scroller" :data-animated="isAnimated" :data-speed="speed" :data-direction="direction">
    <ul class="scroller__inner">
      <li v-for="(text, index) in items" :key="'first-' + index" class="scroller__item">
        {{ text }}
      </li>
      <li
        v-for="(text, index) in items"
        :key="'second-' + index"
        class="scroller__item"
        aria-hidden="true"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.scroller {
  &__inner {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    min-height: 60px;
    background-color: var(--color-orange);
  }

  &__item {
    font-size: 24px;
    list-style: none;
  }
}

.scroller[data-animated='true'] {
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated='true'] .scroller__inner {
  flex-wrap: nowrap;
  width: fit-content;
  width: max-content;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
    infinite;
}

.scroller[data-direction='right'] {
  --_animation-direction: reverse;
}

.scroller[data-direction='left'] {
  --_animation-direction: forwards;
}

.scroller[data-speed='slow'] {
  --_animation-duration: 100s;
}

.scroller[data-speed='fast'] {
  --_animation-duration: 20s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
