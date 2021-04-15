import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    https: false,
    proxy: {},
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      router: pathResolve('./src/router'),
      assets: pathResolve('./src/assets'),
      js: pathResolve('./src/assets/js'),
      css: pathResolve('./src/assets/css'),
      images: pathResolve('./src/assets/images'),
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
});
