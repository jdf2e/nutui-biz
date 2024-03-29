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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <CartBar>
        <CartBarIcon text="shop" iconProps={{name: 'shop'}} />
        <CartBarIcon text="shopping cart" iconProps={{name: 'cart'}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <CartBar>
        <CartBarIcon text="shop" iconProps={{name: 'shop'}} badgeProps={{value: '10'}}  />
        <CartBarIcon text="shopping cart" iconProps={{name: 'cart'}} badgeProps={{dot: true}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <CartBar>
        <CartBarIcon text="shop" iconProps={{name: 'shop', color: 'red'}} />
        <CartBarIcon text="shopping cart" iconProps={{name: 'cart'}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <CartBar>
        <CartBarIcon iconProps={{name: 'shop'}} />
        <CartBarIcon iconProps={{name: 'cart'}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  return (
    <div className="demo">
      <CartBar hasCapsuleButtons>
        <CartBarIcon text="shop" iconProps={{name: 'shop'}} />
        <CartBarIcon text="shopping cart" iconProps={{name: 'cart'}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
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
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {
  const customTopHtml = () => {
    return <div style={{display: 'flex', height: '30px', alignItems: 'center', justifyContent: 'center', color: 'red'}}>Custom top content.</div>
  }

  return (
    <div className="demo">
      <CartBar top={customTopHtml()}>
        <CartBarIcon text="shop" iconProps={{name: 'shop'}} />
        <CartBarIcon text="shopping cart" iconProps={{name: 'cart'}} />
        <CartBarButton text="add cart" buttonProps={{type: 'danger'}} />
        <CartBarButton text="buy it now" buttonProps={{type: 'warning'}} />
      </CartBar>
    </div>
  );
};
export default App;

```

:::




## API


### CartBar Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| hasCapsuleButtons   | Whether to include capsule buttons                                 | boolean  | `false`          |
| safeAreaInsetBottom   | Whether to enable bottom safe area adaptation                                 | boolean  | `true`          |
| placeholder   | Whether to generate a placeholder element when fixed                                 | boolean  | `false`          |
| top | Custom top content |ReactNode  | -          |


### CartBarIcon Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| text   | Icon text                                 | ReactNode  | -         |
| iconProps   | Icon props                                 | [IconProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)  | -         |
| badgeProps   | Badge props                                 | [BadgeProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/badge)  | -         |


### CartBarIcon Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | Click event |  - |



### CartBarButton Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| text   | Button text                                 | ReactNode  | -         |
| buttonProps   | Button props                                 | [ButtonProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/button)  | -         |


### CartBarButton Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | Click event |  - |