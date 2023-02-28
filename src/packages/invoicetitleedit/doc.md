#  InvoiceTitleEdit 发票抬头编辑

### 介绍

用于新增或编辑发票抬头，包括增值税专用发票和电子普通发票。

### 安装

```javascript
import { Form, Radio, Input, Button } from '@nutui/nutui-react'
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
```


## 代码演示

### 增值税专用发票

:::demo

```ts
import  React from "react";
import { InvoiceTitleEdit } from '@nutui/nutui-biz';

const App = () => {
  const handleSubmit = (arg: any) => {
    if (Array.isArray(arg)) {
      Toast.fail('callback: submitFailed error')
      console.log('failed error', arg)
    } else {
      Toast.success('succeed')
      console.log('succeed', arg)
    }
  }

  const handleInput = () => {

  }

  return (
    <InvoiceTitleEdit 
      onSubmit={handleSubmit}
      onInput={handleInput}
    />
  );
};
export default App;
```

:::

### 电子普通发票

:::demo

```ts
import  React from "react";
import { InvoiceTitleEdit } from '@nutui/nutui-biz';

const App = () => {
  return (
    <InvoiceTitleEdit 
      onSubmit={handleSubmit}
      invoiceType="normal"
    />
  );
};
export default App;
```

:::

### 自定义底部

:::demo

```ts
import  React from "react";
import { InvoiceTitleEdit } from '@nutui/nutui-biz';

const App = () => {
  return (
    <InvoiceTitleEdit 
      onSubmit={handleSubmit}
      invoiceType="normal"
      bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>我是自定义的底部</div>}
    />
  );
};
export default App;
```

:::


## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| data   | 地址数组                                 | Array  | -         |
| invoiceType   | 发票类型，可选 `normal`，`special`    | string  | `special`         |
| bottom   | 底部自定义内容     | ReactNode  | -         |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSubmit | 点击提交审批按钮事件 |  event: Event,item |
| onInput | 发票抬头输入事件 |  event: Event,item |