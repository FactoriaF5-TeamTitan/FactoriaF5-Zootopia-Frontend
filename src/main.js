import "bootstrap/dist/css/bootstrap.min.css";
import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axiosInstance from './plugins/axios.js';

const app = createApp(App)

app.config.globalProperties.$axios = axiosInstance

app.use(createPinia())
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.min";
