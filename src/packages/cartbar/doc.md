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
      <CartBarIcon text="店铺" iconProps={{name: 'shop'}} />
      <CartBarIcon text="购物车" iconProps={{name: 'cart'}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
      <CartBarIcon text="店铺" iconProps={{name: 'shop'}} badgeProps={{value: '10'}}  />
      <CartBarIcon text="购物车" iconProps={{name: 'cart'}} badgeProps={{dot: true}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
      <CartBarIcon text="店铺" iconProps={{name: 'shop', color: 'red'}} />
      <CartBarIcon text="购物车" iconProps={{name: 'cart'}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
      <CartBarIcon iconProps={{name: 'shop'}} />
      <CartBarIcon iconProps={{name: 'cart'}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
      <CartBarIcon text="店铺" iconProps={{name: 'shop'}} />
      <CartBarIcon text="购物车" iconProps={{name: 'cart'}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

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
      <CartBarIcon text="店铺" iconProps={{name: 'shop'}} />
      <CartBarIcon text="购物车" iconProps={{name: 'cart'}} />
      <CartBarButton text="加入购物车" buttonProps={{type: 'danger'}} />
      <CartBarButton text="立即购买" buttonProps={{type: 'warning'}} />
    </CartBar>
  );
};
export default App;

// css
[class*="safe-area-bottom"] {
    position: relative;
}

```

:::




## API


### CartBar Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| hasCapsuleButtons   | 是否包含胶囊型按钮                                 | boolean  | `false`          |
| safeAreaInsetBottom   | 是否开启iphone系列全面屏底部安全区适配                                 | boolean  | `true`          |
| placeholder   | 固定在底部时，是否在标签位置生成一个等高的占位元素                                 | boolean  | `false`          |
| top | 自定义顶部内容 |ReactNode  | -          |


### CartBarIcon Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| text   | 图标文字                                 | ReactNode  | -         |
| iconProps   | 图标 props                                 | [IconProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)  | -         |
| badgeProps   | 徽标 props                                 | [BadgeProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/badge)  | -         |


### CartBarIcon Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  - |



### CartBarButton Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| text   | 按钮文字                                 | ReactNode  | -         |
| buttonProps   | 按钮 props                                 | [ButtonProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/button)  | -         |


### CartBarButton Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  - |