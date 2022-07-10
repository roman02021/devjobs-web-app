import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue';


const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/job/:id', name:'job.detail', component: () => import('../views/Job.vue')},
    {path: '/:pathMatch(.*)', name: 'NotFound', component: () => import('../views/NotFound.vue')}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;