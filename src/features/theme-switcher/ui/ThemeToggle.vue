<script setup>
import { ref, onMounted, watch } from 'vue';
import { browserStorage } from '@/shared/lib';

const isDark = ref(true);

const applyTheme = (dark) => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
};

onMounted(() => {
  const saved = browserStorage.get('theme');

  if (saved) {
    isDark.value = saved === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  applyTheme(isDark.value);
});

watch(isDark, (val) => {
  applyTheme(val);
  browserStorage.set('theme', val ? 'dark' : 'light');
});

const toggle = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <button
    class="theme-toggle"
    :class="{ 'is-light': !isDark }"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Светлая тема' : 'Тёмная тема'"
    @click="toggle"
  >
    <span class="theme-toggle__icon theme-toggle__icon--sun">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </span>

    <span class="theme-toggle__icon theme-toggle__icon--moon">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.theme-toggle {
  --size: 36px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-orange);
  cursor: pointer;
  overflow: hidden;
  transition:
    background-color 0.3s,
    border-color 0.3s,
    transform 0.2s;

  @include hover {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.92);
  }

  &.is-light {
    border-color: rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.04);

    @include hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }

  &__icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      opacity 0.35s ease,
      transform 0.35s ease;
  }

  &__icon--sun {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);

    .is-light & {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }

  &__icon--moon {
    opacity: 1;
    transform: rotate(0deg) scale(1);

    .is-light & {
      opacity: 0;
      transform: rotate(90deg) scale(0.5);
    }
  }
}
</style>
