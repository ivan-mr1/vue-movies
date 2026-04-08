import { createI18n } from 'vue-i18n';
import { browserStorage } from '@/shared/lib';

export const i18n = createI18n({
  legacy: false,
  locale: browserStorage.get('lang', 'en'),
  fallbackLocale: 'en',
  messages: {
    en: {},
    ru: {},
    ua: {},
  },
});

export const useSliceI18n = (sliceName, localMessages) => {
  const globalI18n = i18n.global;

  Object.keys(localMessages).forEach((locale) => {
    if (!globalI18n.getLocaleMessage(locale)[sliceName]) {
      globalI18n.mergeLocaleMessage(locale, { [sliceName]: localMessages[locale] });
    }
  });

  return {
    t: (key, ...args) => globalI18n.t(`${sliceName}.${key}`, ...args),
  };
};
