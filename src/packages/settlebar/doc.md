#  SettleBar 结算栏

### 介绍

常见于购物车页底部，包括全选、合计与「去结算」按钮。

### 安装

import { SettleBar } from '@nutui/nutui-biz';

## 代码演示

### 合计对齐方式

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar totalAlign="left" />
  );
};
export default App;
```

:::

### 去结算按钮置灰

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar disabled />
  );
};
export default App;
```

:::

### 去结算加载中

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar loading />
  );
};
export default App;
```

:::

### 自定义合计和去结算按钮文案

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar totalText="总计" settleButtonText="结算" />
  );
};
export default App;
```

:::

### 去结算数量和单位

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar settleCount="100" settleUnit="个" />
  );
};
export default App;
```

:::

### 编辑状态与删除事件

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar isEdit onDelete ={() => console.log('Delete invoked')} />
  );
};
export default App;
```

:::

### 自定义合计区域内容

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar customTotal={<div>自定义合计</div>} />
  );
};
export default App;
```

:::

### 带有警告信息

:::demo

```ts
import  React from "react";
import { SettleBar } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar customWarning={customWarningHtml()} />
  );
};
export default App;
```

:::


## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| total   | 合计价格                                 | Number  | 0         |
| totalText     | 合计文案                   | String  | '合计'    |
| totalAlign | 合计区域对齐方式，可选值：left、right                        | String  | 'right'      |
| settleCount     | 结算数量                               | Number | 0    |
| settleUnit  | 结算单位                                  | String | -    |
| settleButtonText     | 结算按钮文案 | String  | '去结算'     |
| disabled   | 结算按钮是否置灰| Boolean  | true      |
| loading   | 结算按钮是否加载中| Boolean  | false      |
| isEdit   | 是否处于编辑状态| Boolean  | false      |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelectAll | 全选按钮点击事件 |  event: Event |
| onSubmit | 去结算按钮点击事件 |  event: Event |
| onDelete | 删除事件，isEdit 为 true 时生效 |  event: Event |

## Slots
| 参数 | 说明 |
|----- | ----- |
| customTotal | 合计区域自定义 |
| customWarning | 上面提示内容自定义 |
| customSelectAll | 全选内容自定义 |
| customTotalExtra | 合计附加内容自定义 |
| customTotalPrice | 合计价格内容自定义 |