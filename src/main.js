import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faMagnifyingGlass, faBars, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faPinterest, faTwitter, faFlickr, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
// import { faSquareFacebook, faSquareYoutube, faPinterestSquare, faSquareTwitter, faFlickr, faSquareInstagram, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons';
import router from '@/router';

library.add(faEye, faMagnifyingGlass, faFacebook, faYoutube, faPinterest, faTwitter, faFlickr, faInstagram, faGooglePlus, faBars, faEnvelopeOpen );

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');