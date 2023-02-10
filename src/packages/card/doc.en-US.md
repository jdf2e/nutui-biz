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
| priceTpl   | Custom price | React.ReactNode  | -      |
| originTpl   | Custom content behind the price| React.ReactNode  | -      |
| shopTagTpl   | Custom shop introduction| React.ReactNode  | -      |
| footerTpl   | Customize bottom right content| React.ReactNode  | -      |
| showType   | Display format, optional value: `full-line`、`half-line`| String  | `full-line`      |
| bottomTpl   | Customize bottom content| React.ReactNode  | -      |
| infotpl   | Customize info content| React.ReactNode  | -      |
| isNeedPrice   | Whether price display is required| Boolean  | `true`      |
| imgTag   | Product image label, often used to mark Double 11, live broadcast, etc | String  | -      |
| isLazy   | Whether to show image lazyload| Boolean  | `false`      |
| imgTagDirection   | Display position of product image label, optional value: `top-left`、`top-right`| String  | `top-left`      |
| titleTag   | The label on the left side of the title, often used for activity tags, etc. If this parameter is not set or this parameter is empty, it will not be displayed| React.ReactNode  | -      |
| titleLine   | The number of title lines, the default is two lines, if you want to display more content below, you can set it to 1| String \| Number  | `2`      |
| linkUrl   | Jump link, click on the whole card by default to jump in the form of href, can be customized through click event| String  | -      |

## Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | Click event |  event: MouseEvent |




