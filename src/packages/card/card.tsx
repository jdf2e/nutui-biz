import React, { FunctionComponent, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import { Price, Tag, Image } from '@nutui/nutui-react'
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
  infoTpl: ReactNode
  imgTag: ReactNode
  titleTag: ReactNode
  linkUrl: string
  isNeedPrice: boolean
  imgTagDirection: string
  isLazy: boolean
  onClick: () => void
}
const defaultProps = {
  showType: 'full-line',
  titleLine: '2',
  imgTagDirection: 'top-left',
  isLazy: false,
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
    infoTpl,
    imgTagDirection,
    isLazy,
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
            {imgTag && <div className={classNames(['img-tag', {'top-right': imgTagDirection === 'top-right'}])}>{imgTag}</div>}
            <Image src={imgUrl} isLazy={isLazy} />
          </a>
          <div className={b('right')}>
            {infoTpl || <>
              {title && <div
                className={classNames([b('right__title'), {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
                style={clampStyle()}
              >{titleTag || ''}{title}</div>}
              {prolistTpl}
              {isNeedPrice && <div className={b('right__price')}>
                {priceTpl ? priceTpl : (price && <Price price={price} />)}
                {originTpl ? originTpl : (vipPrice && <Price className={b('right__price__origin')} price={vipPrice} />)}
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
        <div className='half-line'>
          <a className='half-line-img' href={linkUrl}>
            {imgTag && <div className={classNames(['img-tag', {'top-right': imgTagDirection === 'top-right'}])}>{imgTag}</div>}
            <Image src={imgUrl} isLazy={isLazy} />
          </a>
          {infoTpl || <>
            {title && <div 
              className={classNames(['half-line-title', {'one-line': titleLine == 1}, {'multiple-lines': titleLine > 1}])}
              style={clampStyle()}
            >{titleTag || ''}{title}</div>}
            {isNeedPrice && <div>
              {priceTpl ? priceTpl : (price && <Price price={price} />)}
            </div>}
            <div className='half-line-shop-name'>{shopName}</div>
          </>}
        </div>
      }
      {bottomTpl}
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
