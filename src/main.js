import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/app/routing';
import { i18n } from '@/shared/i18n';
import App from '@/app';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app');
