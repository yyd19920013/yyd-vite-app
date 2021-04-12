import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import app from '@/ElPlus.ts';

app.use(router);
app.mount('#app');