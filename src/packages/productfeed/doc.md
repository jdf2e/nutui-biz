#  ProductFeed 商品 Feed 流

### 介绍

商品 Feed 流组件可配置下拉刷新、列表加载、上滑加载功能，适用于商品信息展示，常见于页面的底部。

<!-- 应用场景包括图片分享、新闻推荐类、商品推荐等。 -->

### 安装
``` javascript
import { ProductFeed, ProductFeedItem } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { Price } from '@nutui/nutui-react';
import { Card } from '@nutui/nutui-biz';

const App = () => {

  const [list1, setList1] = useState([] as any)

  const [hasMore1, setHasMore1] = useState(true)

  const data = [
    {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      name: translated.name,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      name: translated.name,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    },
    ...
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

  const refresh = (done: () => void) => {
    setTimeout(() => {
      console.log('刷新成功')
      done()
    }, 1000)
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
      {list1.map((item: any, index: number)=> {
        return (
          <ProductFeedItem
            key={index}
            gutter={6}
            col={2}
            imgUrl={item.imgUrl}
            imgHeight="164"
            imgTag={<div className='img-label'><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
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


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | 左侧图片Url                                 | String  | -         |
| title     | 标题                   | String  | -    |
| price | 商品价格                         | String  | -      |
| vipPrice     | 会员价格                               | String | -    |
| shopDesc  | 店铺介绍                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shopName   | 店铺名称| String  | -      |
| prolistTpl   | 自定义商品介绍| React.ReactNode  | -      |
| priceTpl   | 价格自定义内容 | React.ReactNode  | -      |
| originTpl   | 价格后方自定义内容| React.ReactNode  | -      |
| shopTagTpl   | 店铺介绍自定义| React.ReactNode  | -      |
| footerTpl   | 右下角内容自定义| React.ReactNode  | -      |
| showType   | 展示形式，可选：`full-line`、`half-line`| String  | `full-line`      |
| bottomTpl   | 底部内容自定义| React.ReactNode  | -      |
| infotpl   | 信息内容自定义| React.ReactNode  | -      |
| isNeedPrice   | 是否需要价格展示| Boolean  | `true`      |
| imgTag   | 商品图片标签，常用于标志双 11、直播等| String  | -      |
| imgTagDirection   | 商品图片标签呈现位置，可选：`top-left`、`top-right`| String  | `top-left`      |
| isLazy   | 是否为懒加载图片| Boolean  | `false`      |
| titleTag   | 标题左侧标签，常用于活动标记等，不设置此参数或此参数为空，不展示| React.ReactNode  | -      |
| titleLine   | 标题行数，默认两行，想展示更多下面内容可设置为 1| String \| Number  | `2`      |
| linkUrl   | 跳转链接，默认点击整个卡片以 href 的形式跳转，可通过点击事件自定义 | String  | -      |
| imgWidth   | 宽度，默认单位`px` | String  | -      |
| imgHeight   | 高度，默认单位`px` | String  | -      |
| loadingImg   | 设置加载中提示图片，与slotLoding冲突，优先级高于slotLoding | String  | -      |
| errorImg   | 设置错误提示图片，与slotError冲突，优先级高于slotError | String  | -      |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClick | 点击事件 |  event: MouseEvent |
