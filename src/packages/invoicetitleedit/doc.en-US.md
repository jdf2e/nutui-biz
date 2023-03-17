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
import "@nutui/nutui-biz/dist/styles/demo.scss";

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
import "@nutui/nutui-biz/dist/styles/demo.scss";

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
import "@nutui/nutui-biz/dist/styles/demo.scss";

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
| data   | 地址数组                                 | Array  | -         |
| invoiceType   | Invoice type, optional value:  `normal`，`special`    | string  | `special`         |
| bottom   | Custom bottom content     | ReactNode  | -         |
| submitButtonText   | Submit button text     | string  | `提交审批`         |


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onSubmit | Submit event |  arg: any |
| onInput | Invoice header input event |  value: string \| number, event: Event|