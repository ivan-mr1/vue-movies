<script setup>
defineProps({
  imageUrl: String,
  imageWidth: { type: Number, default: 120 },
  imageHeight: { type: Number, default: 120 },
  title: String,
  text: String,
});
</script>

<template>
  <div class="infoblock">
    <img
      :src="imageUrl"
      :alt="title"
      class="infoblock__img"
      :width="imageWidth"
      :height="imageHeight"
      loading="lazy"
    />
    <h3 class="infoblock__title">{{ title }}</h3>
    <div class="infoblock__text">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.infoblock {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  max-width: 285px;

  &__title {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
