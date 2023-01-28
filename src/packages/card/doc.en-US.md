#  Card 

### Intro

Used to display product pictures, prices and other information.

### Install

```javascript
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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

### Custom prolist

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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
          {['tag', 'tag', 'tag'].map((item) => {
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

### Price after custom tag

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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

### Custom Content

:::demo
```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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
      shopTagTpl={<div>Custom Content</div>}
    />
  );
};
export default App;
```

:::

### Customize bottom right content

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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
      footerTpl={<div style={{ fontSize: '12px' }}>custom</div>}
    />
  );
};
export default App;
```

:::


### Customize bottom content

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
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
      bottomTpl={<div style={{ fontSize: '12px' }}>custom</div>}
    />
  );
};
export default App;
```

:::

### Half-line show type

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


| Attribute            | Description               | Type   | Default  |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | Left thumb image                                  | String  | -         |
| title     | Title                   | String  | -    |
| price | Price                         | String  | -      |
| vipPrice     | vip-price                               | String | -    |
| shopDesc  | shop-desc                                   | String | -    |
| delivery     | delivery | String  | -      |
| shopName   | shop-name| String  | -      |
| prolistTpl   | Custom product introduction| React.ReactNode  | -      |
| originTpl   | Custom content behind the price| React.ReactNode  | -      |
| shopTagTpl   | Custom shop introduction| React.ReactNode  | -      |
| footerTpl   | Customize bottom right content| React.ReactNode  | -      |
| showType   | 展示形式，可选：`full-line`、`half-line`| String  | `full-line`      |
| bottomTpl   | 底部内容自定义| React.ReactNode  | -      |
| isNeedPrice   | 是否需要展示价格| Boolean  | `true`      |
| imgTag   | 标题左侧标签，常用于活动标记等，不设置此参数或此参数为空，不展示| String  | -      |
| imgTagDirection   | 商品图片标签呈现位置，可选：top-left、top-right| String  | `top-left`      |
| titleTag   | 底部内容自定义| React.ReactNode  | -      |
| titleLine   | 标题行数，默认两行，想展示更多下面内容可设置为1| String \| Number  | '2'      |
| linkUrl   | 跳转链接，默认点击整个卡片以href的形式跳转，可通过点击事件自定义| String  | -      |

## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击时触发 |  event: MouseEvent |




