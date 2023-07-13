import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faMagnifyingGlass, faBars, faEnvelopeOpen, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faPinterest, faTwitter, faFlickr, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import router from '@/router';

library.add(faEye, faMagnifyingGlass, faFacebook, faYoutube, faPinterest, faTwitter, faFlickr, faInstagram, faGooglePlus, faBars, faEnvelopeOpen, faLeaf );

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');