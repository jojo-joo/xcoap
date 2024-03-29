import { createApp } from 'vue'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import store from './store'

createApp(App).use(ElementPlus).use(router).mount('#app')
