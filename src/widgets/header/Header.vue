<script setup>
import Logo from '@/shared/ui/logo';
import Menu from './Menu.vue';
import Actions from './Actions.vue';
import Burger1 from './burger-button/Burger-1.vue';

import { useHeader } from '@/widgets/header/useHeader';

const { isMenuOpen, isScrolled, isHidden, headerRef, toggleMenu, closeMenu } = useHeader();
</script>

<template>
  <header
    ref="headerRef"
    class="header"
    :class="{
      'is-active': isMenuOpen,
      scroll: isScrolled,
      'is-hidden': isHidden,
    }"
    data-right-padding
  >
    <div class="header__container">
      <RouterLink to="/"><Logo /></RouterLink>

      <div class="header__overlay" @click.self="closeMenu">
        <Menu
          :isOpen="isMenuOpen"
          :list="[
            { name: 'КОНТАКТИ', href: 'footer', goto: 'footer' },
          ]"
          @click="closeMenu"
        />

        <Actions />
      </div>

      <Burger1 :isActive="isMenuOpen" @click="toggleMenu" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
@use './header-fon';

.header {
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;

  transition: transform 0.3s ease;

  &.is-hidden {
    transform: translateY(-100%);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include adaptive-clamp('column-gap', 40, 20);
    @include adaptive-clamp('min-height', 100, 65);
  }

  &__logo {
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
