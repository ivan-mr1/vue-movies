<script setup>
defineProps({
  imageUrl: { type: String, default: '' },
  alt: { type: String, default: 'Logo' },
  width: { type: Number, default: 50 },
  height: { type: Number, default: 50 },
  text: { type: String, default: 'Logo' },
  lazy: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Home' },
});
</script>

<template>
  <div class="logo" :aria-label="ariaLabel" :title="ariaLabel">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
    />
    <div>{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.logo {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--color-orange);
  font-size: 20px;
  font-weight: 500;

  @include hover {
    opacity: 0.8;
  }
}
</style>
