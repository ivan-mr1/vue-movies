<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { browserStorage } from '@/shared/lib';
import Select from '@/shared/ui/form/select/Select.vue';

const { locale } = useI18n();

const langOptions = [
  { value: 'ua', label: 'UA' },
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
];

watch(
  locale,
  (val) => {
    browserStorage.set('lang', val);
    document.documentElement.lang = val;
  },
  { immediate: true },
);
</script>

<template>
  <Select v-model="locale" :options="langOptions" />
</template>
