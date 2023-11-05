import 'vuetify/dist/vuetify.css';
import 'vuetify/dist/vuetify.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify';
import router from './router';


createApp(App).use(vuetify).use(router).mount("#app");
