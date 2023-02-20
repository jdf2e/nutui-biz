import React, {
  FunctionComponent, ReactNode, CSSProperties, HTMLAttributes, useState
} from 'react'
import { Card } from '../card/card'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface ProductFeedItemProps {
  className: string
  style: CSSProperties
  col: number | string
  gutter: number | string
  imgUrl: string
  imgWidth: string
  imgHeight: string
  imgTag: ReactNode
  isImageLazy: boolean
  loadingImg: string
  errorImg: string
  onClick: () => void
}

const defaultProps = {
  col: 2,
  gutter: 6,
  imgHeight: '150',
  isImageLazy: true,
  loadingImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  onClick: () => { }
} as unknown as ProductFeedItemProps

export const ProductFeedItem: FunctionComponent<
  Partial<ProductFeedItemProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
    col,
    gutter,
    imgUrl,
    imgWidth,
    imgHeight,
    imgTag,
    isImageLazy,
    loadingImg,
    errorImg,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-productfeedItem')

  const cardStyle = () => {
    return {
      'width': col == 1 ? '100%' : 
                  `calc((100% - ${gutter}px)/${col})`,
    }
  }

  return (
    <div className={classNames([b(), className])} style={{ ...cardStyle(), ...style }} {...rest}>
      <Card
        imgUrl={imgUrl}
        showType={col == 1 ? 'full-line' : 'half-line'}
        imgTag={imgTag}
        infoTpl={children}
        isLazy={isImageLazy}
        imgHeight={imgHeight}
        loadingImg={loadingImg}
        errorImg={loadingImg}
      />
    </div>
  )
}

ProductFeedItem.defaultProps = defaultProps
ProductFeedItem.displayName = 'NutProductFeedItem'
