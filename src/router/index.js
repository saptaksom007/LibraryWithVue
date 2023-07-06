import { createRouter, createWebHistory } from 'vue-router';


import Dashboard from '@/components/views/auth/dashboardComponent.vue';
import Home from "@/components/views/nonAuth/homeComponent.vue";
const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;