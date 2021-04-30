import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { getRoutes } from './autoReg';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/home',
  },
  // 该函数会自动注册views文件夹中属性带有autoRegPage: true的.vue页面，页面属性name进行自定义页面名称，path进行自定义页面路径
  ...getRoutes(),
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
