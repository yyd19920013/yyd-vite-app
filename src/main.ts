import App from './App.vue';
import { createApp } from 'vue';
import 'element-plus/packages/theme-chalk/src/base.scss';
import { components, plugins } from './components/elementPlus';
import commonMixinPlugin from './plugins/commonMixinPlugin';
import router from './router';
import store from './store';
import services from './services';
import { regComponents } from './router/autoReg';

// 路由改变之前显示loading
router.beforeEach((to, from, next) => {
  store.commit({
    type: 'UPDATE_LOADINGSTATUS',
    isLoading: true,
  });
  // 根据meta值改变title
  if (to.meta && to.meta.title) (document as any).title = to.meta.title;

  next();
});

// 路由改变之后隐藏loading
router.afterEach(() => {
  store.commit({
    type: 'UPDATE_LOADINGSTATUS',
    isLoading: false,
  });
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(commonMixinPlugin);
components.forEach((component: any) => {
  app.component(component.name, component);
});
plugins.forEach((plugin) => {
  app.use(plugin);
});
app.config.globalProperties.$services = services;
// 该函数会自动注册components文件夹中属性带有autoRegComponent: true的.vue组件，组件属性name进行自定义组件名称
regComponents(app);
app.mount('#App');
export default app;
