/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-02-15 16:46:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-02-15 17:45:14
 */
import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ProductFeed } from '../productfeed'
import { ProductFeedItem } from '../../productfeeditem/productfeeditem'

test('props test', () => {
  const data = [
    {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }, {
      imgUrl: '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png',
      title: '我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题',
      price: '388',
      vipPrice: '378',
    }
  ]
  const { container } = render(
    <ProductFeed
      className="demo1"
      id="refreshScroll1"
      containerId="refreshScroll1"
      useWindow={false}
    >
      {data.map((item: any, index: number)=> {
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
                    199
                  </div>
                </div>
              </div>
            </>
          </ProductFeedItem>
        )
      })}
    </ProductFeed>
  )
})


