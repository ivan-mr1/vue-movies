<script setup>
import HeaderBlock from '@/shared/ui/header-block';
import Scroller from '@/shared/ui/scroller';

const scrollerItems = [
  'Доставка по Україні.',
  'Доставка по Європі.',
  'Гарантійний сервіс.',
  'Безкоштовна консультація.',
  'Бездоганна репутація',
];
</script>
<template>
  <section id="about" class="page__about about" aria-labelledby="about-title">
    <Scroller :items="scrollerItems" direction="left" speed="slow" class="descr__scroller" />

    <div class="about__container">
      <div class="about__wrapper">
        <div class="ibg about__image">
          <img
            src="@/shared/assets/img/second/1.webp"
            alt="about photo"
            class="about__img"
            width="452"
            height="452"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="about__descr">
          <HeaderBlock custom-class="about__header" id="about-title" title="Про нас" />
          <div class="about__text">
            <p>
              OPTICA – це більше, ніж просто місце призначення, це подорож у світ стилю,
              майстерності та самовираження. Ми вважаємо, що вибір окулярів має бути натхненним, а
              не поспіхом. Саме тому ми створили теплий, гостинний простір, де ви можете
              сповільнитися, дослідити виняткові дизайни та відкрити для себе вироби, які справді
              відображають вашу особистість. Відвідайте нас за адресою ..., та відчуйте новий спосіб
              бачення – де бачення стає мистецтвом, а окуляри – вашим вираженням.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.about {
  @include adaptive-clamp('padding-bottom', 40, 20);

  &__container {
    @include adaptive-clamp('padding-top', 40, 20);
  }

  &__wrapper {
    display: flex;

    @include adaptive-clamp('column-gap', 70, 20);

    @media (max-width: em(700)) {
      flex-direction: column-reverse;
      row-gap: rem(20);
    }
  }

  &__image {
    flex: 0 1 40%;
    aspect-ratio: 400 / 400;
  }

  &__descr {
    flex: 0 1 60%;
    padding-top: rem(6);
  }

  &__header {
    &:not(:last-child) {
      margin-bottom: rem(25);
    }
  }
}
</style>
