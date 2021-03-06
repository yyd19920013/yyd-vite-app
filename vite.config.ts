import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import CONFIG_JSON from './src/services/config';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};
const ENV = process.env.__ENV;
const target = CONFIG_JSON[ENV || 'develop'].baseUrl;

console.log(`当前运行环境：${ENV}`);
console.log(`当前代理地址：${target}`);

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    https: false,
    proxy: {
      '/api': {
        // 这里最好有一个 /
        target, // 服务器端接口地址
        ws: false, // 如果要代理 websockets，配置这个参数
        // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        rewrite: (pathName) => pathName.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  define: {
    __ENV: JSON.stringify(ENV),
  },
});
