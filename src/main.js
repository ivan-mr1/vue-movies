import { createApp } from 'vue';
import App from '@/app';
import router from '@/app/routing';

const app = createApp(App);

app.use(router);

app.mount('#app');
