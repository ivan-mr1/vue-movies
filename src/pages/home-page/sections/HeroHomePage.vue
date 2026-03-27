<script setup>
import Button from '@/shared/ui/form/button/Button.vue';
import ScrollDownButton from '@/shared/ui/scroll-down-button/ScrollDownButton.vue';
</script>
<template>
  <section class="parent-video-fon page__hero hero" aria-labelledby="hero-title">
    <div class="hero__container">
      <div class="hero__body">
        <div class="hero__subtitle">
          <p>
            Завітайте до нашого магазину — ми допоможемо підібрати ідеальні окуляри та надамо
            безкоштовну консультацію
          </p>
        </div>
        <h1 class="hero__title" id="hero-title">Ми допоможемо вам побачити світ по-новому.</h1>
        <div class="hero__buttons">
          <Button class="hero__button" goto=".about">ПРО НАС</Button>
          <Button class="hero__button" goto=".products">ПРОДУКТИ</Button>
        </div>
      </div>
    </div>
    <video class="video-fon" autoplay muted loop>
      <source type="video/mp4" src="@/shared/assets/video/10.mp4" />
    </video>
    <ScrollDownButton goto=".about" />
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.parent-video-fon {
  position: relative;
  overflow: hidden;
  background-color: #000000;
}

.video-fon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
}

.hero {
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: 0;

  &__container {
    flex: 1 1 auto;
    position: relative;
    z-index: 2;
    padding-top: fluid(200, 90);
    padding-bottom: fluid(200, 40);
  }

  &__body {
    max-width: rem(550);
    color: var(--color-light);

    @media (max-width: em(500)) {
      max-width: 100%;
    }
  }

  &__subtitle {
    font-size: rem(18);
    font-weight: 600;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: rem(10);
    }
  }

  &__title {
    font-weight: 600;
    line-height: 1.2;

    @include adaptive-clamp('font-size', 48, 25);

    &:not(:last-child) {
      margin-bottom: rem(25);
    }
  }

  &__buttons {
    display: flex;
    row-gap: rem(20);

    @include adaptive-clamp('column-gap', 45, 20);

    @media (max-width: em(500)) {
      flex-direction: column;
    }
  }

  &__button {
    @media (max-width: em(500)) {
      width: 100%;
    }
  }
}
</style>
