<script setup>
import { useHeaderLogic } from '../model/useHeader';
import Logo from '@/shared/ui/logo';
import Menu from './Menu.vue';
import { Burger1 } from './burger-button';
import Actions from './actions/Actions.vue';

const props = defineProps({
  isHiddenHeader: {
    type: Boolean,
    default: true,
  },
});

const { isMenuOpen, isScrolled, isHidden, toggleMenu, closeMenu, onMenuLinkClick } =
  useHeaderLogic(props);
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
        <Actions />
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

  &__logo,
  &__actions {
    position: relative;
    z-index: 5;
  }

  &__overlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }
}
</style>
