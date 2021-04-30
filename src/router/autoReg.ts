import { defineAsyncComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

function getPaths(isPage: boolean = true) {
  const result = isPage
    ? import.meta.glob('../views/**/*.vue')
    : import.meta.glob('../components/**/*.vue');

  return result;
}
function getContents(isPage: boolean = true) {
  const result = isPage
    ? import.meta.globEager('../views/**/*.vue')
    : import.meta.globEager('../components/**/*.vue');

  return result;
}
// 自动注册组件
export const regComponents = (app: any): void => {
  const paths = getPaths(false);
  const contents = getContents(false);
  const components: any = [];

  Object.keys(paths).forEach((key: string) => {
    const viewSrc = contents[key];
    const file = viewSrc.default;
    if (!file.autoRegComponent) return;
    const matchName = key.match(/^.+\/(.+)\.vue$/);
    const fileName = file.name ? file.name : matchName ? matchName[1] : key;
    const asyncComponent = defineAsyncComponent(paths[key]);

    components.push({
      name: fileName.toUpperCase(),
      components: asyncComponent,
    });
  });
  components.forEach((item: { name: string; component: any }) => {
    if (app) app.component(item.name, item.component);
  });
  console.log('自动注册组件', components);
};

// 自动获取路由
export const getRoutes = (): Array<RouteRecordRaw> => {
  const routerList: Array<RouteRecordRaw> = [];
  const paths = getPaths();
  const contents = getContents();

  Object.keys(paths).forEach((key) => {
    const viewSrc = contents[key];
    const file = viewSrc.default;
    if (!file.autoRegPage) return;
    const matchPath = key.match(/^.+views\/(.+)\.vue$/);
    const matchName = key.match(/^.+\/(.+)\.vue$/);
    const filePath = file.path ? file.path : matchPath ? matchPath[1] : key;
    const fileName = file.name ? file.name : matchName ? matchName[1] : key;

    routerList.push({
      path: `/${filePath}`,
      name: `${fileName.toUpperCase()}`,
      component: paths[key],
    });
  });
  console.log('自动注册路由', routerList);
  return routerList;
};
