import { axiosWrap } from '@/assets/js/utils.js';
import CONFIG_JSON from '@/services/config';
const paths = import.meta.glob('./modules/*.ts');
const contents = import.meta.globEager('./modules/*.ts');
const modules: any = {};

Object.keys(paths).forEach((item) => {
  Object.assign(modules, contents[item]);
});

// @ts-ignore
const COMMON = CONFIG_JSON[__ENV || 'develop'];
const URL = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? '/api'
  : COMMON.baseUrl; // 本地环境用反向代理，线上环境用baseUrl，线上域名和请求地址一致用'/'
const API = (config: any) => {
  config.url = URL + config.url;
  config.method = config.method ? config.method : 'post';
  config.code = 0;
  config.params = `post=${JSON.stringify(config.params)}`;
  config.headers = {
    token: '',
    sign: '',
    timestamp: +new Date() / 1000,
  };
  return axiosWrap(config);
};
// axios请求示例
const testAxios: any = (params: object): any => {
  return API({
    url: '/myBackground/ports/article.php',
    params,
  });
};

const CONFIG = Object.assign({}, COMMON, {
  // @ts-ignore
  envName: __ENV,
  API, // api请求函数
  testAxios, // axios请求示例
});
const SERVICES = Object.assign({}, CONFIG, modules);
const { envName, baseUrl } = CONFIG;

// @ts-ignore
console.log('当前环境：', __ENV);
console.log('当前环境配置：', CONFIG);
console.log('SERVICES', SERVICES);

export {
  envName,
  baseUrl,
  API, // api请求函数
  testAxios, // axios请求示例
};
export default SERVICES;
