import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { getRoutes } from './autoReg';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/home',
  },
  ...getRoutes(),
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
