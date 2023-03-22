#  InvoiceTitleEdit 发票抬头编辑

### 介绍

用于新增或编辑发票抬头，包括增值税专用发票和电子普通发票。

### 安装

```javascript
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
```


## 代码演示

### 增值税专用发票
纳税人识别号不可编辑。

:::demo

```ts
import  React from "react";
import { Toast } from '@nutui/nutui-react'
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

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
    console.log('Invoice title input event is triggered')
  }

  return (
    <div className="demo">
      <InvoiceTitleEdit 
        onSubmit={handleSubmit}
        onInput={handleInput}
      />
    </div>
  );
};
export default App;
```

:::

### 电子普通发票

:::demo

```ts
import  React from "react";
import { Toast } from '@nutui/nutui-react'
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

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

  return (
    <div className="demo">
      <InvoiceTitleEdit 
        onSubmit={handleSubmit}
        invoiceType="normal"
        submitButtonText="提交"
      />
    </div>
  );
};
export default App;
```

:::

### 自定义底部

:::demo

```ts
import  React from "react";
import { Toast } from '@nutui/nutui-react'
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

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

  return (
    <div className="demo">
      <InvoiceTitleEdit 
        onSubmit={handleSubmit}
        invoiceType="normal"
        submitButtonText="提交"
        bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>我是自定义的底部</div>}
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
| data   | 地址数组                                 | Idata  | -         |
| invoiceType   | 发票类型，可选 `normal`，`special`    | string  | `special`         |
| bottom   | 底部自定义内容     | ReactNode  | -         |
| submitButtonText   | 提交按钮文案     | string  | `提交审批`         |


### Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSubmit | 点击提交审批按钮事件 |  arg: any |
| onInput | 发票抬头输入事件 |  value: string \| number, event: Event |


### Idata 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| titleType   | 抬头类型，仅适用于电子普通发票，可选值：`personal`、`enterprise`                                | string |
| title   | 发票抬头            | string  | 
| companyCode   | 纳税人识别号            | string  | 
| address   | 注册地址            | string  | 
| companyPhone   | 注册电话            | string  | 
| bankDeposit   | 开户行            | string  | 
| bankAccount   | 银行账户            | string  | 