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

const App = () => {
  return (
    <SettleBar
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 对齐方式

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      totalAlign="left"
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 禁用状态

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar 
      disabled
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 加载状态

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar 
      loading 
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 提交订单

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      customSelectAll="" 
      showZero={false} 
      totalText="总计" 
      settleButtonText="提交订单" 
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 去结算数量和单位

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      settleCount="100" 
      settleUnit="个" 
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 自定义合计额外区域内容

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      customTotalExtra={<div style={{fontSize: '12px'}}>已减 ¥30.00</div>} 
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::

### 带有警告信息

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }
  
  return (
    <SettleBar 
      customWarning={customWarningHtml()} 
      onSettle ={() => Toast.text('点击按钮')}
    />
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
| disabled   | 结算按钮是否置灰| Boolean  | `false`      |
| loading   | 结算按钮是否加载中| Boolean  | `false`      |
| showZero   | 数量为0时是否展示                                 | Boolean  | `true`          |
| safeAreaInsetBottom   | 是否开启iphone系列全面屏底部安全区适配                                 | Boolean  | `true`          |
| placeholder   | 固定在底部时，是否在标签位置生成一个等高的占位元素                                 | Boolean  | `false`          |
| customTotal | 合计区域自定义 | ReactNode  | -          |
| customWarning | 上面提示内容自定义 | ReactNode  | -          |
| customSelectAll | 全选内容自定义 | ReactNode  | -          |
| customTotalPrice | 合计价格内容自定义 | ReactNode  | -          |
| customTotalExtra | 合计额外区域自定义 | ReactNode  | -          |
| customButton | 按钮内容自定义 | ReactNode  | -          |
| iconProps   | 图标 props                                 | [IconProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)  | -         |
| checkboxProps   | 复选框 props                                 | [CheckboxProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/checkbox)  | -         |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelectAll | 全选按钮点击事件 |  event: Event |
| onSettle | 去结算按钮点击事件 |  event: Event |
| onDelete | 删除事件，isEdit 为 true 时生效 |  event: Event |