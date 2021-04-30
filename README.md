# yyd-vite-app

- 技术栈：
  - vite+vue3.0+ts+element-plus
- 文档网站：

  - vite：https://www.pipipi.net/vite/guide/
  - vue3.0：https://vue-docs-next-zh-cn.netlify.app/guide/installation.html#vue-devtools
  - ts：https://www.tslang.cn/
  - element-plus：https://element-plus.gitee.io/#/zh-CN

- VsCode 安装插件：

  - eslint
  - tslint
  - vetur
  - volar

- 安装依赖：

  - npm install / cnpm i

- 运行：

  - 开发环境：npm run dev:develop / npm run start / npm run serve
  - 正式环境：npm run dev:publish

- 构建：

  - 开发环境：npm run build:develop
  - 正式环境：npm run build:publish

- 尽量减少使用忽略：

  - tslint 忽略格式检查

    - // tslint:disable——忽略该行以下所有代码出现的错误提示，可以在文件首行添加达到忽略整个文件的格式提示
    - // tslint:enable——当前 ts 文件重新启用 tslint
    - // tslint:disable-line——忽略当前行代码出现的错误提示
    - // tslint:disable-next-line——忽略下一行代码出现的错误提示

  - ts 忽略类型检查
    - // @ts-nocheck——注释来跳过对某些文件的检查
    - // @ts-check——注释只检查一些.js 文件而不需要设置--checkJs 编译选项
    - // @ts-ignore——到特定行的一行前来忽略这一行的错误
