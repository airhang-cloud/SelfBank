import {createApp} from 'vue'
import {router} from "./router/index.js";
import './style.css'
import "./themes/index.css"
import store from "./store";
import App from './App.vue'

// 重置为浅色模式
// document.documentElement.removeAttribute('theme-mode');
const app = createApp(App)
app.use(router).use(store).mount('#app')
