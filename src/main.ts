import { createApp } from 'vue'
import router from './router'
import store from './store'
import {createPinia} from 'pinia'

import '@5a.css/helpers'
import './style.css'
import App from './App.vue'
createApp(App).use(router).use(createPinia()).use(store).mount('#app')