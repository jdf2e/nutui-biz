#  Card 商品卡片

### 介绍

常见于首页、搜索页，用于展示单个商品信息，包括商品图片、商品价格等。

### 安装

```javascript
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
    />
  );
};
export default App;
```

:::

### 自定义商品标签

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const wordStyles = {
    padding: '0 5px',
    borderRadius: '1px',
    fontSize: '10px',
    height: '15px',
    lineHeight: '15px',
    color: '#999',
    backgroundColor: '#f2f2f7',
    marginRight: '5px',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      prolistTpl={
        <div
          className="search_prolist_attr"
          style={{ display: 'inline-flex', margin: '3px 0 1px', height: '15px' }}
        >
          {['鲜活', '礼盒', '国产'].map((item) => {
            return (
              <span style={wordStyles} className="word" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      }
    />
  );
};
export default App;

```

:::

### 价格后自定义标签

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const tagStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '5px',
    marginLeft: '2px',
    height: '14px',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      originTpl={
        <img
          style={tagStyles}
          src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
          alt=""
        />
      }
    />
  );
};
export default App;
```

:::

### 自定义店铺介绍

:::demo
```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      shopTagTpl={<div>自定义店铺介绍</div>}
    />
  );
};
export default App;
```

:::

### 自定义右下角内容

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      footerTpl={<div style={{ fontSize: '12px' }}>自定义</div>}
    />
  );
};
export default App;
```

:::


### 自定义底部内容

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      bottomTpl={<div style={{ fontSize: '12px' }}>自定义</div>}
    />
  );
};
export default App;
```

:::



### 半行模式

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      showType="half-line"
      style={{width: '172px'}}
    />
  );
};
export default App;
```

:::

## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | 左侧图片Url                                 | String  | -         |
| title     | 标题                   | String  | -    |
| price | 商品价格                         | String  | -      |
| vipPrice     | 会员价格                               | String | -    |
| shopDesc  | 店铺介绍                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shopName   | 店铺名称| String  | -      |
| prolistTpl   | 自定义商品介绍| React.ReactNode  | -      |
| priceTpl   | 价格自定义内容 | React.ReactNode  | -      |
| originTpl   | 价格后方自定义内容| React.ReactNode  | -      |
| shopTagTpl   | 店铺介绍自定义| React.ReactNode  | -      |
| footerTpl   | 右下角内容自定义| React.ReactNode  | -      |
| showType   | 展示形式，可选：`full-line`、`half-line`| String  | `full-line`      |
| bottomTpl   | 底部内容自定义| React.ReactNode  | -      |
| infotpl   | 信息内容自定义| React.ReactNode  | -      |
| isNeedPrice   | 是否需要价格展示| Boolean  | `true`      |
| imgTag   | 商品图片标签，常用于标志双 11、直播等| String  | -      |
| imgTagDirection   | 商品图片标签呈现位置，可选：`top-left`、`top-right`| String  | `top-left`      |
| isLazy   | 是否为懒加载图片| Boolean  | `false`      |
| titleTag   | 标题左侧标签，常用于活动标记等，不设置此参数或此参数为空，不展示| React.ReactNode  | -      |
| titleLine   | 标题行数，默认两行，想展示更多下面内容可设置为 1| String \| Number  | `2`      |
| linkUrl   | 跳转链接，默认点击整个卡片以 href 的形式跳转，可通过点击事件自定义 | String  | -      |
| width   | 宽度，默认单位`px` | String  | -      |
| height   | 高度，默认单位`px` | String  | -      |
| loadingImg   | 设置加载中提示图片，与slotLoding冲突，优先级高于slotLoding | String  | -      |
| errorImg   | 设置错误提示图片，与slotError冲突，优先级高于slotError | String  | -      |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  event: MouseEvent |
