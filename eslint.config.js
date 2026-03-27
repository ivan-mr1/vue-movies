import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
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
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  skipFormatting,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]);
