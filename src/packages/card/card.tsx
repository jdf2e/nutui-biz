import React, { FunctionComponent, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import {Price, Tag} from '@nutui/nutui-react'
import classNames from 'classnames'

import bem from '@/utils/bem'

export interface CardProps {
  imgUrl: string
  title: string
  price: string
  vipPrice: string
  shopDesc: string
  delivery: string
  shopName: string
  className: string
  showType: string
  style: CSSProperties
  titleLine: number | string
  prolistTpl: ReactNode
  shopTagTpl: ReactNode
  originTpl: ReactNode
  footerTpl: ReactNode
  priceTpl: ReactNode
  bottomTpl: ReactNode
  imgTag: ReactNode
  titleTag: ReactNode
  linkUrl: string
  isNeedPrice: boolean
  imgTagDirection: string
  onClick: () => void
}
const defaultProps = {
  showType: 'full-line',
  titleLine: '2',
  imgTagDirection: 'top-left',
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
    imgUrl,
    title,
    price,
    vipPrice,
    shopDesc,
    delivery,
    shopName,
    imgTag,
    titleTag,
    linkUrl,
    isNeedPrice,
    shopTagTpl,
    originTpl,
    prolistTpl,
    footerTpl,
    priceTpl,
    bottomTpl,
    imgTagDirection,
    showType,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('biz-card')

  const handleClick = () => {
    onClick && onClick()
  }

  const clampStyle = () => {
    if(titleLine > 1) return {'WebkitLineClamp': String(titleLine)} as CSSProperties
  }

  return (
    <div className={classNames([b(),className])} style={style} {...rest} onClick={handleClick}>
      {
        showType === 'full-line' ?
        <div className={b('main')}>
          <a className={b('left')} href={linkUrl}>
            <div className={classNames(['img-tag', {'top-right': imgTagDirection}])}>{imgTag}</div>
            <img src={imgUrl} alt="" />
          </a>
          <div className={b('right')}>
            <div
              className={classNames([b('right__title'), {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
              style={clampStyle()}
            >{titleTag || ''}{title}</div>
            {prolistTpl}
            {isNeedPrice && <div className={b('right__price')}>
              <Price price={price} />
              {originTpl || (
                <Price className={b('right__price__origin')} price={vipPrice} />
              )}
            </div>}
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
              {footerTpl}
            </div>
          </div>
        </div> : 
        <div className='half-line'>
          <a className='half-line-img' href={linkUrl}>
            <div className={classNames(['img-tag', {'top-right': imgTagDirection}])}>{imgTag}</div>
            <img src={imgUrl} alt="" />
          </a>
          <div 
            className={classNames(['half-line-title', {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
            style={clampStyle()}
          >{titleTag || ''}{title}</div>
          {isNeedPrice && <Price price={price} />}
          <div className='half-line-shop-name'>{shopName}</div>
        </div>
      }
      {bottomTpl}
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
