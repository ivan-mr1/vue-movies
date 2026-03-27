<script setup>
defineProps({
  customClass: { type: String, default: '' },
  id: { type: String, default: null },
  title: { type: String, required: true },
  text: { type: String, default: null },
});
</script>

<template>
  <div :class="['header-block', customClass]">
    <h2 class="header-block__title" :id="id">
      {{ title }}
    </h2>
    <div v-if="text" class="header-block__text">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.header-block {
  text-align: center;
  &__title {
    font-size: rem(24);
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: rem(10);
    }
  }

  &__text {
    font-size: rem(18);
  }
}
</style>
