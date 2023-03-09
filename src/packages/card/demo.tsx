import React, {CSSProperties} from 'react'
import { Card } from './card'
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
  customBottom: string
  customContent: string
  customContent2: string
  shopName: string
}
const CardDemo = () => {
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
      customBottom: '自定义底部内容',
      customContent: '自定义',
      customContent2: '自定义促销信息等',
      shopName: '阳澄湖大闸蟹自营店',
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
      customBottom: 'Customize bottom content',
      customContent: 'custom',
      customContent2: 'Customize promotional information, etc.',
      shopName: 'shopName',
    },
  })
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: translated.title,
    price: '388',
    shopName: translated.shopName,
  }
  const tagStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '5px',
    marginLeft: '2px',
    width: '29px',
    height: '14px',
  }
  const wordStyles = {
    padding: '0 5px',
    borderRadius: '1px',
    fontSize: '10px',
    height: '15px',
    lineHeight: '15px',
    color: '#999',
    backgroundColor: '#f2f2f7',
    marginRight: '5px',
    marginTop: '3px',
    flexShrink: 0,
    maxWidth: '100%',
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  } as CSSProperties
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Card
          imageProps={{src: state.imgUrl}}
          title={state.title}
          price={state.price}
          shopName={state.shopName}
        />
        <h2>{translated.customProduct}</h2>
        <Card
          imageProps={{src: state.imgUrl}}
          title={state.title}
          price={state.price}
          shopName={state.shopName}
          prolistTpl={
            <div
              className="search_prolist_attr"
              style={{
                display: 'inline-flex',
                marginBottom: '1px',
                flexWrap: 'wrap',
                width: '100%'
              }}
            >
              {[
                translated.customPro1,
                translated.customPro2,
                translated.customPro3,
              ].map((item, index) => {
                return (
                  <span style={wordStyles} className="word" key={index}>
                    {item}
                  </span>
                )
              })}
            </div>
          }
        />
        <h2>{translated.customPriceIcon}</h2>
        <Card
          imageProps={{src: state.imgUrl}}
          title={state.title}
          price={state.price}
          shopName={state.shopName}
          priceAfterTpl={
            <img
              style={tagStyles}
              src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
              alt=""
            />
          }
        />
        <h2>{translated.customShop}</h2>
        <Card
          imageProps={{src: state.imgUrl}}
          title={state.title}
          price={state.price}
          shopName={state.shopName}
          productTagsTpl={<div>{translated.customShop}</div>}
        />
        <h2>{translated.customBottom}</h2>
        <Card
          imageProps={{src: state.imgUrl}}
          title={state.title}
          price={state.price}
          shopName={state.shopName}
          bottomTpl={
            <div style={{ fontSize: '12px', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>{translated.customContent2}</div>
          }
        />
        <h2>半行模式</h2>
        <>
          <Card
            imageProps={{src: state.imgUrl}}
            title={state.title}
            price={state.price}
            shopName={state.shopName}
            showType="half-line"
          />
          <Card
            imageProps={{src: state.imgUrl}}
            title={state.title}
            price={state.price}
            shopName={state.shopName}
            showType="half-line"
          />
        </>
      </div>
    </>
  )
}

export default CardDemo
