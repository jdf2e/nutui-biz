#  Card 

### Intro

Used to display product pictures, prices and other information.

### Install

```javascript
import { Card } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts
import  React from 'react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      marketingType={state.marketingType}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
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
      marketingType={state.marketingType}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
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
      marketingType={state.marketingType}
      delivery={state.delivery}
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

### Custom Content

:::demo
```ts
import  React from 'react';
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      marketingType={state.marketingType}
      delivery={state.delivery}
      shopName={state.shopName}
      productTagsTpl={<div>Custom Content</div>}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      marketingType={state.marketingType}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  
  return (
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      marketingType={state.marketingType}
      delivery={state.delivery}
      shopName={state.shopName}
      bottomTpl={<div style={{ fontSize: '12px', paddingBottom: '15px', textAlign: 'center' }}>Customize promotional information, etc.</div>}
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
import { Card } from '@nutui/nutui-biz';

const App = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    marketingType: 'marketingType',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  
  return (
    <>
      <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        marketingType={state.marketingType}
        delivery={state.delivery}
        shopName={state.shopName}
        showType="half-line"
      />
      <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        marketingType={state.marketingType}
        delivery={state.delivery}
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


| Attribute            | Description               | Type   | Default  |
|---------|--------------------------------------------|---------|-----------|
| imageProps   | Image props                                  | [ImageProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/image)  | {isLazy: false, errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'}         |
| title     | Title                   | string  | -    |
| price | Price                         | ReactNode  | -      |
| priceAfterTpl   | Custom content behind the price| ReactNode  | -      |
| shopName   | shop-name| string  | -      |
| prolistTpl   | Custom product introduction, between title and price| ReactNode  | -      |
| productTagsTpl   | Custom product tags| ReactNode  | -      |
| footerTpl   | Customize bottom right content| ReactNode  | -      |
| showType   | Display format, optional value: `full-line`、`half-line`| string  | `full-line`      |
| bottomTpl   | Customize bottom content| ReactNode  | -      |
| infotpl   | Customize info content| ReactNode  | -      |
| isNeedPrice   | Whether price display is required| boolean  | `true`      |
| imgTag   | Product image label, often used to mark Double 11, live broadcast, etc | string  | -      |
| imgTagDirection   | Display position of product image label, optional value: `top-left`、`top-right`| string  | `top-left`      |
| titleTag   | The label on the left side of the title, often used for activity tags, etc. If this parameter is not set or this parameter is empty, it will not be displayed| ReactNode  | -      |
| titleLine   | The number of title lines, the default is two lines, if you want to display more content below, you can set it to 1| string \| number  | `2`      |

### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | Click event |  - |
| onClickShop | Click shop event |  - |




