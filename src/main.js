import { createApp } from 'vue'; // Import createApp from vue
import App from './App.vue';
import router from './router';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(router) // Use the router
    .component('menu-icon', MenuIcon)
    .mount('#app'); // Mount to the #app element
