#  CartBar 购物车栏

### Intro

Commonly found at the bottom of product detail pages, including a set of icons (contact customer service, shopping cart, etc.) and a set of buttons (add cart, buy it now).

### Install

```javascript
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="shop" icon="shop" />
      <CartBarIcon text="shopping cart" icon="cart" />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### With Badge

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="shop" icon="shop" badge="10" />
      <CartBarIcon text="shopping cart" icon="cart" dot />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### Custom Icon Color

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="shop" color="red" icon="shop" />
      <CartBarIcon text="shopping cart" icon="cart" />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### Icon Without Text

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon icon="shop" />
      <CartBarIcon icon="cart" />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### Capsule Button

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar hasCapsuleButtons>
      <CartBarIcon text="shop" icon="shop" />
      <CartBarIcon text="shopping cart" icon="cart" />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### Custom Top Content

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  const customTopHtml = () => {
    return <div style={{display: 'flex', height: '30px', alignItems: 'center', justifyContent: 'center', color: 'red'}}>Custom top content.</div>
  }

  return (
    <CartBar top={customTopHtml()}>
      <CartBarIcon text="shop" icon="shop" />
      <CartBarIcon text="shopping cart" icon="cart" />
      <CartBarButton text="add cart" type="danger" />
      <CartBarButton text="buy it now" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::




## API


### CartBar Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| hasCapsuleButtons   | Whether to include capsule buttons                                 | Boolean  | `false`          |
| safeAreaInsetBottom   | Whether to enable bottom safe area adaptation                                 | Boolean  | `true`          |
| placeholder   | Whether to generate a placeholder element when fixed                                 | Boolean  | `false`          |
| top | Custom top content |React.ReactNode  | -          |


### CartBarIcon Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| text   | Icon text                                 | String  | -         |
| icon   | Icon                                 | String  | -         |
| color   | Icon color                                 | String  | `#323233`         |
| dot   | Whether to display the small red dot in the upper right corner of the icon                                 | Boolean  | `false`         |
| badge   | The content of the icon in the upper right corner of the icon	                                 | Number \| String  | -         |


## CartBarIcon Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | click event |  event: Event |



### CartBarButton Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| text   | Button text                                 | String  | -         |
| disabled   | Whether to disable button                                 | Boolean  | `false`         |
| type   | Button type, optional value: `primary` `info` `warning` `danger`                                 | String  | `default`         |
| loading   | Whether to show loading status                                 | Boolean  | `false`         |
| color   | Icon color                                 | String  | -         |


## CartBarButton Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | click event |  event: Event |