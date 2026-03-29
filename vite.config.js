import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import { imageOptimizerPlugin } from './vite-plugins/image-optimizer';
import { createApiProxy } from './vite-plugins/api-proxy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
    server: {
      proxy: {
        // Поиск фильмов (TMDB)
        '/api/search': createApiProxy({
          target: env.REMOTE_CONTENT_API_URL,
          keyValue: env.REMOTE_CONTENT_API_KEY,
          mapping: { q: 'query' },
          extraParams: { language: 'ru-RU' },
          rewrite: (path) => path.replace(/^\/api\/search/, '/3/search/movie'),
        }),
        // Список пользователя (Mokki)
        '/api/mylist': createApiProxy({
          target: env.REMOTE_STORAGE_API_URL,
          keyName: null,
          rewrite: (path) => path.replace(/^\/api\/mylist/, ''),
          headers: {
            Authorization: `Bearer ${env.REMOTE_STORAGE_API_TOKEN}`,
          },
        }),
      },
    },
  };
});
