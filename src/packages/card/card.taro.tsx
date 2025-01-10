import React, { FunctionComponent } from 'react'
import {Price,Tag} from '@nutui/nutui-react-taro'

import bem from '@/utils/bem'
import { View } from '@tarojs/components'

export interface CardProps {
  imgUrl: string
  title: string
  price: string
  vipPrice: string
  shopDesc: string
  delivery: string
  shopName: string
  className: string
  style: React.CSSProperties
  prolistTpl: React.ReactNode
  shopTagTpl: React.ReactNode
  originTpl: React.ReactNode
}
const defaultProps = {} as CardProps
export const Card: FunctionComponent<
  Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    imgUrl,
    title,
    price,
    vipPrice,
    shopDesc,
    delivery,
    shopName,
    shopTagTpl,
    originTpl,
    prolistTpl,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('card')
  return (
    <div className={`${b()} ${className}`} style={style} {...rest}>
      <View className={b('left')}>
        <img src={imgUrl} alt="" />
      </View>
      <View className={b('right')}>
        <View className={b('right__title')}>{title}</View>
        {prolistTpl}
        <View className={b('right__price')}>
          <Price price={price} />
          {originTpl || (
            <Price className={b('right__price__origin')} price={vipPrice} />
          )}
        </View>
        <div className={b('right__other')}>
          {shopTagTpl || (
            <>
              <Tag type="danger">{shopDesc}</Tag>
              <Tag plain>{delivery}</Tag>
            </>
          )}
        </div>
        <div className={b('right__shop')}>
          <div className={b('right__shop__name')}>{shopName}</div>
        </div>
      </View>
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
