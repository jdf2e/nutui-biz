#  InvoiceTitleEdit 发票抬头编辑

### Intro

Used to add or edit invoice headers, including VAT special invoices and electronic ordinary invoices.

### Install

```javascript
import { Form, Radio, Input, Button } from '@nutui/nutui-react'
import { InvoiceTitleEdit } from '@nutui/nutui-biz';
```


## Demo

### Special Invoice

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

### Normal Invoice

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

### Custom Bottom

:::demo

```ts
import  React from "react";
import { InvoiceTitleEdit } from '@nutui/nutui-biz';

const App = () => {
  return (
    <InvoiceTitleEdit 
      onSubmit={handleSubmit}
      invoiceType="normal"
      bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>Custom Bottom</div>}
    />
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


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onSubmit | Submit event |  event: Event,item |
| onInput | Invoice header input event |  event: Event,item |