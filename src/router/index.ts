import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array < RouteRecordRaw > = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue')
    }
];
export default createRouter({
    history: createWebHistory(),
    routes
});