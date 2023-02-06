#  SettleBar 结算栏

### Intro

Commonly found at the bottom of shopping cart pages, including select all, total, and "go to checkout" buttons. Also applies to the submit order bar at the bottom of the submit page.

### Install

```javascript
import { SettleBar } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

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

### Alignment

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

### Disabled

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

### Loading

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

### Submit Order

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar customSelectAll="" showZero={false} totalText="total" settleButtonText="submit order" />
  );
};
export default App;
```

:::

### To Settle Quantity And Unit

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar settleCount="100" settleUnit="indivual" />
  );
};
export default App;
```

:::

### Custom Total Extra Area Content

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SettleBar customTotalExtra={<div style={{fontSize: '12px'}}>reduced ¥30.00</div>} />
  );
};
export default App;
```

:::

### With Warning Message

:::demo

```ts
import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';

const App = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>This product is out of stock！</div>
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


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| total   | Total price                                 | Number  | 0         |
| totalText     | Total text                   | String  | `total`    |
| totalAlign | Total area alignment, optional value：`left`、`right`                       | String  | `right`      |
| settleCount     | Settlement quantity                               | Number | 0    |
| settleUnit  | Settlement unit                                  | String | -    |
| settleButtonText     | Settlement button text | String  | `to settle`     |
| disabled   | Whether the settlement button is disabled| Boolean  | `true`      |
| loading   | Whether the settlement button is loading| Boolean  | `false`      |
| showZero   | Whether to display when the quantity is 0                                 | Boolean  | `true`          |
| safeAreaInsetBottom   | Whether to enable bottom safe area adaptation                                 | Boolean  | `true`          |
| placeholder   | Whether to generate a placeholder element when fixed                                 | Boolean  | `false`          |
| customTotal | Customize total area content | React.ReactNode  | -          |
| customWarning | Customize warning content | React.ReactNode  | -          |
| customSelectAll | Customize select all content | React.ReactNode  | -          |
| customTotalPrice | Customize total price content | React.ReactNode  | -          |
| customTotalExtra | Customize total extra content | React.ReactNode  | -          |
| customButton | Customize button content | React.ReactNode  | -          |


## Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onSelectAll | Select all button click event |  event: Event |
| onSubmit | To settle button click event |  event: Event |
| onDelete | Delete event, take effect when isEdit is true |  event: Event |