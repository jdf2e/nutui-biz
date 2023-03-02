#  ProductFeed

### Intro

The product feed flow component can be configured with pull-down refresh, list loading, and sliding-up loading functions, which is suitable for product information display and is often found at the bottom of the page.

### Install
``` javascript
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
```

## Demo

### Biserial Columns

When each line of goods has two columns, the goods data needs to be divided into two columns, which are transferred from 'leftproduct' and 'rightproduct'.

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const  [listLeft1, setListLeft1] = useState([] as any)
  const  [listRight1, setListRight1] = useState([] as any)

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
      const curLen1 = listLeft1.length
      const curLen2 = listRight1.length
      if (listLeft1.length >= data.length/2 && listRight1.length >= data.length/2) {
        setHasMore1(false)
      } else {
        for (let i = curLen1 + curLen2; i < (curLen1 + curLen2 + 6 > data.length ? data.length : curLen1 + curLen2 + 6) ; i++) {
          i % 2 == 0 ? listLeft1.push(data[i]) : listRight1.push(data[i])
        }
        setListLeft1(listLeft1)
        setListRight1(listRight1)
      }
      done()
    }, 500)
  }

  const handleClick = () => {
    console.log("click")
  }

  const handleImageClick = (item: object) => {
    console.log("click image", item)
  }

  const productItem = (item: any)=>{
    return (
      <ProductFeedItem
        key={item.id}
        data={item}
        col={2}
        imgUrl={item.imgUrl}
        imgWidth="144"
        imgHeight="144"
        imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
        onClick={handleClick}
        onImageClick={handleImageClick}
      >
        <>
          <div className="name-box">
            {item.id}{item.name}
          </div>
          {item.tag && <div className="name-box">
            {item.tag}
          </div>}
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
  }

  const leftProduct1 = () => {
    return (
      listLeft1.map((item: any)=> {
        return (
          productItem(item)
        )
      })
    )
  }
  const rightProduct1 = () => {
    return (
      listRight1.map((item: any)=> {
        return (
          productItem(item)
        )
      })
    )
  }

  const init1 = () => {
    for (let i = 0; i < 6; i++) {
      i % 2 == 0 ? listLeft1.push(data[i]) : listRight1.push(data[i])
    }
    setListLeft1([...listLeft1])
    setListRight1([...listRight1])
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
      leftproduct={leftProduct}
      rightproduct={rightProduct}
    />
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
      id: '1',
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    }, {
      id: '2',
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

  const handleImageClick = (item: object) => {
    console.log("click image", item)
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
            key={item.id}
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

`IsOpenRefresh ` can enable the pull-down refresh function
:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const  [listLeft3, setListLeft3] = useState([] as any)
  const  [listRight3, setListRight3] = useState([] as any)

  const [hasMore3, setHasMore3] = useState(true)

  const data = [
    {
      id: '1',
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      price: "388",
      vipPrice: "378",
    }, {
      id: '2',
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
      const curLen1 = listLeft3.length
      const curLen2 = listRight3.length
      if (listLeft3.length >= data.length/2 && listRight3.length >= data.length/2) {
        setHasMore1(false)
      } else {
        for (let i = curLen1 + curLen2; i < (curLen1 + curLen2 + 6 > data.length ? data.length : curLen1 + curLen2 + 6) ; i++) {
          i % 2 == 0 ? listLeft3.push(data[i]) : listRight3.push(data[i])
        }
        setListLeft3(listLeft3)
        setListRight3(listRight3)
      }
      done()
    }, 500)
  }

  const handleClick = () => {
    console.log("click")
  }

  const handleImageClick = (item: object) => {
    console.log("click image", item)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      console.log("refresh")
      done()
    }, 1000)
  }

  const init3 = () => {
    for (let i = 0; i < 6; i++) {
      i % 2 == 0 ? listLeft3.push(data[i]) : listRight3.push(data[i])
    }
    setListLeft3([...listLeft3])
    setListRight3([...listRight3])
  }

  const productItem = (item: any)=>{
    return (
      <ProductFeedItem
        key={item.id}
        data={item}
        col={2}
        imgUrl={item.imgUrl}
        imgWidth="144"
        imgHeight="144"
        imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
        onClick={handleClick}
        onImageClick={handleImageClick}
      >
        <>
          <div className="name-box">
            {item.id}{item.name}
          </div>
          {item.tag && <div className="name-box">
            {item.tag}
          </div>}
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
  }

  const leftProduct3 = () => {
    return (
      listLeft3.map((item: any)=> {
        return (
          productItem(item)
        )
      })
    )
  }
  const rightProduct3 = () => {
    return (
      listRight3.map((item: any)=> {
        return (
          productItem(item)
        )
      })
    )
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
      leftproduct={leftProduct3}
      rightproduct={rightProduct3}
    />
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
| onImageClick  | Triggered when clicking the picture |  data |