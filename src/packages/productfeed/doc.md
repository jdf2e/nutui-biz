#  ProductFeed 商品 Feed 流

### 介绍

商品 Feed 流组件可配置下拉刷新、列表加载、上滑加载功能，适用于商品信息展示，常见于页面的底部。

### 安装
``` javascript
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
```

## 代码演示

### 多列

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
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
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
                <div className="label">自营</div>
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

### 单列

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
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
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
                <div className="label">自营</div>
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


### 下拉刷新

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
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
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
                <div className="label">自营</div>
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

| 字段         | 说明                           | 类型     | 默认值    |
|-------------|--------------------------------|---------|-----------|
| hasMore     | 是否还有更多数据                  | boolean | `true`    |
| containerId | 在 `useWindow` 属性为 `false` 的时候，自定义设置节点ID | string  | -    |
| useWindow   | 将滚动侦听器添加到 window 否则侦听组件的父节点  | boolean  | `true`  |
| loadMoreTxt | 上拉加载图标名称                  | string  | `哎呀，这里是底部了啦` |
| loadIcon    | 上拉加载 `Icon` 名称                  | string  | -    |
| loadTxt     | 上拉加载提示文案                  | string  | `加载中...` |
| isOpenRefresh | 是否开启下拉刷新                | boolean | `false` |
| pullIcon    | 下拉刷新 `Icon` 名称                  | string  | -    |
| pullTxt     | 下拉刷新提示文案                  | string  | `松手刷新` |

## Events
| 字段        | 说明            | 回调参数             |
|----------- | --------------- | -------------------|
| onLoadMore | 继续加载的回调函数 |  done 函数，用于关闭加载中状态 |
| onRefresh  | 下拉刷新事件回调   |  done 函数，用于关闭加载中状态 |

### ProductFeedItem Props

| 字段         | 说明                     | 类型              | 默认值  |
|-------------|--------------------------|------------------|--------|
| col         | 每行商品数量               | number \| string  | `2`    |
| gutter      | 每行商品之间的间距，默认单位 `px`| number \| string  | `6`    |
| imgUrl      | 商品图片Url                | string           | -     |
| imgWidth    | 商品图片宽度，默认单位 `px`  | string           | -     |
| imgHeight   | 商品图片高度，默认单位 `px`  | string           | `150` |
| imgTag      | 商品图片标签               | imgTag           | -      |
| isImageLazy | 是否开启商品图片懒加载          | boolean          | `true` |
| loadingImg  | 商品图片加载时的图片        | string           | -      |
| errorImg    | 商品图片错误时的图片        | string           | -      |

## ProductFeedItem Events
| 字段      | 说明      | 回调参数        |
|--------- | -------- | ---------------|
| onClick  | 点击时触发 | data |
| onImageClick  | 点击时触发 | data |