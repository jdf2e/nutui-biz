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
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar
        total={100}
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
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
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        totalAlign="left"
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        disabled
      />
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        loading 
      />
    </div>
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
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        customSelectAll="" 
        showZero={false} 
        totalText="总计" 
        settleButtonText="提交订单" 
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
  );
};
export default App;

```

:::

### 去结算数量

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        settleCount="100" 
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
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
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        customTotalExtra={<div style={{fontSize: '12px'}}>已减 ¥30.00</div>} 
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
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
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }
  
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        customWarning={customWarningHtml()} 
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
  );
};
export default App;

```

:::


## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| total   | 合计价格                                 | number \| string | 0         |
| totalText     | 合计文案                   | string  | `合计`    |
| totalAlign | 合计区域对齐方式，可选值：`left`、`right`                       | string  | `right`      |
| settleCount     | 结算数量                               | number \| string | 0    |
| settleButtonText     | 结算按钮文案 | string  | `去结算`     |
| disabled   | 结算按钮是否置灰| boolean  | `false`      |
| loading   | 结算按钮是否加载中| boolean  | `false`      |
| showZero   | SettleCount 为 0 时，是否还展示结算按钮中的数量                                 | boolean  | `true`          |
| safeAreaInsetBottom   | 是否开启iphone系列全面屏底部安全区适配                                 | boolean  | `true`          |
| placeholder   | 固定在底部时，是否在标签位置生成一个等高的占位元素                                 | boolean  | `false`          |
| customTotal | 合计区域自定义 | ReactNode  | -          |
| customWarning | 上面提示内容自定义 | ReactNode  | -          |
| customSelectAll | 全选内容自定义 | ReactNode  | -          |
| customTotalPrice | 合计价格内容自定义 | ReactNode  | -          |
| customTotalExtra | 合计额外区域自定义 | ReactNode  | -          |
| customButton | 按钮内容自定义 | ReactNode  | -          |
| isCheckedAll | 全选按钮是否选中 | boolean  | `false`      |


### Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelectAll | 全选按钮点击事件 |  checked |
| onClickButton | 按钮点击事件 |  - |