import { createRouter, createWebHistory } from 'vue-router';


import Dashboard from '@/components/views/auth/dashboardComponent.vue';
import Home from "@/components/views/nonAuth/homeComponent.vue";
import bookInfoComponent from "@/components/views/nonAuth/bookInfoComponent.vue";

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
    {
        path: '/collection',
        name: 'collection',
        component: bookInfoComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;