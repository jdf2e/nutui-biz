import React, { useEffect, useState } from 'react'
import { Tabs, TabPane, Price } from '@nutui/nutui-react'
import { Card } from '../card/card'
import { ProductFeed } from './productfeed'
import { ProductFeedItem } from '../productfeeditem/productfeeditem'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss'

interface T {
  basic: string
  oneLine: string
  customPro1: string
  customPro2: string
  customPro3: string
  title: string
  customShop: string
  customPriceIcon: string
  customFooter: string
  customBottom: string
  customContent: string
  desc: string
  delivery: string
  shopName: string
}
const ProductFeedDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '多列',
      oneLine: '单列',
      customPro1: '下拉刷新',
      customPro2: '礼盒',
      customPro3: '国产',
      title:
        '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      customShop: '自定义店铺介绍',
      customPriceIcon: '价格后自定义标签',
      customFooter: '自定义右下角内容',
      customBottom: '自定义底部内容',
      customContent: '自定义',
      desc: '更多买点更多买点',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    'zh-TW': {
      basic: '基本用法',
      oneLine: '自定義商品標簽',
      customPro1: '活鮮',
      customPro2: '禮盒',
      customPro3: '國產',
      title:
        '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
      customShop: '自定義店鋪介紹',
      customPriceIcon: '價格後自定義標簽',
      customFooter: '自定義右下角內容',
      customBottom: '自定義底部內容',
      customContent: '自定義',
      desc: '自營',
      delivery: '廠商配送',
      shopName: '陽澄湖大閘蟹自營店>',
    },
    'en-US': {
      basic: 'Basic Usage',
      oneLine: 'Custom prolist',
      customPro1: 'tag',
      customPro2: 'tag',
      customPro3: 'tag',
      title: 'title',
      customShop: 'Custom Content',
      customPriceIcon: 'Price after custom tag',
      customFooter: 'Customize bottom right content',
      customBottom: 'Customize bottom content',
      customContent: 'custom',
      desc: 'desc',
      delivery: 'delivery',
      shopName: 'shopName>',
    },
  })

  const [tab1value, setTab1value] = useState('0');

  const [list1, setList1] = useState([] as any)
  const [list2, setList2] = useState([] as any)
  const [list3, setList3] = useState([] as any)

  const [hasMore1, setHasMore1] = useState(true)
  const [hasMore2, setHasMore2] = useState(true)
  const [hasMore3, setHasMore3] = useState(true)

  const data = [
    {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: translated.title,
      desc: translated.desc,
      price: '388',
      vipPrice: '378',
    }
  ]

  const loadMore1 = (done: () => void) => {
    console.log('loadMore', list1.length, data.length)
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

  const loadMore2 = (done: () => void) => {
    console.log('loadMore', list2.length, data.length)
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

  const loadMore3 = (done: () => void) => {
    console.log('loadMore', list3.length, data.length)
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

  const refresh = (done: () => void) => {
    setTimeout(() => {
      // Toast.text('刷新成功')
      done()
    }, 1000)
  }


  const init1 = () => {
    for (let i = 0; i < 6; i++) {
      list1.push(data[i])
    }
    setList1([...list1])
  }
  const init2 = () => {
    for (let i = 0; i < 6; i++) {
      list2.push(data[i])
    }
    setList2([...list2])
  }
  const init3 = () => {
    for (let i = 0; i < 6; i++) {
      list3.push(data[i])
    }
    setList3([...list3])
  }

  useEffect(() => {
    init1()
    init2()
    init3()
  }, [])
  
  return (
    <div className="demo">
      <>
        {/* <h2>{translated.basic}</h2> */}
        <Tabs value={tab1value} onChange={({ paneKey }) => {
          setTab1value(paneKey)
        }}>
          <TabPane title={translated.basic}>
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
                        {item.title}
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
          </TabPane>
          <TabPane title={translated.oneLine}>
            <ProductFeed
              className="demo2"
              id="refreshScroll2"
              hasMore={hasMore2}
              containerId="refreshScroll2"
              useWindow={false}
              onLoadMore={loadMore2}
            >
              {list2.map((item: any, index: number)=> {
                return (
                  <ProductFeedItem
                    key={index}
                    gutter={6}
                    col={1}
                    imgUrl={item.imgUrl}
                    imgHeight="120"
                    imgTag={<div className='img-label'><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
                  >
                    <>
                      <div className="name-box">
                        <div className="label">自营</div>
                        {item.title}
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
                  </ProductFeedItem>
                )
              })}
            </ProductFeed>
          </TabPane>
          <TabPane title={translated.customPro1}>
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
              {list3.map((item: any, index: number)=> {
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
                        {item.title}
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
          </TabPane>
        </Tabs>
      </>
    </div>
  )
}

export default ProductFeedDemo
