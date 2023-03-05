import React, { FunctionComponent, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import { Price, Tag, Image, ImageProps } from '@nutui/nutui-react'
import classNames from 'classnames'
import { errorImg } from '@/utils'
import {numericProp} from '@/utils/props'

import {cn2} from '@/utils/bem'

export interface CardProps {
  title: string
  price: numericProp
  vipPrice: numericProp
  shopDesc: string
  delivery: string
  shopName: string
  className: string
  showType: string
  style: CSSProperties
  titleLine: numericProp
  prolistTpl: ReactNode
  shopTagTpl: ReactNode
  originTpl: ReactNode
  footerTpl: ReactNode
  priceTpl: ReactNode
  bottomTpl: ReactNode
  infoTpl: ReactNode
  imgTag: ReactNode
  titleTag: ReactNode
  isNeedPrice: boolean
  imgTagDirection: string
  imageProps: Partial<ImageProps>
  onClick: () => void
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
  onClick: () => {}
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
    vipPrice,
    shopDesc,
    delivery,
    shopName,
    imgTag,
    titleTag,
    imageProps,
    isNeedPrice,
    shopTagTpl,
    originTpl,
    prolistTpl,
    footerTpl,
    priceTpl,
    bottomTpl,
    infoTpl,
    imgTagDirection,
    showType,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = cn2('card')

  const handleClick = () => {
    onClick()
  }

  const clampStyle = () => {
    if(titleLine > 1) return {'WebkitLineClamp': String(titleLine)} as CSSProperties
  }

  return (
    <div className={classNames([b(),className, {'half-line': showType === 'half-line'}])} style={style} {...rest} onClick={handleClick}>
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
                {priceTpl ? priceTpl : (price && <Price price={price} size="normal" />)}
                {originTpl ? originTpl : (vipPrice && <Price className={b('right__price__origin')} price={vipPrice} size="normal" />)}
              </div>}
              <div className={b('right__other')}>
                {shopTagTpl || (
                  <>
                    {shopDesc && <Tag type="danger">{shopDesc}</Tag>}
                    {delivery && <Tag plain>{delivery}</Tag>}
                  </>
                )}
              </div>
              <div className={b('right__shop')}>
                {shopName && <div className={b('right__shop__name')}>{shopName}</div>}
                {footerTpl}
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
              {isNeedPrice && <div>
                {priceTpl ? priceTpl : (price && <Price price={price} size="normal" />)}
                {originTpl ? originTpl : (vipPrice && <Price className={b('right__price__origin')} price={vipPrice} size="normal" />)}
              </div>}
              <div className={b('right__other')}>
                {shopTagTpl || (
                  <>
                    {shopDesc && <Tag type="danger">{shopDesc}</Tag>}
                    {delivery && <Tag plain>{delivery}</Tag>}
                  </>
                )}
              </div>
              <div className={b('right__shop')}>
                {shopName && <div className={b('right__shop__name')}>{shopName}</div>}
                {footerTpl}
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
