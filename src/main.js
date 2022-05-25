import { createApp } from 'vue'
import App from './App.vue'
import emitterPlugin from './emmiter';

const app = createApp(App)
app.use(emitterPlugin)

app.mount('#app')