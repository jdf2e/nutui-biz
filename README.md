
<p align="center">
    <img alt="logo" src="https://storage.360buyimg.com/nutui/nutui-biz/3x/0.0.8/logo-biz-red.676f7cb0.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">基于 NutUI-React 的移动电商业务组件库</p>

<p align="center">
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://coveralls.io/repos/github/jdf2e/nutui/badge.svg?branch=master" alt="Coverage Status" />
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/npm/l/@nutui/nutui.svg" alt="license"/>
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/v/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/dt/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://travis-ci.org/jdf2e/nutui">
    <img src="https://img.shields.io/travis/jdf2e/nutui.svg?style=flat-square">
    </a>  

</p>
<p align="center">
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/contributors/jdf2e/nutui" alt="GitHub contributors">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commit-activity/w/jdf2e/nutui" alt="GitHub commit activity">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/issues-closed/jdf2e/nutui" alt="GitHub closed issues">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commits-since/jdf2e/nutui/latest/v4" alt="GitHub commits since latest release (by date)">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/release-date/jdf2e/nutui" alt="GitHub Release Date">
  </a>
</p>

<p align="center">
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/202336/18/18586/7437/61b832ccE0b13d53d/18605da7232a5a0e.png" width="164" alt="NutUI-Biz" />
</p>

---

简体中文 | [English](./README_EN.md)

##  特性

* 🚀 20+ 高质量组件，覆盖移动端主流场景
* 📖 基于京东APP 10.0 视觉规范
* 🍭 支持按需引用
* 📖 详尽的文档和示例
* 💪 支持 TypeScript
* 💪 支持服务端渲染（测试阶段）
* 🍭 支持组件级别定制主题，内置 700+ 个变量
* 🌍 国际化支持，已支持英文，印尼语和繁体中文
* 🍭 单元测试覆盖率超过 80%，保障稳定性
* 📖 提供 Sketch 设计资源

## 安装

```bash
npm i @nutui/nutui-biz
```

## 示例

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import '@nutui/nutui-biz/dist/style.css'
import { Sku } from '@nutui/nutui-biz';

ReactDOM.render(
  <div className="App">
    <Sku />
  </div>,
  document.getElementById("app")
);
```

## 学习资源

[NutUI 实战快速入门](https://www.bilibili.com/video/BV14r4y1e7LK/?spm_id_from=333.999.0.0&vd_source=339cf5dcca71ec2905c729fd92bba8a9)

[awesome-nutui](https://github.com/jdf2e/nutui/blob/v4/awesome.md)


## 主题

我们提供了几套官方主题，来自京东内部实际业务，欢迎在项目中使用，如果不能满足需求，你也可以  <a href="https://nutui.jd.com/theme/#/base" target="_blank">自定义主题</a>

* <a href="https://nutui.jd.com/#/zh-CN/component/button" target="_blank">京东APP视觉（Vue3，默认）</a>
* <a href="https://nutui.jd.com/jdt/#/zh-CN/component/button" target="_blank">京东科技视觉（Vue3）</a>
* <a href="https://nutui.jd.com/?jdb#/zh-CN/component/button" target="_blank">京东零售B商城主题（Vue3）</a>
* <a href="https://nutui.jd.com/?jddkh#/zh-CN/component/button" target="_blank">京东企业业务主题（Vue3）</a>
* <a href="https://nutui.jd.com/jdl/#/cell" target="_blank">京东物流视觉（Vue2）</a>


## 版本说明

> @nutui/nutui 和 @nutui/nutui-taro 属于并行版本，存在部分差异，版本号始终保持一致。如果兼容 ios 10 以下请使用 @nutui/nutui@2

* NutUI 2x & NutUI-JDL 使用 Vue2 开发，支持现代浏览器及 Android >= 4.0、iOS >= 8.0，仅 H5 应用。
* NutUI 3x 使用 Vue3 开发，支持现代浏览器及 Chrome >= 51、iOS >= 10.0，可输出 H5 和小程序两类应用。

## 构建版本

> AMD 环境、Webpack、Vite 等构建工具环境、服务端建议使用 es 版，非模块化环境（如通过 `<script>` 标签直接引用）建议使用 umd 压缩版。

* es **nutui.es.js**

* umd **nutui.umd.js**


## 使用案例

NutUI 已经投入了我们的生产环境中使用，业界也在广泛地使用 NutUI 开发多端应用。
<p>
<img src="https://raw.githubusercontent.com/jdf2e/nutui-user-cases/master/user-cases.jpg" alt="NutUI" />
</p>
<p><a href="https://nutui.jd.com/#/case">更多案例</a></p>
<p><a href="https://get.jd.com/#/survey/index?id=4217247740034539">我们正在征集社区优秀案例，欢迎点击提交</a></p>

## 链接

<ul>
    <li>
        <a href="https://github.com/jdf2e/nutui/discussions">
            Discussions  (用👍投票)
        </a>
    </li>
    <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            Feature Requests (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/labels/bug%203.0">
            Bugs (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion">
            Question  (用👍投票)
        </a>
    </li>
</ul>

## 开发交流

| 版本 | 微信群 |内部咚咚群 |
| --- | --- |--- |
| [NutUI Biz](https://github.com/jdf2e/nutui-biz/issues) | <img src="https://storage.360buyimg.com/imgtools/17c67beff6-4acf07c0-609c-11ed-a6ef-69df15b605e4.png" width="100" /> 回复「NutUI-Biz」 | 1025679314


## 参与共建

#### NutUI 社区共建倡议

[NutUI 邀您共建，Contributor 您好](https://github.com/jdf2e/nutui/issues/1789)

#### 为 NutUI 贡献代码

NutUI 的共建方向主要分为：解决 issue、修复 bug、新增组件、增加国际化、UI 定制、平台适配、跨端扩展等。

欢迎社区开发者参与共建，在贡献您的代码之前请先阅读 [《NutUI 贡献指南》](https://github.com/jdf2e/nutui/issues/1671)。

## 问题反馈与建议

[给 NutUI 提 Issue](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn)

> 在反馈问题之前，推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)和[《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，这样您能够更容易获得理解和帮助。

[参与 NutUI 社区讨论](https://github.com/jdf2e/nutui/discussions)

如果您有任何想法、疑问或建议，都可以参与社区讨论分享您的观点。

## 贡献者们

感谢以下所有给 NutUI 贡献过代码的 [开发者](https://github.com/jdf2e/nutui/graphs/contributors)。

<a href="https://github.com/jdf2e/nutui/graphs/contributors">
  <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" alt="contributors">
</a>


<!-- ## Stargazers  -->

<!-- [![Stargazers repo roster for @jdf2e/nutui](https://reporoster.com/stars/jdf2e/nutui)](https://github.com/jdf2e/nutui/stargazers) -->

<!-- ## Forkers

[![Forkers repo roster for @jdf2e/nutui](https://reporoster.com/forks/jdf2e/nutui)](https://github.com/jdf2e/nutui/network/members) -->


## 开发计划

[Milestones](https://github.com/jdf2e/nutui/projects)

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/jdf2e/nutui/releases)。

## github stargazers 

![stargazers](https://starchart.cc/jdf2e/nutui.svg)

