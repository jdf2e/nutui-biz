import React, { FunctionComponent, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import { Price, Tag, Image, ImageProps } from '@nutui/nutui-react'
import classNames from 'classnames'
import { errorImg } from '@/utils'
import { numericProp } from '@/utils/props'

import bem from '@/utils/bem'

export interface CardProps {
  title: string
  price: ReactNode
  shopName: string
  className: string
  showType: string
  style: CSSProperties
  titleLine: numericProp
  prolistTpl: ReactNode
  productTagsTpl: ReactNode
  priceAfterTpl: ReactNode
  bottomTpl: ReactNode
  infoTpl: ReactNode
  imgTag: ReactNode
  titleTag: ReactNode
  isNeedPrice: boolean
  imgTagDirection: string
  imageProps: Partial<ImageProps>
  onClick: () => void
  onClickShop: () => void
}
const defaultProps = {
  showType: 'full-line',
  titleLine: '2',
  imgTagDirection: 'top-left',
  imageProps: {
    isLazy: false,
    errorImg
  },
  isNeedPrice: true,
  onClick: () => {},
  onClickShop: () => {}
} as CardProps
export const Card: FunctionComponent<
  Partial<CardProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    titleLine,
    title,
    price,
    shopName,
    imgTag,
    titleTag,
    imageProps,
    isNeedPrice,
    productTagsTpl,
    priceAfterTpl,
    prolistTpl,
    bottomTpl,
    infoTpl,
    imgTagDirection,
    showType,
    onClick,
    onClickShop,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('card')

  const clampStyle = () => {
    if(titleLine > 1) return {'WebkitLineClamp': String(titleLine)} as CSSProperties
  }

  return (
    <div className={classNames([b(),className, {'half-line': showType === 'half-line'}])} style={style} {...rest} onClick={() => onClick()}>
      {
        showType === 'full-line' ?
        <div className={b('main')}>
          <a className={b('left')}>
            {imgTag && <div className={classNames(['img-tag', {'top-right': imgTagDirection === 'top-right'}])}>{imgTag}</div>}
            <Image {...imageProps} />
          </a>
          <div className={b('right')}>
            {infoTpl || <>
              {title && <div
                className={classNames([b('right__title'), {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
                style={clampStyle()}
              >{titleTag || ''}{title}</div>}
              {prolistTpl}
              {isNeedPrice && <div className={b('right__price')}>
                {(typeof price === 'number' || typeof price === 'string') ? <Price price={price} size="normal" /> : price}
                {priceAfterTpl}
              </div>}
              {productTagsTpl}
              <div className={b('right__shop')} onClick={ e => {
                e.stopPropagation()
                onClickShop()
              }}>
                {shopName && <div className={b('right__shop__name')}><span>{shopName}</span>&gt;</div>}
              </div>
            </>}
          </div>
        </div> : 
        <div className={b('main')}>
          <a className={b('left')}>
            {imgTag && <div className={classNames(['img-tag', {'top-right': imgTagDirection === 'top-right'}])}>{imgTag}</div>}
            <Image {...imageProps} />
          </a>
          <div className={b('right')}>
            {infoTpl || <>
              {title && <div 
                className={classNames([b('right__title'), {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
                style={clampStyle()}
              >{titleTag || ''}{title}</div>}
              {isNeedPrice && <div className={b('right__price')}>
                {(typeof price === 'number' || typeof price === 'string') ? <Price price={price} size="normal" /> : price}
                {priceAfterTpl}
              </div>}
              {productTagsTpl}
              <div className={b('right__shop')}>
                {shopName && <div className={b('right__shop__name')}><span>{shopName}</span>&gt;</div>}
              </div>
            </>}
          </div>
        </div>
      }
      {bottomTpl}
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
