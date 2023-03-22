#  InvoiceTitleEdit 发票抬头编辑

### Intro

Used to add or edit invoice headers, including VAT special invoices and electronic ordinary invoices.

### Install

```javascript
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
```


## Demo

### Special Invoice
Company code cannot be edited.

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

### Normal Invoice

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
        submitButtonText="submit"
      />
    </div>
  );
};
export default App;
```

:::

### Custom Bottom

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
        submitButtonText="submit"
        bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>Custom Bottom</div>}
      />
    </div>
  );
};
export default App;
```

:::


## API

### Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| data   | 地址数组                                 | Idata  | -         |
| invoiceType   | Invoice type, optional value:  `normal`，`special`    | string  | `special`         |
| bottom   | Custom bottom content     | ReactNode  | -         |
| submitButtonText   | Submit button text     | string  | `提交审批`         |


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onSubmit | Submit event |  arg: any |
| onInput | Invoice header input event |  value: string \| number, event: Event|


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