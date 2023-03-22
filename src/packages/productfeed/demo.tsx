import React, { useEffect, useState } from "react"
import { Tabs, TabPane, Price } from "@nutui/nutui-react"
import { ProductFeed } from "./productfeed"
import { useTranslate } from "../../sites/assets/locale"
import "../../styles/demo.css"

interface T {
  title1: string
  title2: string
  title3: string
  name: string
  desc: string
  label: string
}
interface dataType {
  id: number,
  imgUrl: string,
  name: string,
  desc: string,
  tag: string | boolean,
  price: string,
  label: string
}

const ProductFeedDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      title1: "双列",
      title2: "单列",
      title3: "下拉刷新",
      name:
        "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      label: "自营"
    },
    "en-US": {
      title1: "Double",
      title2: "Single",
      title3: "Pull down",
      name: "I am the title I am the title I am the title I am the title",
      desc: "buy more buy more",
      label: "Self"
    },
  })

  const [tab1value, setTab1value] = useState("0");

  const [data, setData] = useState<dataType[]>([])

  const [listDouble, setListDouble] = useState([] as any)
  const [listSingle, setListSingle] = useState([] as any)
  const [listRefresh, setListRefresh] = useState([] as any)

  const [hasMoreDouble, setHasMoreDouble] = useState(true)
  const [hasMoreSingle, setHasMoreSingle] = useState(true)
  const [hasMoreRefresh, setHasMoreRefresh] = useState(true)

  useEffect(() => {
    initData()
  }, [])

  const init = () => {
    for (let i = 0; i < 6; i++) {
      listDouble.push(data[i])
      listSingle.push(data[i])
      listRefresh.push(data[i])
    }
    setListDouble([...listDouble])
    setListSingle([...listSingle])
    setListRefresh([...listRefresh])
  }

  const initData = () => {
    for(var i = 0; i < 12; i++) {
      data.push({
        id: i + 1,
        imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
        name: translated.name,
        desc: translated.desc,
        tag: i == 3 && '标签标签',
        price: "388",
        label: translated.label,
      })
    }
    init()
  }

  const loadMore = (list: any) => {
    const curLen = list.length
    
    if (list.length >= data.length) {
      switch(list) {
        case listDouble: 
          setHasMoreDouble(false);
          break;
        case listSingle: 
          setHasMoreSingle(false);
          break;
        case listRefresh: 
          setHasMoreRefresh(false);
          break;
      }
    } else {
      for (let i = curLen; i < (curLen + 6 > data.length ? data.length : curLen + 6) ; i++) {
        list.push(data[i])
      }
      switch(list) {
        case listDouble: 
          setListDouble([...list]) 
          break;
        case listSingle: 
          setListSingle([...list]) 
          break;
        case listRefresh: 
          setListRefresh([...list]) 
          break;
      }
    }
  }

  const loadMoreDouble = (done: () => void) => {
    setTimeout(() => {
      loadMore(listDouble)
      done()
    }, 500)
  }

  const loadMoreSingle = (done: () => void) => {
    setTimeout(() => {
      loadMore(listSingle)
      done()
    }, 500)
  }

  const loadMoreRefresh = (done: () => void) => {
    setTimeout(() => {
      loadMore(listRefresh)
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      console.log("refresh")
      done()
    }, 1000)
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
      <>
        <Tabs value={tab1value} onChange={({ paneKey }) => {
          setTab1value(paneKey)
        }}>
          <TabPane title={translated.title1}>
            <ProductFeed
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
          </TabPane>
          <TabPane title={translated.title2}>
            <ProductFeed
              className="product-feed-demo2"
              id="refreshScrollSingle"
              data={listSingle}
              infiniteloadingProps={{
                hasMore: hasMoreSingle,
                containerId: "refreshScrollSingle",
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
          </TabPane>
          <TabPane title={translated.title3}>
            <ProductFeed
              id="refreshScroll3"
              data={listRefresh}
              infiniteloadingProps={{
                hasMore: hasMoreRefresh,
                containerId: "refreshScroll3",
                useWindow: false,
                isOpenRefresh: true,
                onLoadMore: loadMoreRefresh,
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
          </TabPane>
        </Tabs>
      </>
    </div>
  )
}

export default ProductFeedDemo
