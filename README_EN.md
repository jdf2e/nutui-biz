
<p align="center">
    <img alt="logo" src="https://storage.360buyimg.com/nutui/nutui-biz/3x/0.0.8/logo-biz-red.676f7cb0.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">Mobile e-commerce business component library based on NutUI-React.</p>

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
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/202336/18/18586/7437/61b832ccE0b13d53d/18605da7232a5a0e.png" width="164" alt="NutUI" />
</p>

---

[简体中文](./README.md) | English

## Features

* 🚀 20+ High Quality Components
* 📖 Based on JD APP 10.0 Visual Specifications
* 🍭 Support Tree Shaking
* 📖 Extensive Documentation and Demos
* 💪 Written in TypeScript
* 💪 Support SSR (Experimental)
* 🍭 Support Custom Themes with 700+ Style Variables
* 🌍 Support i18n
* 🍭 80%+ Unit Test Coverage
* 📖 Provide Sketch Design Resources

## Installation

```bash
npm i @nutui/nutui-biz
```

## Usage

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

## Resources

[NutUI Quick Start](https://www.bilibili.com/video/BV14r4y1e7LK)

[Awesome-NutUI](https://github.com/jdf2e/nutui/blob/v4/awesome.md)


## Themes

NutUI provides several sets of official themes from actual business inside JD.com. If they don't meet your needs, you can use  <a href="https://nutui.jd.com/theme/#/base" target="_blank">Online Theme Editor</a>.

* <a href="https://nutui.jd.com/#/zh-CN/component/button" target="_blank">JD APP 10.0 Design (Vue3, default)</a>
* <a href="https://nutui.jd.com/jdt/#/zh-CN/component/button" target="_blank">JDT Design (Vue3)</a>
* <a href="https://nutui.jd.com/?jdb#/zh-CN/component/button" target="_blank">JD ToB Mall Design (Vue3)</a>
* <a href="https://nutui.jd.com/?jddkh#" target="_blank">JD Enterprise Business Design (Vue3)</a>
* <a href="https://nutui.jd.com/jdl/#/cell" target="_blank">JDL Design (Vue2)</a>


## Version Intros

> `@nutui/nutui` and `@nutui/nutui-taro` are parallel versions with some differences. The version numbers are always the same. If you need compatibility with versions below iOS 10, please use `@nutui/nutui@2` .

* `NutUI 2x` and `NutUI-JDL` are built with Vue2 which support modern browsers, Android >= 4.0, iOS >= 8.0 and only for H5.
* `NutUI 3x` is built with Vue3 which supports modern browsers, Chrome >= 51 and iOS >= 10.0. You can use it to develop both H5 and mini-programs.

## Build Versions

> If you are using AMD environment or build tools such as Webpack, Vite, etc., we recommend using the `es` version. If it is a non-module environment (such as direct reference through the `<script>` tag), it is recommended to use the `umd` compressed version.

* es **nutui.es.js**

* umd **nutui.umd.js**


## Cases

NutUI has been used in our production environment, and widely used in the industry for cross-platform development.
<p>
<img src="https://raw.githubusercontent.com/jdf2e/nutui-user-cases/master/user-cases.jpg" alt="NutUI" />
</p>
<p><a href="https://nutui.jd.com/#/case">View more cases</a></p>
<p>We are collecting more excellent cases, please click <a href="https://get.jd.com/#/survey/index?id=4217247740034539"> here </a> to submit.</p>

## Links

<ul>
    <li>
        <a href="https://github.com/jdf2e/nutui/discussions">
            Discussions (vote with 👍)
        </a>
    </li>
    <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            Feature Requests (vote with 👍)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/labels/bug%203.0">
            Bugs (vote with 👍)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion">
            Question (vote with 👍)
        </a>
    </li>
</ul>

## Communication

| Version | WeChat Group | JD Dongdong Group |
| --- | --- |--- |
| [NutUI Biz](https://github.com/jdf2e/nutui-biz/issues) | <img src="https://storage.360buyimg.com/imgtools/17c67beff6-4acf07c0-609c-11ed-a6ef-69df15b605e4.png" width="100" /> Reply 'NutUI-Biz' after following | 1025679314

## Join Us

#### NutUI Community

[*Welcome To NutUI  Community*](https://github.com/jdf2e/nutui/issues/1789)

#### Contribute to NutUI

There are some choices of contributing to NutUI as follows, solving issues, fixing bugs, adding new components, i18n, UI customization, platform and cross-end adaptation, etc.

You are very welcome to contribute code to NutUI. Before your pull requests, please read [*NutUI Developer Contributing Guide*](https://github.com/jdf2e/nutui/issues/1671).

## Issue & Discussion

[Report issues to NutUI](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=en)

> It is highly recommended to read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html), [*How To Ask Questions Of GitHub Community*](https://github.com/seajs/seajs/issues/545) and [*How to Report Bugs Effectively*](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html), then you can get understanding and help more easily.

[NutUI Discussion](https://github.com/jdf2e/nutui/discussions)

If you have any ideas, questions or suggestions, you can share your opinions here.

## Contributors

Thanks to all the following [developers](https://github.com/jdf2e/nutui/graphs/contributors) who have contributed code to NutUI.

<a href="https://github.com/jdf2e/nutui/graphs/contributors">
  <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" alt="contributors">
</a>

## Milestones

[Milestones](https://github.com/jdf2e/nutui/projects)

## Release Notes

NutUI follows [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153). The up-to-date release notes are available on [Release](https://github.com/jdf2e/nutui/releases).
<!-- 
## Github Stargazers 

![stargazers](https://starchart.cc/jdf2e/nutui.svg) -->
