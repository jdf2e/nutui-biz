import React from 'react'
import { Card } from '../card/card'
import { ProductFeed } from './productfeed'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  customProduct: string
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
      basic: '基本用法',
      customProduct: '自定义商品标签',
      customPro1: '活鲜',
      customPro2: '礼盒',
      customPro3: '国产',
      title:
        '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      customShop: '自定义店铺介绍',
      customPriceIcon: '价格后自定义标签',
      customFooter: '自定义右下角内容',
      customBottom: '自定义底部内容',
      customContent: '自定义',
      desc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    'zh-TW': {
      basic: '基本用法',
      customProduct: '自定義商品標簽',
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
      customProduct: 'Custom prolist',
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
  const data = [
    {
      imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: translated.title,
      price: '388',
      vipPrice: '378',
      shopDesc: translated.desc,
      delivery: translated.delivery,
      shopName: translated.shopName,
    }, {
      imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: translated.title,
      price: '388',
      vipPrice: '378',
      shopDesc: translated.desc,
      delivery: translated.delivery,
      shopName: translated.shopName,
    }
  ]
  
  return (
    <div className="demo">
      <>
        <h2>{translated.basic}</h2>
        <ProductFeed
          // data={data}
          col="2"
          gutter="2"
        >
          {data.map((item, index)=> {
            return (
              <Card
                key={index}
                imgUrl={item.imgUrl}
                // priceTpl={null}
                showType="half-line"
                // style={{width: '172px'}}
                imgTag={<div style={{background: 'red'}}>标签</div>}
              >
                我是标题
              </Card>
            )
          })}
        </ProductFeed>
      </>
    </div>
  )
}

export default ProductFeedDemo
