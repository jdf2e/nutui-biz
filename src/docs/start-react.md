# 快速上手

## 介绍

通过本文你可以掌握 NutUI-React 的安装和使用方法，操作简单易上手，开发简洁快速。

## NPM 安装

```bash
npm i @nutui/nutui-biz
```

### NPM 使用示例

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import '@nutui/nutui-biz/dist/style.css'
import { Icon } from '@nutui/nutui-react';

ReactDOM.render(
  <div className="App">
    <Icon name="dongdong"></Icon>
  </div>,
  document.getElementById("app")
);

```

#### 为什么只按需引入样式

NutUI-React 默认支持基于 ES modules 的 tree shaking，对于 JS 部分，直接引入 `import { Button } from '@nutui/nutui-react'` 就会有按需加载的效果。仅样式不是按需导入的，因此只需按需导入样式即可。

#### WebPack 构建工具 通过 babel 使用按需加载

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。
##### 安装插件
``` bash
npm install babel-plugin-import --save-dev
```
在 `.babelrc` 或 `babel.config.js` 中添加配置：

``` javascript
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      'nutui-react'
    ]
  ]
}
```
在 webpack 配置中配置 sass-loader ，将 nutui-react 样式变量导入全局。
```javascript
//...
// 给 sass-loader 传递选项
scss: {
    data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
}
//...
```

### Create React App 通过 craco 使用按需加载

#### 创建项目

```shell
npx create-react-app myNutUI-React
```

#### 安装 craco 以及相关插件

```shell
// 示例采用最新版本的 @craco/craco
npm i --save-dev @craco/craco
npm i --save-dev sass
npm i --save-dev babel-plugin-import
```

#### 添加 craco 配置

```js
// craco.config.js
module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    sass: {
      loaderOptions: {
        sourceMap: true,
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";` /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */,
      },
    },
  },
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "@nutui/nutui-react",
          libraryDirectory: "dist/esm",
          style: true,
          camel2DashComponentName: false,
        },
        "nutui-react",
      ],
    ],
  },
}

```

#### Vite 构建工具 通过 vite-plugin 使用按需加载

[Vite](https://vitejs.dev/) 构建工具，使用 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现按需引入。由于 vite 本身已按需导入组件库，因此仅样式不是按需导入的，只需按需导入样式即可。

#### 安装插件

``` bash
npm install vite-plugin-style-import --save-dev
```

在 vite.config 中添加配置：

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "@nutui/nutui-react",
          libraryNameChangeCase: "pascalCase",
          resolveStyle: (name) => {
            return `@nutui/nutui-react/dist/esm/${name}/style`
          },
        },
      ],
    }),
  ],
});

```

#### CDN 安装使用示例

> 可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <!-- 引入样式 -->
  <link rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/style.css' />
  <!-- 引入React -->
  <script crossorigin
          src='https://unpkg.com/react@17/umd/react.production.min.js'></script>
  <script crossorigin
          src='https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'></script>
  <!-- 引入NutUI组件库 -->
  <script
    src='https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/nutui.react.umd.js'></script>
</head>
<body>
<div id='app'></div>
<script>
  // 在 #app 标签下渲染一个按钮组件
  ReactDOM.render(
    React.createElement(
      nutui.react.Button,
      null,
      React.createElement("div", null, "主要按钮")
    ),
    document.querySelector("#app")
  );
</script>
</body>
</html>
```

> 在页面中直接引入，将无法使用 **主题定制** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法

## 使用注意事项
- NutUI-React 基于 [react@^18.0.0](https://www.npmjs.com/package/react) 构建
- NutUI-React 版本提供的 `.scss` 文件建议使用 [Dart Sass ^1.40.0](https://www.npmjs.com/package/sass) 以上版本
- 组件 CSS 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等

