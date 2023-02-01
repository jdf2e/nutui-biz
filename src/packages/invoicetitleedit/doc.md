#  InvoiceTitleEdit 发票抬头编辑

### 介绍

用于新增或编辑发票抬头，包括增值税专用发票和电子普通发票。

### 安装

```javascript
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
```


## 代码演示

### 基本用法

:::demo

```ts
import  React from "react";
import { InvoiceTitleEdit } from '@nutui/nutui-biz';

const App = () => {
  const handle1 = () => {
    console.log(111)
  }

  return (
    <InvoiceTitleEdit onInput={handle1 } />
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
| invoiceType   | 发票类型，可选 `electronic`，`VAT`    | String  | `electronic`         |
| bottom   | 底部自定义内容     | ReactNode  | -         |
| submitText   | 提交按钮文案       | String  | `提交`        |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSubmit | 点击提交审批按钮事件 |  event: Event,item |
| onInput | 发票抬头输入事件 |  event: Event,item |