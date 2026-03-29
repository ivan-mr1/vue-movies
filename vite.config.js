import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import { imageOptimizerPlugin } from './vite-plugins/image-optimizer';

export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), imageOptimizerPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/shared/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/app/styles', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/app/styles/helpers', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@helpers" as *;`,
        api: 'modern-compiler',
      },
    },
  },
});
