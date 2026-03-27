import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/app';
import router from '@/app/routing';

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.use(router);

app.mount('#app');
