import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';


import App from './App.vue';
import router from './router';

import { Inkline, components } from '@inkline/inkline';
import './css/variables/index.scss';
import '@inkline/inkline/css/index.scss';
import '@inkline/inkline/css/utilities.scss';

import '@inkline/inkline/inkline.scss';

import './assets/main.css';

const i18n = createI18n({
    locale: 'en'
    // something vue-i18n options here ...
});

const app = createApp(App).use(Inkline, { components });

app.use(i18n);

app.use(createPinia());
app.use(router);

app.mount('#app');
