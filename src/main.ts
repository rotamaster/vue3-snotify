import { createApp } from 'vue'
import App from './App.vue'
import snotify from './plugin';

const app = createApp(App)
app.use(snotify);
app.mount('#app');
