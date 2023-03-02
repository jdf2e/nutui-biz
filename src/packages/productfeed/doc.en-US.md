#  ProductFeed

### Intro

The product feed flow component can be configured with pull-down refresh, list loading, and sliding-up loading functions, which is suitable for product information display and is often found at the bottom of the page.

### Install
``` javascript
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
```

## Demo

### Multiple Columns

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const [list1, setList1] = useState([] as any)

  const [hasMore1, setHasMore1] = useState(true)

  const data = [
    {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    },
    // ...
  ]

  const loadMore1 = (done: () => void) => {
    setTimeout(() => {
      const curLen = list1.length
      if (list1.length >= data.length) {
        setHasMore1(false)
      } else {
        for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
          list1.push(data[i])
        }
        setList1([...list1]) 
      }
      done()
    }, 500)
  }

  const handleClick = () => {
    console.log("click")
  }

  const init1 = () => {
    for (let i = 0; i < 6; i++) {
      list1.push(data[i])
    }
    setList1([...list1])
  }

  useEffect(() => {
    init1()
  }, [])

  return (
    <ProductFeed
      className="demo1"
      id="refreshScroll1"
      hasMore={hasMore1}
      containerId="refreshScroll1"
      useWindow={false}
      onLoadMore={loadMore1}
    >
      {list1.map((item: any)=> {
        return (
          <ProductFeedItem
            key={item}
            gutter={6}
            col={2}
            imgUrl={item.imgUrl}
            imgHeight="164"
            imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
            onClick={handleClick}
          >
            <>
              <div className="name-box">
                <div className="label">Self</div>
                {item.name}
              </div>
              <div className="bottom">
                <div className="price-box">
                  <div className="price">
                    <Price price={item.price} />
                  </div>
                </div>
              </div>
            </>
          </ProductFeedItem>
        )
      })}
    </ProductFeed>
  );
};
export default App;
```

:::

### Single Columns

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const [list2, setList2] = useState([] as any)

  const [hasMore2, setHasMore2] = useState(true)

  const data = [
    {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    },
    // ...
  ]

  const loadMore2 = (done: () => void) => {
    setTimeout(() => {
      const curLen = list2.length
      if (list2.length >= data.length) {
        setHasMore2(false)
      } else {
        for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
          list2.push(data[i])
        }
        setList2([...list2]) 
      }
      done()
    }, 500)
  }

  const handleClick = () => {
    console.log("click")
  }

  const init2 = () => {
    for (let i = 0; i < 6; i++) {
      list2.push(data[i])
    }
    setList2([...list2])
  }

  useEffect(() => {
    init2()
  }, [])

  return (
    <ProductFeed
      className="demo2"
      id="refreshScroll2"
      hasMore={hasMore2}
      containerId="refreshScroll2"
      useWindow={false}
      onLoadMore={loadMore2}
    >
      {list2.map((item: any)=> {
        return (
          <ProductFeedItem
            key={item}
            gutter={6}
            col={1}
            imgUrl={item.imgUrl}
            imgHeight="120"
            imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
            onClick={handleClick}
          >
            <>
              <div className="name-box">
                <div className="label">Self</div>
                {item.name}
              </div>
              <div className="bottom">
                <div className="price-box">
                  <div className="price">
                    <Price price={item.price} />
                  </div>
                </div>
              </div>
            </>
          </ProductFeedItem>
        )
      })}
    </ProductFeed>
  );
};
export default App;
```

:::


### Pull down to refresh

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const [list3, setList3] = useState([] as any)

  const [hasMore3, setHasMore3] = useState(true)

  const data = [
    {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    },
    // ...
  ]

  const loadMore3 = (done: () => void) => {
    setTimeout(() => {
      const curLen = list3.length
      if (list3.length >= data.length) {
        setHasMore3(false)
      } else {
        for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
          list3.push(data[i])
        }
        setList3([...list3]) 
      }
      done()
    }, 500)
  }

  const handleClick = () => {
    console.log("click")
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      console.log("refresh")
      done()
    }, 1000)
  }

  const init3 = () => {
    for (let i = 0; i < 6; i++) {
      list3.push(data[i])
    }
    setList3([...list3])
  }

  useEffect(() => {
    init3()
  }, [])

  return (
    <ProductFeed
      className="demo3"
      id="refreshScroll3"
      hasMore={hasMore3}
      containerId="refreshScroll3"
      useWindow={false}
      isOpenRefresh={true}
      onLoadMore={loadMore3}
      onRefresh={refresh}
    >
      {list3.map((item: any)=> {
        return (
          <ProductFeedItem
            key={item}
            gutter={6}
            col={2}
            imgUrl={item.imgUrl}
            imgHeight="164"
            imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
            onClick={handleClick}
          >
            <>
              <div className="name-box">
                <div className="label">Self</div>
                {item.name}
              </div>
              <div className="bottom">
                <div className="price-box">
                  <div className="price">
                    <Price price={item.price} />
                  </div>
                </div>
              </div>
            </>
          </ProductFeedItem>
        )
      })}
    </ProductFeed>
  );
};
export default App;
```

:::




## API

### Props

| Event  | Description     | Type    |
|---------|--------------------------------------------|---------|
| hasMore     | Has more data                  | boolean | `true`    |
| containerId | When the `useWindow` property is `false`, custom set the node ID | string  | -    |
| useWindow   | Add scroll listener to window otherwise listen to component"s parent  | boolean  | `true`  |
| loadMoreTxt | “No more” text              | string  | `Oops, this is the bottom` |
| loadIcon    | Pull on loading `Icon` name         | string  | -    |
| loadTxt     | Pull on loading text         | string  | `Loading...` |
| isOpenRefresh | Enable pull refresh             | boolean | `false` |
| pullIcon    | Pull refresh `Icon` name           | string  | -    |
| pullTxt     | Pull refresh text              | string  | `Loose to refresh` |

### Events
| Attribute            | Description               | Arguments   |
|----- | ----- | -----  |
|----------- | --------------- | -------------------|
| onLoadMore | Emitted when continues to load |  done() |
| onRefresh  | Emitted when pull refresh      |  done() |

### ProductFeedItem Props

| Event  | Description     | Type    |
|---------|--------------------------------------------|---------|
| col         | Quantity of items per row               | number \| string  | `2`    |
| gutter      | The spacing between items in each row, the default unit is `px` | number \| string  | `6`    |
| imgUrl      | Product Image Url                | string           | -     |
| imgWidth    | Product image width, default unit `px`  | string           | -     |
| imgHeight   | Product image height, default unit `px`  | string           | `150` |
| imgTag      | Product image tag               | string           | -      |
| isImageLazy | Whether to enable product lazy loading          | boolean          | `true` |
| loadingImg  | Image when product image loads        | string           | -      |
| errorImg    | Image when product image is wrong        | string           | -      |

### ProductFeedItem Events
| Attribute            | Description               | Arguments   |
|----- | ----- | -----  |
|--------- | -------- | ---------------|
| onClick  | fires on click | data |
| onImageClick  | 点击时触发 |  data |