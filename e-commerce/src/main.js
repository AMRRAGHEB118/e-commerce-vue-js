/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import * as bootstrap from 'bootstrap'
import './assets/main.css'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

const app = createApp(App)

app.config.globalProperties.$http = axios;
app.use(router)

app.mount('#app')
