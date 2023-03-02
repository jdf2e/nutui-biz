#  ProductFeed 商品 Feed 流

### 介绍

商品 Feed 流组件可配置下拉刷新、列表加载、上滑加载功能，适用于商品信息展示，常见于页面的底部。

### 安装
``` javascript
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
```

## 代码演示

### 双列

当商品是双列时，需要将商品数据分为左右两列，分别从 `leftProduct`、`rightProduct` 传递。

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
      id: '1',
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      id: '2',
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
      leftProduct={leftProduct}
      rightProduct={rightProduct}
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
import { ProductFeed, ProductFeedItem } from "@nutui/nutui-biz";
import React, { useEffect, useState } from "react"

const App = () => {

  const [list2, setList2] = useState([] as any)

  const [hasMore2, setHasMore2] = useState(true)

  const data = [
    {
      id: '1',
      imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      id: '2',
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
            data={item}
            col={1}
            imgUrl={item.imgUrl}
            imgHeight="120"
            imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
            onClick={handleClick}
            onImageClick={handleImageClick}
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

`isOpenRefresh` 可开启下拉刷新功能

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
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      vipPrice: "378",
    }, {
      id: '2',
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
      leftProduct={leftProduct3}
      rightProduct={rightProduct3}
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
| leftProduct | 当商品是双列时，商品左列的信息      | () => ReactNode | - |
| rightProduct| 当商品是双列时，商品右列的信息      | () => ReactNode | - |
| hasMore     | 是否还有更多数据                  | boolean | `true`    |
| containerId | 在 `useWindow` 属性为 `false` 的时候，自定义设置节点ID | string  | -    |
| useWindow   | 将滚动侦听器添加到 window 否则侦听组件的父节点  | boolean  | `true`  |
| loadMoreTxt | 上拉加载图标名称                  | string  | `哎呀，这里是底部了啦` |
| loadIcon    | 上拉加载 `Icon` 名称                  | string  | -    |
| loadTxt     | 上拉加载提示文案                  | string  | `加载中...` |
| isOpenRefresh | 是否开启下拉刷新                | boolean | `false` |
| pullIcon    | 下拉刷新 `Icon` 名称                  | string  | -    |
| pullTxt     | 下拉刷新提示文案                  | string  | `松手刷新` |

### Events
| 字段        | 说明            | 回调参数             |
|----------- | --------------- | -------------------|
| onLoadMore | 继续加载的回调函数 |  done 函数，用于关闭加载中状态 |
| onRefresh  | 下拉刷新事件回调   |  done 函数，用于关闭加载中状态 |

### ProductFeedItem Props

| 字段         | 说明                     | 类型              | 默认值  |
|-------------|--------------------------|------------------|--------|
| data        | 商品数据                  | Array    | -  |
| col         | 每行商品数量               | number \| string | `2`    |
| padding     | 商品内边距，默认单位 `px`   | number \| string  | `10px`  |
| borderRadius | 商品圆角，默认单位 `px`    | number \| string  | `8px`  |
| imgUrl      | 商品图片Url                | string           | -     |
| imgWidth    | 商品图片宽度，默认单位 `px`  | string           | -     |
| imgHeight   | 商品图片高度，默认单位 `px`  | string           | `150px` |
| imgTag      | 商品图片标签               | imgTag           | -      |
| isImageLazy | 是否开启商品图片懒加载       | boolean         | `true` |
| loadingImg  | 商品图片加载时的图片        | string           | -      |
| errorImg    | 商品图片错误时的图片        | string           | -      |

### ProductFeedItem Events
| 字段      | 说明      | 回调参数        |
|--------- | -------- | ---------------|
| onClick  | 点击时触发 | data |
| onImageClick  | 点击商品图片时触发 | data |