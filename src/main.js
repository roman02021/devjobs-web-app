import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Job from './views/Job.vue'
import router from './router'



createApp(App)

.use(router)

.mount('#app')
