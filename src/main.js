import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import VueScrollTo from 'vue-scrollto';

import 'normalize.css';

import './assets/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
});
app.mount('#app');
