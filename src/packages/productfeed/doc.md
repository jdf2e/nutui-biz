#  ProductFeed 商品 Feed 流

### 介绍

商品 Feed 流组件可配置下拉刷新、列表加载、上滑加载功能，适用于商品信息展示，常见于页面的底部。

### 安装
``` javascript
import { ProductFeed } from "@nutui/nutui-biz";
```

## 代码演示

### 双列

商品数据通过 `data` 传入，商品图片下方区域内容用 `customProduct` 传递。

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

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
    <ProductFeed
      className="demo1"
      id="refreshScrollDouble"
      infiniteloadingProps={{
        hasMore: hasMoreDouble,
        containerId: "refreshScrollDouble",
        useWindow: false,
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
  );
};
export default App;
```

:::

### 单列

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

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
    <ProductFeed
      className="demo2"
      id="refreshScroll2"
      data={listSingle}
      infiniteloadingProps={{
        hasMore: hasMoreSingle,
        containerId: "refreshScroll2",
        useWindow: false,
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
    >
    </ProductFeed>
  );
};
export default App;
```

:::


### 下拉刷新

`isOpenRefresh` 可开启下拉刷新功能

:::demo

```ts
import  React from "react";
import { Price } from "@nutui/nutui-react";
import { ProductFeed } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

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
   <ProductFeed
      className="demo3"
      id="refreshScroll3"
      data={list3}
      infiniteloadingProps={{
        hasMore: hasMore3,
        containerId: "refreshScroll3",
        useWindow: false,
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
  );
};
export default App;
```

:::




## API

### Props

| 字段         | 说明                           | 类型     | 默认值    |
|-------------|--------------------------------|---------|-----------|
| data        | 商品数据                        | Array   | -         |
| customProduct | 商品图片下方区域内容            | (item) => ReactNode | - |
| openInfiniteloading| 是否开启下拉下载功能       | boolean | `true`    |
| infiniteloadingProps       | [infiniteloading 组件的 props](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/infiniteloading)    | InfiniteloadingProps | - |
| initProductNum | 初始展示商品个数               | number | `6`    |
| col         | 每行商品数量，可选值有 `1`、 `2`| number \| string | `2`    |
| padding     | 商品内边距，默认单位 `px`   | number \| string  | `10px`  |
| borderRadius | 商品圆角，默认单位 `px`    | number \| string  | `8px`  |
| imgUrl      | 商品图片Url                | string           | -     |
| imgWidth    | 商品图片宽度，默认单位 `px`  | string           | `150px` |
| imgHeight   | 商品图片高度，默认单位 `px`  | string           | `150px` |
| imgTag      | 商品图片标签               | ReactNode        | -      |
| isImageLazy | 是否开启商品图片懒加载       | boolean         | `true` |
| loadingImg  | 商品图片加载时的图片        | string           | '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png' |
| errorImg    | 商品图片错误时的图片        | string           | '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'  |

### Events
| 字段        | 说明            | 回调参数             |
|----------- | --------------- | -------------------|
| onLoadMore | 继续加载的回调函数 |  done 函数，用于关闭加载中状态 |
| onRefresh  | 下拉刷新事件回调   |  done 函数，用于关闭加载中状态 |
| onScrollChange  | 实时监听滚动高度   |  滚动高度 |
| onClick  | 点击商品时触发 | item, index |
| onImageClick  | 点击商品图片时触发 | item, index |
