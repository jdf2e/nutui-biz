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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar
      total={100}
      onSettle ={() => Toast.text('点击按钮')}
    />
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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      total={100}
      totalAlign="left" 
      onSettle ={() => Toast.text('点击按钮')}
    />
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
    <SettleBar 
      total={100}
      disabled 
    />
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
    <SettleBar 
      total={100}
      loading 
    />
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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      total={100}
      customSelectAll="" 
      showZero={false} 
      totalText="total" 
      settleButtonText="submit order" 
      onSettle ={() => Toast.text('点击按钮')}
    />
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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      total={100}
      settleCount="100" 
      settleUnit="indivual" 
      onSettle ={() => Toast.text('点击按钮')}
    />
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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <SettleBar 
      total={100}
      customTotalExtra={<div style={{fontSize: '12px'}}>reduced ¥30.00</div>} 
      onSettle ={() => Toast.text('点击按钮')}
    />
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
import { Toast } from '@nutui/nutui-react';

const App = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>This product is out of stock！</div>
  }
  
  return (
    <SettleBar 
      total={100}
      customWarning={customWarningHtml()} 
      onSettle ={() => Toast.text('点击按钮')}
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
| total   | Total price                                 | number \| string  | 0         |
| totalText     | Total text                   | string  | `total`    |
| totalAlign | Total area alignment, optional value：`left`、`right`                       | string  | `right`      |
| settleCount     | Settlement quantity                               | number | 0    |
| settleUnit  | Settlement unit                                  | string | -    |
| settleButtonText     | Settlement button text | string  | `to settle`     |
| disabled   | Whether the settlement button is disabled| boolean  | `false`      |
| loading   | Whether the settlement button is loading| boolean  | `false`      |
| showZero   | When SettleCount is 0, whether to display the count in the settlement button                                | boolean  | `true`          |
| safeAreaInsetBottom   | Whether to enable bottom safe area adaptation                                 | boolean  | `true`          |
| placeholder   | Whether to generate a placeholder element when fixed                                 | boolean  | `false`          |
| customTotal | Customize total area content | ReactNode  | -          |
| customWarning | Customize warning content | ReactNode  | -          |
| customSelectAll | Customize select all content | ReactNode  | -          |
| customTotalPrice | Customize total price content | ReactNode  | -          |
| customTotalExtra | Customize total extra content | ReactNode  | -          |
| customButton | Customize button content | ReactNode  | -          |


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onSelectAll | Select all button click event |  event: Event |
| onSettle | To settle button click event |  event: Event |
| onDelete | Delete event, take effect when isEdit is true |  event: Event |