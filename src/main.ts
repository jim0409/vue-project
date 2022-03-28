import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import SidebarView from 'primevue/sidebar';

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-orange/theme.css";


// 宣告一個 Vue App
const app = createApp(App)
app.use(PrimeVue, { ripple: true });

app.use(store);
app.component('SidebarView', SidebarView);
app.use(router).mount('#app');

