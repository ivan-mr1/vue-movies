import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfig([
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'vite.config.js',
      'postcss.config.js',
    ],
  },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // переменные окружения
      },
    },
  },

  js.configs.recommended,
  // ...pluginVue.configs['flat/essential'], (light version)
  ...pluginVue.configs['flat/strongly-recommended'],

  skipFormatting,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      // Требовать одинаковый порядок свойств в компонентах (data, props, computed...)
      'vue/order-in-components': 'error',
      // Запретить использование v-html
      'vue/no-v-html': 'warn',
      'no-unused-vars': 'warn',
    },
  },
]);
