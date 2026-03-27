<script setup>
import telegram from '@/shared/assets/img/svg/telegram.svg';
import whatsapp from '@/shared/assets/img/svg/whatsapp.svg';
import instagram from '@/shared/assets/img/svg/instagram.svg';

const socials = [
  { name: 'Telegram', url: 'https://t.me/', icon: telegram },
  { name: 'Instagram', url: 'https://www.instagram.com/', icon: instagram },
  { name: 'Whatsapp', url: 'https://wa.me/380', icon: whatsapp },
];

const props = defineProps({
  baseClass: String,
});
</script>

<template>
  <div :class="['soc1al', props.baseClass]">
    <ul class="soc1al__list">
      <li v-for="social in socials" :key="social.name" class="soc1al__item">
        <a
          :href="social.url"
          class="soc1al__link"
          target="_blank"
          rel="noopener"
          :aria-label="social.name"
          :title="social.name"
        >
          <img :src="social.icon" :alt="social.name" width="44" height="44" loading="lazy" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.soc1al {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  &__item {
    display: flex;
  }

  &__link {
    --size: #{rem(44)};

    @include square(var(--size));

    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);

    &:active,
    &:focus {
      border-radius: 4px;
      outline: var(--outline-active);
    }

    @include hover {
      transform: scale(1.09);
    }
  }
}
</style>
