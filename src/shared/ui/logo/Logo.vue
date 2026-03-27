<template>
  <a href="index.html" class="logo header__logo">Optica</a>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.logo {
  font-family: var(--second-family);
  font-size: rem(32);
  color: var(--color-light);

  @include hover {
    color: var(--color-orange);
  }
}
</style>
