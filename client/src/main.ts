import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import storage from "./storage";

createApp(App).use<any>(storage).use(router).mount('#app')
