#  InvoiceTitleEdit 发票抬头编辑

### 介绍

展示申请发票页面。

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
  return (
    <InvoiceTitleEdit />
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


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onDelIcon | 点击删除图标 |  event: Event,item |