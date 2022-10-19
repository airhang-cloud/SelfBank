import {createApp} from 'vue'
import {router} from "./router/index.js";
import './style.css'
import "./themes/index.css"
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import store from "./store";
import App from './App.vue'

// 重置为浅色模式
// document.documentElement.removeAttribute('theme-mode');
const app = createApp(App)
app.use(router).use(store).mount('#app')
