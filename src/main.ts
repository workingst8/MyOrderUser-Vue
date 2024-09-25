import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag-next';

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
  property: {
    id: 'G-49GLM0FNPS'
  }
});

app.mount('#app');
