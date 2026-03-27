<script setup>
defineProps({
  imageUrl: { type: String, default: '' },
  alt: { type: String, default: 'Logo' },
  width: { type: Number, default: 50 },
  height: { type: Number, default: 50 },
  text: { type: String, default: 'Logo' },
  href: { type: String, default: '/' },
  lazy: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Home' },
});
</script>

<template>
  <a :href="href" class="logo" :aria-label="ariaLabel" :title="ariaLabel">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
    />
    <span v-else>{{ text }}</span>
  </a>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.logo {
  @include hover {
    transform: scale(0.9);
  }
}
</style>
