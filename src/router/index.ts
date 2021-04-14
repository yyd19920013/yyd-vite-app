import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/test',
        component: () => import('@/views/test/test.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue')
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
});