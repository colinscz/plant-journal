import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { de, en } from '@formkit/i18n';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import router from './router';
import config from '../formkit.config.ts';

import './main.css';

const i18n = createI18n({
    locale: 'en'
    // something vue-i18n options here ...
});


  

const app = createApp(App).use(plugin, defaultConfig(config));

app.use(i18n);

app.use(createPinia());
app.use(router);

app.mount('#app');
