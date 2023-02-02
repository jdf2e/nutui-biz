#  SettleBar 结算栏

### 介绍

常见于购物车页底部，包括全选、合计与「去结算」按钮。也适用于结算页底部的提交订单栏。

### 安装

```javascript
import { SettleBar } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar />
  );
};
export default App;
```

:::

### 对齐方式

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar totalAlign="left" />
  );
};
export default App;
```

:::

### 禁用状态

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar disabled />
  );
};
export default App;
```

:::

### 加载状态

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar loading />
  );
};
export default App;
```

:::

### 提交订单

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar customSelectAll="" showZero={false} totalText="总计" settleButtonText="提交订单" />
  );
};
export default App;
```

:::

### 去结算数量和单位

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar settleCount="100" settleUnit="个" />
  );
};
export default App;
```

:::

### 自定义合计额外区域内容

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar customTotalExtra={<div style={{fontSize: '12px'}}>已减 ¥30.00</div>} />
  );
};
export default App;
```

:::

### 带有警告信息

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }
  
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
| totalText     | 合计文案                   | String  | `合计`    |
| totalAlign | 合计区域对齐方式，可选值：`left`、`right`                       | String  | `right`      |
| settleCount     | 结算数量                               | Number | 0    |
| settleUnit  | 结算单位                                  | String | -    |
| settleButtonText     | 结算按钮文案 | String  | `去结算`     |
| disabled   | 结算按钮是否置灰| Boolean  | `true`      |
| loading   | 结算按钮是否加载中| Boolean  | `false`      |
| showZero   | 数量为0时是否展示                                 | Boolean  | `true`          |
| safeAreaInsetBottom   | 是否开启底部安全区适配                                 | Boolean  | `true`          |
| placeholder   | 是否在标签位置生成一个等高的占位元素                                 | Boolean  | `false`          |
| customTotal | 合计区域自定义 | React.ReactNode  | -          |
| customWarning | 上面提示内容自定义 | React.ReactNode  | -          |
| customSelectAll | 全选内容自定义 | React.ReactNode  | -          |
| customTotalPrice | 合计价格内容自定义 | React.ReactNode  | -          |
| customTotalExtra | 合计额外区域自定义 | React.ReactNode  | -          |
| customButton | 按钮内容自定义 | React.ReactNode  | -          |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelectAll | 全选按钮点击事件 |  event: Event |
| onSubmit | 去结算按钮点击事件 |  event: Event |
| onDelete | 删除事件，isEdit 为 true 时生效 |  event: Event |