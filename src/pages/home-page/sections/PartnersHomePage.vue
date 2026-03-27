<script setup>
import HeaderBlock from '@/shared/ui/header-block';
import Scroller from '@/shared/ui/scroller';

const scrollerPartners = [
  'CHANCE',
  'DACCHI',
  'GUCHINI',
  'TEMPO',
  'LORIS',
  'ALANIE',
  'BELLEESSA',
  'AGIO',
  'AGIO',
  'CORRADO',
  'GOOD LUCK',
  'SALVO',
  'CRISTAL',
];
</script>
<template>
  <section class="page__partners partners" aria-labelledby="partners-title">
    <div class="partners__container">
      <HeaderBlock
        custom-class="partners__header-block"
        id="partners-title"
        title="Популярні бренди"
      />
      <Scroller
        :items="scrollerPartners"
        direction="right"
        speed="fast"
        class="partners__scroller"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.partners {
  &__header-block {
    margin-bottom: 40px;
  }
}
</style>
