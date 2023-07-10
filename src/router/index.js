import { createRouter, createWebHistory } from 'vue-router';


import Dashboard from '@/components/views/auth/dashboardComponent.vue';
import Home from "@/components/views/nonAuth/studentHomeComponent.vue";
import bookInfoComponent from "@/components/views/nonAuth/bookInfoComponent.vue";
import adminHome from "@/components/views/nonAuth/adminHomeComponent.vue";

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
        path: '/adminHome',
        name: 'adminHome',
        component: adminHome,
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