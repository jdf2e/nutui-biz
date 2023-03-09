# QuickEnter 快捷入口

### 介绍

快捷入口，又称为金刚区，是一个页面中头部的重要位置、是页面的核心功能区域，表现形式为多行排列的宫格区图标。

### 安装

```javascript
import { QuickEnter } from "@nutui/nutui-biz";
```

## 代码演示

### 基本用法

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} />;
};
export default App;
```

:::

### 轮播展示

当 links 数组的长度超过一屏最大展示数时，默认轮播展示

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} indicatorVisible={true} />;
};
export default App;
```

:::

### 单行

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} rows={1} indicatorVisible={true} />;
};
export default App;
```

:::

### 滑动展示

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter slideMode={"slide"} data={quickEnterData} rows={2} />;
};
export default App;
```

:::

## API

### Props

| 参数                 | 说明                                | 类型                    | 默认值               |
| -------------------- | ----------------------------------- | ----------------------- | -------------------- |
| columns              | 每行展示的数量                      | number \| string        | `5`                  |
| rows                 | 展示行数                            | number \| string        | `2`                  |
| data                 | 展示数据                            | QuickEnterData[]        | -                  |
| slideMode            | 多屏展示效果，可选值：swiper、slide | string                  | `swiper`             |
| iconSize             | 图标大小 ,单位为 'px'               | Array<number \| string> | [30,30]              |
| indicatorVisible     | 指示器是否展示                      | boolean                 | `false`              |
| indicatorBgColor     | 指示器背景色                        | string                  | `rgba(0, 0, 0, 0.2)` |
| indicatorActiveColor | 指示器选中颜色                      | string                  | `#fa2c19`            |

### QuickEnterData

| 参数        | 说明                               | 类型      |
| ----------- | ---------------------------------- | --------- |
| displayName | 快捷入口描述                       | string    |
| imageUrl    | 快捷入口图标(图片链接或 html 标签) | ReactNode |

### Events

| 事件名      | 说明             | 回调参数       |
| ----------- | ---------------- | -------------- |
| onClickItem | 点击图标区时触发 | QuickEnterData |
