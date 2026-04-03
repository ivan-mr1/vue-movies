<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { bodyLock, bodyUnlock } from '@/shared/lib/body-lock/bodyLock';
import Logo from '@/shared/ui/logo';
import Menu from './Menu.vue';
import { Burger1 } from './burger-button';

const props = defineProps({
  hiddenHeader: {
    type: Boolean,
    default: true,
  },
});

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isHidden = ref(false);
const headerRef = ref(null);

let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
let ticking = false;
let resizeObserver = null;

const updateHeights = () => {
  if (!headerRef.value) return;

  const height = headerRef.value.offsetHeight;
  const isCurrentlyHidden = headerRef.value.classList.contains('is-hidden-translate');

  document.documentElement.style.setProperty('--header-height', `${height}px`);
  document.documentElement.style.setProperty(
    '--header-offset',
    isCurrentlyHidden ? '0px' : `${height}px`,
  );
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const onMenuLinkClick = (e) => {
  if (e.target.closest('a')) {
    closeMenu();
  }
};

const processScroll = () => {
  const currentScrollY = Math.max(0, window.scrollY);

  isScrolled.value = currentScrollY > 0;

  if (props.hiddenHeader && !isMenuOpen.value) {
    const isScrollingDown = currentScrollY > lastScrollY;
    const headerHeight = headerRef.value?.offsetHeight || 0;
    const shouldHide = isScrollingDown && currentScrollY > headerHeight;

    if (isHidden.value !== shouldHide) {
      isHidden.value = shouldHide;
      nextTick(updateHeights);
    }
  }

  lastScrollY = currentScrollY;
};

const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    processScroll();
    ticking = false;
  });
};

const onEscapePress = (e) => {
  if (e.key === 'Escape') closeMenu();
};

watch(isMenuOpen, (isOpen) => {
  isOpen ? bodyLock() : bodyUnlock();

  if (isOpen) {
    isHidden.value = false;
    nextTick(updateHeights);
    document.addEventListener('keydown', onEscapePress);
  } else {
    document.removeEventListener('keydown', onEscapePress);
  }
});

onMounted(() => {
  updateHeights();
  window.addEventListener('scroll', handleScroll, { passive: true });

  resizeObserver = new ResizeObserver(() => {
    updateHeights();
  });

  if (headerRef.value) {
    resizeObserver.observe(headerRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('keydown', onEscapePress);
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  bodyUnlock();
});
</script>

<template>
  <header
    ref="headerRef"
    class="header"
    :class="{
      scroll: isScrolled,
      'is-hidden-translate': isHidden,
    }"
    data-header
    data-right-padding
  >
    <div class="header__container">
      <RouterLink :to="{ name: 'Home' }">
        <Logo
          class="header__logo"
          image-url="/img/logo.svg"
          :width="25"
          :height="25"
          text="MOVIES"
        />
      </RouterLink>

      <div
        class="header__overlay"
        :class="{ 'is-active': isMenuOpen }"
        data-header-overlay
        @click.self="closeMenu"
      >
        <Menu :is-open="isMenuOpen" @click="onMenuLinkClick" />
      </div>

      <Burger1 :is-active="isMenuOpen" @click="toggleMenu" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: var(--z-index-header, 100);
  top: 0;
  left: 0;
  width: 100%;
  transition: transform var(--transition-duration) ease-in-out;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    box-shadow: 0 0 1rem 0 var(--color-orange);
    opacity: 0;
    transition: opacity var(--transition-duration) ease-in-out;
  }

  &.scroll {
    &::before {
      opacity: 1;
    }
  }

  &.is-hidden-translate {
    transform: translateY(-100%);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include adaptive-clamp('column-gap', 40, 20);
    @include adaptive-clamp('min-height', 100, 65);
  }

  &__overlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;

    @media (max-width: em(767.98)) {
      position: fixed;
      inset: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.5);
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease;
      display: block;

      &.is-active {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
