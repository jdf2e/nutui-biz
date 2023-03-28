
<p align="center">
    <img alt="logo" src="https://storage.360buyimg.com/nutui/nutui-biz/3x/0.0.8/logo-biz-red.676f7cb0.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">基于 NutUI-React 的移动电商业务组件库</p>

<p align="center">
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://coveralls.io/repos/github/jdf2e/nutui/badge.svg?branch=master" alt="Coverage Status" />
    </a>
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/npm/l/@nutui/nutui-biz.svg" alt="license"/>
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/v/@nutui/nutui-biz.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/dt/@nutui/nutui-biz.svg?style=flat-square">
    </a>
    <a href="https://travis-ci.org/jdf2e/nutui">
    <img src="https://img.shields.io/travis/jdf2e/nutui-biz.svg?style=flat-square">
    </a>  

</p>
<p align="center">
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/github/contributors/jdf2e/nutui-biz" alt="GitHub contributors">
    </a>  
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/github/commit-activity/w/jdf2e/nutui-biz" alt="GitHub commit activity">
    </a>
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/github/issues-closed/jdf2e/nutui-biz" alt="GitHub closed issues">
    </a>  
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/github/commits-since/jdf2e/nutui/latest/v4" alt="GitHub commits since latest release (by date)">
    </a>
    <a href="https://github.com/jdf2e/nutui-biz">
    <img src="https://img.shields.io/github/release-date/jdf2e/nutui" alt="GitHub Release Date">
  </a>
</p>

<p align="center">
   <img src="https://img11.360buyimg.com/imagetools/jfs/t1/125392/15/36236/3450/6422d3fcF3af86473/e103f55da277a200.png" width="164" alt="NutUI-Biz" />
</p>

---

##  特性

* 🚀 20+ 高质量组件，覆盖移动端商城所有模块
* 📖 基于京东APP 10.0 视觉规范
* 🍭 支持按需引用
* 📖 详尽的文档和示例
* 💪 支持 TypeScript
* 🍭 单元测试覆盖率超过 80%，保障稳定性

## 安装

```bash
npm i @nutui/nutui-biz
```

## 示例

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'
import { Card } from '@nutui/nutui-biz';

ReactDOM.render(
  <div className="App">
     <Card
      imageProps='//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg'
      title='【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'
      price='388'
      shopName='阳澄湖大闸蟹自营店'
    />
  </div>,
  document.getElementById("app")
);
```

## 构建版本

> AMD 环境、Webpack、Vite 等构建工具环境、服务端建议使用 es 版，非模块化环境（如通过 `<script>` 标签直接引用）建议使用 umd 压缩版。

* es **nutui.biz.es.js**

* umd **nutui.biz.umd.js**

## 问题反馈与建议

[参与 NutUI-Biz 社区讨论](https://github.com/jdf2e/nutui-biz/discussions)

如果您有任何想法、疑问或建议，都可以参与社区讨论分享您的观点。

## 贡献者们

感谢以下所有给 NutUI-Biz 贡献过代码的 [开发者](https://github.com/jdf2e/nutui-biz/graphs/contributors)。

<a href="https://github.com/jdf2e/nutui-biz/graphs/contributors">
  <img src="https://opencollective.com/nutui-biz/contributors.svg?width=890&button=false" alt="contributors">
</a>


<!-- ## Stargazers  -->

<!-- [![Stargazers repo roster for @jdf2e/nutui](https://reporoster.com/stars/jdf2e/nutui)](https://github.com/jdf2e/nutui/stargazers) -->

<!-- ## Forkers

[![Forkers repo roster for @jdf2e/nutui](https://reporoster.com/forks/jdf2e/nutui)](https://github.com/jdf2e/nutui/network/members) -->


<!-- ## 开发计划

[Milestones](https://github.com/jdf2e/nutui/projects) -->

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/jdf2e/nutui-biz/releases)。

## github stargazers 

![stargazers](https://starchart.cc/jdf2e/nutui-biz.svg)

