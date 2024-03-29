#  Card 商品卡片

### 介绍

常见于首页、搜索页，用于展示单个商品信息，包括商品图片、商品价格等。

### 安装

```javascript
import { Card } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
  }
  return (
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
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
    marginTop: '3px',
    flexShrink: 0,
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
  return (
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      prolistTpl={
        <div
          className="search_prolist_attr"
          style={{
            display: 'inline-flex',
            marginBottom: '1px',
            flexWrap: 'wrap',
            width: '100%'
          }}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
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
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      priceAfterTpl={
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
  }
  return (
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      productTagsTpl={<div>自定义店铺介绍</div>}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
  }
  
  return (
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      bottomTpl={<div style={{ fontSize: '12px', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>自定义促销信息等</div>}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店',
  }
  
  return (
    <>
      <Card
        imageProps={{src: state.imgUrl}}
        title={state.title}
        price={state.price}
        shopName={state.shopName}
        showType="half-line"
      />
      <Card
        imageProps={{src: state.imgUrl}}
        title={state.title}
        price={state.price}
        shopName={state.shopName}
        showType="half-line"
      />
    </>
  );
};
export default App;
```

:::

## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| imageProps   | 图片基础组件 props                                 | [ImageProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/image)  | {isLazy: false, errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'}         |
| title     | 标题                   | string  | -    |
| price | 商品价格                         | ReactNode  | -      |
| priceAfterTpl   | 价格后方自定义内容| ReactNode  | -      |
| shopName   | 店铺名称| string  | -      |
| prolistTpl   | 自定义商品介绍，位于标题和价格中间 | ReactNode  | -      |
| productTagsTpl   | 商品标签自定义| ReactNode  | -      |
| showType   | 展示形式，可选：`full-line`、`half-line`| string  | `full-line`      |
| bottomTpl   | 底部内容自定义| ReactNode  | -      |
| infotpl   | 信息内容自定义| ReactNode  | -      |
| isNeedPrice   | 是否需要价格展示| boolean  | `true`      |
| imgTag   | 商品图片标签，常用于标志双 11、直播等| string  | -      |
| imgTagDirection   | 商品图片标签呈现位置，可选：`top-left`、`top-right`| string  | `top-left`      |
| titleTag   | 标题左侧标签，常用于活动标记等，不设置此参数或此参数为空，不展示| ReactNode  | -      |
| titleLine   | 标题行数，默认两行，想展示更多下面内容可设置为 1| string \| number  | `2`      |


### Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 | - |
| onClickShop | 点击店铺事件 | - |
