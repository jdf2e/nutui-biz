#  Card 商品卡片

### 介紹

商品卡片，用於展示商品的圖片、價格等信息

### 安裝

```javascript
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';
```

## 代碼演示

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
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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

### 自定義商品標簽

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
          {['鮮活', '禮盒', '國產'].map((item) => {
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

### 價格後自定義標簽

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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

### 自定義店鋪介紹

:::demo
```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
      shopTagTpl={<div>自定義店鋪介紹</div>}
    />
  );
};
export default App;
```

:::

### 自定義右下角內容

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
      footerTpl={<div style={{ fontSize: '12px' }}>自定義</div>}
    />
  );
};
export default App;
```

:::

### 自定義底部內容

:::demo

```ts
import  React from 'react';
import { Price, Tag } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
      bottomTpl={<div style={{ fontSize: '12px' }}>自定義</div>}
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


| 字段    | 說明                                       | 類型    | 默認值    |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | 左側圖片Url                                 | String  | -         |
| title     | 標題                   | String  | -    |
| price | 商品價格                         | String  | -      |
| vipPrice     | 會員價格                               | String | -    |
| shopDesc  | 店鋪介紹                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shopName   | 店鋪名稱| String  | -      |
| prolistTpl   | 自定義商品介紹| React.ReactNode  | -      |
| priceTpl   | 价格自定义内容 | React.ReactNode  | -      |
| originTpl   | 價格後方自定義內容| React.ReactNode  | -      |
| shopTagTpl   | 店鋪介紹自定義| React.ReactNode  | -      |
| footerTpl   | 右下角內容自定義| React.ReactNode  | -      |
| showType   | 展示形式，可选：`full-line`、`half-line`| String  | `full-line`      |
| bottomTpl   | 底部内容自定义| React.ReactNode  | -      |
| infotpl   | 信息内容自定义| React.ReactNode  | -      |
| isNeedPrice   | 是否需要展示价格| Boolean  | `true`      |
| imgTag   | 商品图片标签，常用于标志双 11、直播等| String  | -      |
| imgTagDirection   | 商品图片标签呈现位置，可选：`top-left`、`top-right`| String  | `top-left`      |
| titleTag   | 标题左侧标签，常用于活动标记等，不设置此参数或此参数为空，不展示| React.ReactNode  | -      |
| titleLine   | 标题行数，默认两行，想展示更多下面内容可设置为 1| String \| Number  | `2`      |
| linkUrl   | 跳转链接，默认点击整个卡片以 href 的形式跳转，可通过点击事件自定义| String  | -      |

## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击时触发 |  event: MouseEvent |




