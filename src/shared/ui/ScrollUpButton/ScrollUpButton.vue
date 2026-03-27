<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  offset: { type: Number, default: 300 },
  maxWidth: { type: Number, default: 2000 },
});

const isActive = ref(false);
const dashOffset = ref(0);
const pathLength = 150.8;

const updateProgress = () => {
  const scrolled = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const width = window.innerWidth;

  dashOffset.value = pathLength - (scrolled * pathLength) / height;

  isActive.value = scrolled > props.offset && width <= props.maxWidth;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  dashOffset.value = pathLength;
  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
  updateProgress();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress);
  window.removeEventListener('resize', updateProgress);
});
</script>

<template>
  <button
    class="scroll-up"
    :class="{ 'scroll-up--active': isActive }"
    aria-label="scroll to top"
    title="scroll to top"
    @click="scrollToTop"
  >
    <svg class="scroll-up__svg" viewBox="-2 -2 52 52">
      <path
        class="scroll-up__path"
        d="M 24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48"
        :style="{
          strokeDasharray: `${pathLength} ${pathLength}`,
          strokeDashoffset: dashOffset,
        }"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.scroll-up {
  --color-scroll-up-bcg: #ffffff;
  --color-scroll-up-path: var(--scroll-up, #9333ea);
  --color-scroll-up-progress: #eeeeee;
  --progress-width: 4px;

  position: fixed;
  z-index: 100;
  right: calc(2rem + var(--scrollbar-width, 0px));
  bottom: 2rem;
  width: 48px;
  height: 48px;
  background-color: var(--color-scroll-up-bcg);
  border-radius: 50%;
  box-shadow: inset 0 0 0 var(--progress-width) var(--color-scroll-up-progress);
  border: none;
  padding: 0;

  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: 0.3s ease;
  transform: translateY(20px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('./scroll-up.svg') center no-repeat;
    background-size: 20px;
    transform: rotate(-90deg);
  }

  &--active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  &__svg {
    width: 100%;
    height: 100%;
    // transform: rotate(-90deg);
  }

  &__path {
    fill: none;
    stroke: var(--color-scroll-up-path);
    stroke-width: var(--progress-width);
    stroke-linecap: round;
    transition: stroke-dashoffset 0.1s linear;
  }
}
</style>
