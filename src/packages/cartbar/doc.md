#  CartBar 购物车栏

### 介绍

常见于商详页底部，包括一组图标（联系客服、购物车等）和一组按钮（加车、立即购买）。

### 安装

```javascript
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### 带有徽标

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" badge="10" />
      <CartBarIcon text="购物车" icon="cart" dot />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### 自定义图标颜色

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon text="店铺" color="red" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### 图标无文本

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar>
      <CartBarIcon icon="shop" />
      <CartBarIcon icon="cart" />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### 胶囊型按钮

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  return (
    <CartBar hasCapsuleButtons>
      <CartBarIcon text="店铺" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::

### 顶部自定义内容

:::demo

```ts
import  React from 'react';
import { CartBar, CartBarIcon, CartBarButton } from '@nutui/nutui-biz';

const App = () => {
  const customTopHtml = () => {
    return <div style={{display: 'flex', height: '30px', alignItems: 'center', justifyContent: 'center', color: 'red'}}>我是自定义内容！</div>
  }

  return (
    <CartBar top={customTopHtml()}>
      <CartBarIcon text="店铺" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车" type="danger" />
      <CartBarButton text="立即购买" type="warning" />
    </CartBar>
  );
};
export default App;
```

:::




## API


### CartBar Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| hasCapsuleButtons   | 是否包含胶囊型按钮                                 | Boolean  | `false`          |
| safeAreaInsetBottom   | 是否开启iphone系列全面屏底部安全区适配                                 | Boolean  | `true`          |
| placeholder   | 固定在底部时，是否在标签位置生成一个等高的占位元素                                 | Boolean  | `false`          |
| top | 自定义顶部内容 |React.ReactNode  | -          |


### CartBarIcon Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| text   | 图标文字                                 | String  | -         |
| icon   | 图标                                 | String  | -         |
| color   | 图标颜色                                 | String  | `#323233`         |
| dot   | 是否显示图标右上角小红点                                 | Boolean  | `false`         |
| badge   | 图标右上角徽标的内容	                                 | Number \| String  | -         |


## CartBarIcon Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  event: Event |



### CartBarButton Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| text   | 按钮文字                                 | String  | -         |
| disabled   | 是否禁用按钮                                 | Boolean  | `false`         |
| type   | 按钮类型，可选值为 `primary` `info` `warning` `danger`                                 | String  | `default`         |
| loading   | 是否显示为加载状态                                 | Boolean  | `false`         |
| color   | 图标颜色                                 | String  | -         |


## CartBarButton Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  event: Event |