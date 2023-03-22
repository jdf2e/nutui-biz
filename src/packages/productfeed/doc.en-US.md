#  ProductFeed

### Intro

The product feed flow component can be configured with pull-down refresh, list loading, and sliding-up loading functions, which is suitable for product information display and is often found at the bottom of the page.

### Install
``` javascript
import { ProductFeed } from "@nutui/nutui-biz";
```

## Demo

### Double Columns

Product data is passed through `data`, and the content of the area below the product image is passed through `customProduct`.

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"
import "@nutui/nutui-biz/dist/styles/demo.scss";

const App = () => {

  const [data, setData] = useState<dataType[]>([])
  const [listDouble, setListDouble] = useState([] as any)
  const [hasMoreDouble, setHasMoreDouble] = useState(true)

  useEffect(() => {
    initData()
  }, [])

  const init = () => {
    for (let i = 0; i < 6; i++) {
      listDouble.push(data[i])
    }
    setListDouble([...listDouble])
  }

  const initData = () => {
    for(var i = 0; i < 12; i++) {
      data.push({
        id: i + 1,
        imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
        name: "我是标题我是标题我是标题我是标题我是标题",
        desc: "更多买点更多买点",
        tag: i == 3 && '标签标签',
        price: "388",
        label: "自营",
      })
    }
    init()
  }

  const loadMore = (list: any) => {
    const curLen = list.length
    
    if (list.length >= data.length) {
       setHasMoreDouble(false);
    } else {
      for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
        list.push(data[i])
      }
      setListDouble([...list]) 
    }
  }

  const loadMoreDouble = (done: () => void) => {
    setTimeout(() => {
      loadMore(listDouble)
      done()
    }, 500)
  }

  const handleClick = (item: object, index: number) => {
    console.log("click", item, index)
  }

  const handleImageClick = (item: object, index: number) => {
    console.log("click image", item, index)
  }

  const customProductDouble = (item: any) => {
    return (
      <>
        <div className="name-box">{item.name}</div>
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
    )
  }


  return (
    <div className="demo product-feed-demo">
      <ProductFeed
        infiniteloadingProps={{
          hasMore: hasMoreDouble,
          onLoadMore: loadMoreDouble
        }}
        customProduct={customProductDouble}
        data={listDouble}
        col={2}
        imgUrl="imgUrl"
        imgWidth="144"
        imgHeight="144"
        imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
        onClick={handleClick}
        onImageClick={handleImageClick}
      />
    </div>
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
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"
import "@nutui/nutui-biz/dist/styles/demo.scss";

const App = () => {

  const [data, setData] = useState<dataType[]>([])
  const [listSingle, setListSingle] = useState([] as any)
  const [hasMoreSingle, setHasMoreSingle] = useState(true)

  useEffect(() => {
    initData()
  }, [])

  const init = () => {
    for (let i = 0; i < 6; i++) {
      listSingle.push(data[i])
    }
    setListSingle([...listSingle])
  }

  const initData = () => {
    for(var i = 0; i < 12; i++) {
      data.push({
        id: i + 1,
        imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
        name: "我是标题我是标题我是标题我是标题我是标题",
        desc: "更多买点更多买点",
        tag: i == 3 && '标签标签',
        price: "388",
        label: "自营",
      })
    }
    init()
  }

  const loadMore = (list: any) => {
    const curLen = list.length
    
    if (list.length >= data.length) {
      setHasMoreSingle(false);
    } else {
      for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
        list.push(data[i])
      }
      setListSingle([...list]) 
    }
  }

  const loadMoreSingle = (done: () => void) => {
    setTimeout(() => {
      loadMore(listSingle)
      done()
    }, 500)
  }

  const handleClick = (item: object, index: number) => {
    console.log("click", item, index)
  }

  const handleImageClick = (item: object, index: number) => {
    console.log("click image", item, index)
  }


  const customProductSingle = (item: any) => {
    return (
      <>
        <div className="name-box">
          <div className="label">{item.label}</div>
          {item.name}
        </div>
        <div className="name-box desc-box">
          {item.desc}
        </div>
        <div className="bottom">
          <div className="price-box">
            <div className="price">
              <Price price={item.price} />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="demo product-feed-demo">
      <ProductFeed
        className="product-feed-demo2"
        data={listSingle}
        infiniteloadingProps={{
          hasMore: hasMoreSingle,
          onLoadMore: loadMoreSingle
        }}
        customProduct={customProductSingle}
        col={1}
        imgUrl="imgUrl"
        imgWidth="100"
        imgHeight="100"
        imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
        onClick={handleClick}
        onImageClick={handleImageClick}
      />
    </div>
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
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"
import "@nutui/nutui-biz/dist/styles/demo.scss";

const App = () => {

  const [data, setData] = useState<dataType[]>([])
  const [list3, setList3] = useState([] as any)
  const [hasMore3, setHasMore3] = useState(true)

  useEffect(() => {
    initData()
  }, [])

  const init = () => {
    for (let i = 0; i < 6; i++) {
      list3.push(data[i])
    }
    setList3([...list3])
  }

  const initData = () => {
    for(var i = 0; i < 12; i++) {
      data.push({
        id: i + 1,
        imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
        name: "我是标题我是标题我是标题我是标题我是标题",
        desc: "更多买点更多买点",
        tag: i == 3 && '标签标签',
        price: "388",
        label: "自营",
      })
    }
    init()
  }

  const loadMore = (list: any) => {
    const curLen = list.length
    
    if (list.length >= data.length) {
      setHasMore3(false);
    } else {
      for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
        list.push(data[i])
      }
      setList3([...list]) 
    }
  }

  const loadMore3 = (done: () => void) => {
    setTimeout(() => {
      loadMore(list3)
      done()
    }, 500)
  }

  const handleClick = (item: object, index: number) => {
    console.log("click", item, index)
  }

  const handleImageClick = (item: object, index: number) => {
    console.log("click image", item, index)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      console.log("refresh")
      done()
    }, 1000)
  }

  const customProductDouble = (item: any) => {
    return (
      <>
        <div className="name-box">{item.name}</div>
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
    )
  }

  return (
    <div className="demo product-feed-demo">
      <ProductFeed
          data={list3}
          infiniteloadingProps={{
            hasMore: hasMore3,
            isOpenRefresh: true,
            onLoadMore: loadMore3,
            onRefresh: refresh
          }}
          customProduct={customProductDouble}
          col={2}
          imgUrl="imgUrl"
          imgWidth="144"
          imgHeight="144"
          imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
          onClick={handleClick}
          onImageClick={handleImageClick}
        />
    </div>
  );
};
export default App;
```

:::




## API

### Props

| Event  | Description     | Type    |
|---------|--------------------------------------------|---------|
| data        | Item data                  | Array     | -  |
| itemKey     | 
Commodity cycle key-value segment | string   | `id`   |
| customProduct | The content of the area below the product image    | (item) => ReactNode | - |
| openInfiniteloading| Whether to enable the pull-down download function       | boolean | `true`    |
| infiniteloadingProps | [infiniteloading 组件的 props](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/infiniteloading)    | InfiniteloadingProps | - |
| initProductNum | 初始展示商品个数               | number | `6`    |
| col         | Quantity of items per row, eg `1`、 `2` | number \| string  | `2`    |
| padding     | Product Inside Margin, default Unit ` px`   | number \| string  | `10px`  |
| borderRadius | Item Fillet, default Unit ` px`       | number \| string  | `8px`  |
| imgUrl      | Product image url                      | string           | -     |
| imgWidth    | Product image width, default unit `px` | string           | `150px` |
| imgHeight   | Product image height, default unit `px`| string           | `150px` |
| imgTag      | Product image tag                      | ReactNode           | -      |
| isImageLazy | Whether to enable product lazy loading | boolean          | `true` |
| loadingImg  | Image when product image loads         | string           | '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'  |
| errorImg    | Image when product image is wrong      | string           | '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'  |

### Events
| Attribute            | Description               | Arguments   |
|----- | ----- | -----  |
|----------- | --------------- | -------------------|
| onLoadMore | Emitted when continues to load |  done() |
| onRefresh  | Emitted when pull refresh      |  done() |
| onScrollChange  | Real-time monitoring of roll height   |  height |
| onClick  | Triggered when an item is clicked | item, index |
| onImageClick  | Triggered when clicking the picture |  item, index |
