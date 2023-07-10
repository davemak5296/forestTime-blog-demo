import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faClock, faHouse } from '@fortawesome/free-solid-svg-icons';
import router from '@/router';

library.add(faUser, faClock, faHouse);

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');