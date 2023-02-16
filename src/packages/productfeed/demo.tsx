import React, { useEffect, useState } from 'react'
import { Tabs, TabPane, Price } from '@nutui/nutui-react'
import { ProductFeed } from './productfeed'
import { ProductFeedItem } from '../productfeeditem/productfeeditem'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss'

interface T {
  title1: string
  title2: string
  title3: string
  name: string
  desc: string
}
const ProductFeedDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '多列',
      title2: '单列',
      title3: '下拉刷新',
      name:
        '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      desc: '更多买点更多买点',
    },
    'en-US': {
      title1: 'Multiple columns',
      title2: 'Single column',
      title3: 'Pull down to refresh',
      name: 'I am the title I am the title I am the title I am the title I am the title I am the title I am the title I am the title',
      desc: 'buy more buy more',
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }
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
        <Tabs value={tab1value} onChange={({ paneKey }) => {
          setTab1value(paneKey)
        }}>
          <TabPane title={translated.title1}>
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
          </TabPane>
          <TabPane title={translated.title2}>
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
                  </ProductFeedItem>
                )
              })}
            </ProductFeed>
          </TabPane>
          <TabPane title={translated.title3}>
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
          </TabPane>
        </Tabs>
      </>
    </div>
  )
}

export default ProductFeedDemo
